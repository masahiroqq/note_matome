import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NoteDetailTemplate from "@/app/components/templates/NoteDetailTemplate";
import { getNoteBySlug, notes } from "@/lib/data";

type NotePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams(): Array<{ slug: string }> {
  return notes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: NotePageProps): Metadata {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return {
      title: "Not Found"
    };
  }

  return {
    title: note.title,
    description: note.excerpt
  };
}

export default function NoteDetailPage({ params }: NotePageProps) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  return <NoteDetailTemplate note={note} />;
}
