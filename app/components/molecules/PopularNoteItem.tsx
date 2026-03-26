import Link from "next/link";
import type { Note } from "@/lib/data";
import RankIndex from "@/app/components/atoms/RankIndex";

type PopularNoteItemProps = {
  note: Note;
  rank: number;
};

export default function PopularNoteItem({ note, rank }: PopularNoteItemProps) {
  return (
    <li>
      <RankIndex value={rank} />
      <div>
        <Link href={`/notes/${note.slug}`}>{note.title}</Link>
        <p>
          {note.author} · {note.views.toLocaleString()} views
        </p>
      </div>
    </li>
  );
}
