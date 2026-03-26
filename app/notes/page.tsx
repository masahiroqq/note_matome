import NotesIndexTemplate from "@/app/components/templates/NotesIndexTemplate";
import { notes } from "@/lib/data";

export default function NotesPage() {
  return <NotesIndexTemplate notes={notes} />;
}
