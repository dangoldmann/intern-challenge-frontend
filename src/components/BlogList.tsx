import { Blog } from "@/types";
import BlogPreviewCard from "./BlogPreviewCard";

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800 mx-auto px-16 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto xl:grid-cols-3 xl:gap-8">
        {blogs.map((blog) => (
          <BlogPreviewCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </div>
  );
}
