import type { Note } from "@/lib/data";
import NoteList from "@/app/components/organisms/NoteList";
import SectionHeading from "@/app/components/atoms/SectionHeading";

type NotesIndexTemplateProps = {
  notes: Note[];
};

export default function NotesIndexTemplate({ notes }: NotesIndexTemplateProps) {
  return (
    <main>
      <section className="section-block top-gap">
        <SectionHeading
          eyebrow="Articles"
          title="記事一覧"
          description="新着と読みやすさを重視した一覧。装飾よりも本文導線を優先。"
        />
      </section>
      <section className="section-block">
        <NoteList notes={notes} />
      </section>
    </main>
  );
}
