import { HeroSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/HeroSlide";
import { StorytellersSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/StorytellersSlide";
import { ScrapbookSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ScrapbookSlide";
import { ReelGridSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ReelGridSlide";
import { QuoteSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/QuoteSlide";
import { SocialsSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/SocialsSlide";
import { ClosingSlide } from "@/components/sites/ourcerita-co-e1f6b6c5/root-8a5edab2/ClosingSlide";
import { getSiteContent } from "@/lib/content/store";

/**
 * ourcerita.co homepage — seven fixed 16:9 slides stacked in source order.
 *
 * The original is a Canva Sites deck rendered inside its own scroll container
 * with `body { overflow: hidden }`. Native document scrolling is equivalent here
 * and behaves better, so the slides simply stack; nothing is sticky or overlaid.
 *
 * Content (wording, image/video src) is loaded once here from the admin-editable
 * store and passed down as a per-slide slice; layout/geometry stays hardcoded in
 * each slide component.
 */
export default async function Home() {
  const content = await getSiteContent();

  return (
    <main className="w-full">
      <HeroSlide content={content.hero} />
      <StorytellersSlide content={content.storytellers} />
      <ScrapbookSlide content={content.scrapbook} />
      <ReelGridSlide content={content.reelGrid} />
      <QuoteSlide content={content.quote} />
      <SocialsSlide content={content.socials} />
      <ClosingSlide content={content.closing} />
    </main>
  );
}
