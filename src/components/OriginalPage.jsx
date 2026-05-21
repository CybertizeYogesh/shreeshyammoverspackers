import { getOriginalHtml, getOriginalTitle } from "@/utils/originalPage";
import InnerPage from "./InnerPage";

export default function OriginalPage({ slug }) {
  const html = getOriginalHtml(slug);
  const title = getOriginalTitle(slug);

  if (!html) {
    return <InnerPage title={title} eyebrow="Indian Best Packers & Movers" />;
  }

  return (
    <main className="original-page-shell" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
  );
}
