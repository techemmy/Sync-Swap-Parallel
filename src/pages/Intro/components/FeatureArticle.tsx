export interface FeatureArticleProps {
  name: string;
  description: string;
}

export default function FeatureArticle({
  name,
  description,
}: FeatureArticleProps) {
  return (
    <article className="shadow-thin bg-card p-6 text-left rounded-lg grid gap-y-4 hover:bg-gray-100">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-card-foreground text-[15px]">{description}</p>
    </article>
  );
}
