type NoteMetaProps = {
  text: string;
};

export default function NoteMeta({ text }: NoteMetaProps) {
  return <p className="note-meta">{text}</p>;
}
