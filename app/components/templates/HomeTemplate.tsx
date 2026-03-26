import Link from "next/link";
import { notes } from "@/lib/data";
import NoteList from "@/app/components/organisms/NoteList";
import PopularNotesSection from "@/app/components/organisms/PopularNotesSection";
import PopularCreatorsSection from "@/app/components/organisms/PopularCreatorsSection";
import SectionHeading from "@/app/components/atoms/SectionHeading";

export default function HomeTemplate() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Quiet Editorial Interface</p>
        <h1>文字の読みやすさを最優先にしたノートメディア</h1>
        <p>
          白背景、黒文字、広い余白、強いタイポグラフィ。装飾を抑え、記事内容で価値を伝えるためのトップページ。
        </p>
        <Link href="/notes" className="hero-link">
          すべての記事を見る
        </Link>
      </section>

      <section className="section-block">
        <SectionHeading title="Latest Notes" />
        <NoteList notes={notes} />
      </section>

      <PopularNotesSection />
      <PopularCreatorsSection />
    </main>
  );
}
