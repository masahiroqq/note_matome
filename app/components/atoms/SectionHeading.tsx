type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function SectionHeading({ title, eyebrow, description }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="subtle-text">{description}</p> : null}
    </div>
  );
}
