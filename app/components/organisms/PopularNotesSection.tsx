import { popularNotes } from "@/lib/data";
import SectionHeading from "@/app/components/atoms/SectionHeading";
import PopularNoteItem from "@/app/components/molecules/PopularNoteItem";

export default function PopularNotesSection() {
  return (
    <section id="popular-notes" className="section-block">
      <SectionHeading title="Popular Notes" />
      <ol className="rank-list">
        {popularNotes.map((note, index) => (
          <PopularNoteItem key={note.slug} note={note} rank={index + 1} />
        ))}
      </ol>
    </section>
  );
}
