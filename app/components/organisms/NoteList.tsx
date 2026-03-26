import type { Note } from "@/lib/data";
import NoteListItem from "@/app/components/molecules/NoteListItem";

type NoteListProps = {
  notes: Note[];
};

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteListItem key={note.slug} note={note} />
      ))}
    </ul>
  );
}
