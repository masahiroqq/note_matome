import type { Note } from "@/lib/data";

type NoteDetailTemplateProps = {
  note: Note;
};

export default function NoteDetailTemplate({ note }: NoteDetailTemplateProps) {
  return (
    <main>
      <article className="article-wrap">
        <p className="eyebrow">{note.category}</p>
        <h1>{note.title}</h1>
        <p className="article-meta">
          {note.author} · {note.publishedAt} · {note.readMinutes} min read
        </p>
        {note.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
