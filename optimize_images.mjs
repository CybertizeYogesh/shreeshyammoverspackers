import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const TARGET_SIZE_KB = 120;
const TARGET_SIZE_BYTES = TARGET_SIZE_KB * 1024;
const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', '.vscode'];
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png'];
const CODE_EXTS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json', '.md'];

async function getFiles(dir, exts) {
    let results = [];
    let list;
    try {
        list = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
        return results;
    }
    
    for (const dirent of list) {
        if (dirent.isDirectory()) {
            if (!IGNORE_DIRS.includes(dirent.name)) {
                results = results.concat(await getFiles(path.join(dir, dirent.name), exts));
            }
        } else if (dirent.isFile()) {
            const ext = path.extname(dirent.name).toLowerCase();
            if (exts.includes(ext)) {
                results.push(path.join(dir, dirent.name));
            }
        }
    }
    return results;
}

async function optimizeImages() {
    console.log('Scanning for images...');
    const imageFiles = await getFiles(process.cwd(), IMAGE_EXTS);
    console.log(`Found ${imageFiles.length} images.`);

    if (imageFiles.length === 0) {
        console.log('No images found. Exiting.');
        return;
    }

    const replacements = []; 
    const filesToDelete = [];

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const dirname = path.dirname(file);
        const basename = path.basename(file, ext);
        const newFilename = `${basename}.webp`;
        const newFilePath = path.join(dirname, newFilename);
        const originalFilename = path.basename(file);

        console.log(`\nProcessing: ${file}`);
        
        try {
            const metadata = await sharp(file).metadata();
            let quality = 80;
            let width = metadata.width;
            
            let buffer = await sharp(file).webp({ quality }).toBuffer();
            
            while (buffer.length > TARGET_SIZE_BYTES && (quality > 10 || width > 100)) {
                if (quality > 30) {
                    quality -= 10;
                } else {
                    width = Math.floor(width * 0.9);
                }
                buffer = await sharp(file).resize(width).webp({ quality }).toBuffer();
            }
            
            await fs.writeFile(newFilePath, buffer);
            console.log(` -> Converted to ${newFilename} (${(buffer.length / 1024).toFixed(2)} KB)`);
            
            replacements.push({ original: originalFilename, new: newFilename });
            filesToDelete.push(file);
        } catch (error) {
            console.error(` -> Error processing ${file}:`, error.message);
        }
    }

    console.log('\nScanning for code files to update...');
    const codeFiles = await getFiles(process.cwd(), CODE_EXTS);
    
    // Sort replacements by length descending to avoid partial matches
    // e.g., replacing 'background-image.png' before 'image.png'
    replacements.sort((a, b) => b.original.length - a.original.length);

    // Deduplicate replacements
    const uniqueReplacements = [];
    const seen = new Set();
    for (const r of replacements) {
        if (!seen.has(r.original)) {
            seen.add(r.original);
            uniqueReplacements.push(r);
        }
    }

    let modifiedFilesCount = 0;
    
    for (const file of codeFiles) {
        try {
            let content = await fs.readFile(file, 'utf8');
            let modified = false;

            for (const { original, new: newName } of uniqueReplacements) {
                if (content.includes(original)) {
                    // split and join to replace all occurrences efficiently
                    content = content.split(original).join(newName);
                    modified = true;
                }
            }

            if (modified) {
                await fs.writeFile(file, content, 'utf8');
                console.log(`Updated references in: ${file}`);
                modifiedFilesCount++;
            }
        } catch (error) {
            console.error(`Error updating file ${file}:`, error.message);
        }
    }
    
    console.log(`\nUpdated references in ${modifiedFilesCount} code files.`);
    
    console.log('\nCleaning up original images...');
    let deletedCount = 0;
    for (const file of filesToDelete) {
        try {
            await fs.unlink(file);
            deletedCount++;
        } catch (error) {
            console.error(`Error deleting ${file}:`, error.message);
        }
    }
    console.log(`Deleted ${deletedCount} original images.`);

    console.log('\nOptimization complete! ✨');
}

optimizeImages().catch(console.error);
