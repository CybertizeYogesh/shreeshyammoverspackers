import { getOriginalHomeHtml } from "@/utils/originalPage";

export default function OriginalHome() {
  return (
    <main
      className="original-page-shell original-home-shell"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getOriginalHomeHtml() }}
    />
  );
}
