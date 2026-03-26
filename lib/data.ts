export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  publishedAt: string;
  readMinutes: number;
  category: string;
  views: number;
};

export type Creator = {
  name: string;
  profile: string;
  notesCount: number;
  totalViews: number;
};

export const notes: Note[] = [
  {
    slug: "thinking-in-public",
    title: "思考を公開するための静かなフォーマット",
    excerpt: "見出しと段落だけで、読み手の集中を保つための設計メモ。",
    body: [
      "文章中心のインターフェースは、情報の整理力そのものが品質になる。",
      "装飾を増やすほど視線は散りやすくなるため、余白と文字サイズの設計が最優先になる。",
      "ランキングや人気情報も、強い色ではなく配置と序列で伝える方が長く読まれる。"
    ],
    author: "Mina Kato",
    publishedAt: "2026-03-11",
    readMinutes: 6,
    category: "Editorial",
    views: 3240
  },
  {
    slug: "minimal-card-pattern",
    title: "カードを飾らない時に必要な3つのルール",
    excerpt: "線、余白、文字階層だけで記事一覧の可読性を成立させる。",
    body: [
      "カードは目立たせる要素ではなく、情報を整理する器として扱う。",
      "境界線を薄く一定にし、角丸や影を抑えると一覧全体が落ち着く。",
      "リストの価値は並び順に出るため、人気順や新着順の提示を明確に分ける。"
    ],
    author: "Riku Sato",
    publishedAt: "2026-03-09",
    readMinutes: 4,
    category: "UI",
    views: 2890
  },
  {
    slug: "long-form-rhythm",
    title: "ロングフォーム記事のリズムを整える",
    excerpt: "段落幅、行間、見出し距離の組み合わせで没入をつくる。",
    body: [
      "本文の横幅を抑えることで、長文でも読者の目の移動負荷を減らせる。",
      "見出し前後の余白を大きく取ると、章の切り替えが明瞭になる。",
      "本文サイズは固定し、強調は太字よりも文脈で行うと読みやすさを保てる。"
    ],
    author: "Mina Kato",
    publishedAt: "2026-03-03",
    readMinutes: 8,
    category: "Writing",
    views: 2651
  },
  {
    slug: "ranking-without-noise",
    title: "ノイズを増やさないランキング表示",
    excerpt: "序数とタイポグラフィだけで人気情報を見せる設計。",
    body: [
      "ランキングは刺激的な色を使わなくても、順序情報だけで十分に伝わる。",
      "数字の視認性を高め、タイトルの密度を保つと静かな強さが出る。",
      "一覧では情報量よりも読み始めやすさを優先する。"
    ],
    author: "Haru Tan",
    publishedAt: "2026-02-24",
    readMinutes: 5,
    category: "Product",
    views: 2512
  }
];

export const creators: Creator[] = [
  {
    name: "Mina Kato",
    profile: "編集設計と長文体験を中心に執筆。",
    notesCount: 18,
    totalViews: 28400
  },
  {
    name: "Riku Sato",
    profile: "UIの情報設計と可読性の改善を研究。",
    notesCount: 14,
    totalViews: 22130
  },
  {
    name: "Haru Tan",
    profile: "プロダクト文脈における文章設計を担当。",
    notesCount: 11,
    totalViews: 19740
  }
];

export const popularNotes = [...notes].sort((a, b) => b.views - a.views).slice(0, 3);

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}
