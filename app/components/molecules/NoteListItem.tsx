import Link from "next/link";
import type { Note } from "@/lib/data";
import NoteMeta from "@/app/components/atoms/NoteMeta";

type NoteListItemProps = {
  note: Note;
};

export default function NoteListItem({ note }: NoteListItemProps) {
  return (
    <li className="note-item">
      <Link href={`/notes/${note.slug}`} className="note-link">
        <NoteMeta text={`${note.category} · ${note.readMinutes} min · ${note.publishedAt}`} />
        <h3>{note.title}</h3>
        <p>{note.excerpt}</p>
        <p className="note-author">By {note.author}</p>
      </Link>
    </li>
  );
}
