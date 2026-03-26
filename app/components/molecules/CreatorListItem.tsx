import type { Creator } from "@/lib/data";

type CreatorListItemProps = {
  creator: Creator;
  rank: number;
};

export default function CreatorListItem({ creator, rank }: CreatorListItemProps) {
  return (
    <li>
      <p className="creator-rank">#{rank}</p>
      <div>
        <h3>{creator.name}</h3>
        <p>{creator.profile}</p>
        <p>
          {creator.notesCount} notes · {creator.totalViews.toLocaleString()} total views
        </p>
      </div>
    </li>
  );
}
