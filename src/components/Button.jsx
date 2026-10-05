import Link from "next/link";

export default function Button({ href, children, yellow = false, className = "" }) {
  const classes = `th-btn star-btn ${yellow ? "bg-theme2 text-white" : ""} ${className}`.trim();
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
