import { creators } from "@/lib/data";
import SectionHeading from "@/app/components/atoms/SectionHeading";
import CreatorListItem from "@/app/components/molecules/CreatorListItem";

export default function PopularCreatorsSection() {
  return (
    <section id="popular-creators" className="section-block">
      <SectionHeading title="Popular Creators" />
      <ul className="creator-list">
        {creators.map((creator, index) => (
          <CreatorListItem key={creator.name} creator={creator} rank={index + 1} />
        ))}
      </ul>
    </section>
  );
}
