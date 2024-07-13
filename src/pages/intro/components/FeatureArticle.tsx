export interface FeatureArticleProps {
    name: string;
    description: string;
}

export default function FeatureArticle({ name, description }: FeatureArticleProps) {
    return (
        <article className="shadow-light bg-white p-6 text-left rounded-lg grid gap-y-4 hover:bg-gray-100">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-500 text-[15px]">{description}</p>
        </article>
    )
}

