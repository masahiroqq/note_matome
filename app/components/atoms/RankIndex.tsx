type RankIndexProps = {
  value: number;
};

export default function RankIndex({ value }: RankIndexProps) {
  return <span className="rank-index">{String(value).padStart(2, "0")}</span>;
}
