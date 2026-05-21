import { getOriginalHeaderHtml } from "@/utils/originalPage";

export default function OriginalHeader() {
  return <div className="original-global-header" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: getOriginalHeaderHtml() }} />;
}
