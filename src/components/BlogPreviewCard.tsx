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
  return (
    <div className="flex flex-col gap-2">
      <Link className="font-semibold" href={`/blog/${id}`}>
        <h2 className="text-2xl font-bold tracking-tight hover:underline">
          {title}
        </h2>
      </Link>
      <p>{content}</p>
      <Link
        className="font-semibold underline hover:text-gray-900 dark:hover:text-gray-100"
        href={`/blog/${id}`}
      >
        Read more
      </Link>
    </div>
  );
}
