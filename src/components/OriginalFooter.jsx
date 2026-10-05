import { getOriginalFooterHtml } from "@/utils/originalPage";
import CopyrightYearUpdater from "@/components/CopyrightYearUpdater";

export default function OriginalFooter() {
  return (
    <>
      <div
        className="original-global-footer"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: getOriginalFooterHtml() }}
      />
      <CopyrightYearUpdater />
    </>
  );
}
