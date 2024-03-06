import Link from "next/link";

interface BlogPreviewCardProps {
  id: number;
  title: string;
  content: string;
}

export default function BlogPreviewCard({
  id,
  title,
  content,
}: BlogPreviewCardProps) {
  const maxContentCharacters = 400;

  return (
    <div className="flex flex-col gap-2">
      <Link className="font-semibold" href={`/blog/${id}`}>
        <h2 className="text-xl md:text-2xl font-bold tracking-tight hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-justify text-sm md:text-base">
        {content.substring(0, maxContentCharacters)}
      </p>
      <Link
        className="font-semibold underline hover:text-gray-900"
        href={`/blog/${id}`}
      >
        Read more
      </Link>
    </div>
  );
}
