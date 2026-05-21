import { getOriginalFooterHtml } from "@/utils/originalPage";

export default function OriginalFooter() {
  return <div className="original-global-footer" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: getOriginalFooterHtml() }} />;
}
