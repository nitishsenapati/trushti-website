import Reveal from "@/components/layout/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryGrid from "@/components/category/CategoryGrid";

export default function CategoriesSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading eyebrow="More to Come" title="One brand. Many things for everyday living." align="left" />
        <Reveal delay={100} className="mt-14">
          <CategoryGrid />
        </Reveal>
      </div>
    </section>
  );
}
