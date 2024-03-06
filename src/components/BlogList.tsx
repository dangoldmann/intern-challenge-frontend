import { Blog } from "@/types";
import BlogPreviewCard from "./BlogPreviewCard";
import Link from "next/link";

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="container mx-auto py-12 text-center">
      {blogs.length === 0 ? (
        <p className="text-xl mt-5">
          There are no blogs.{" "}
          <Link href="/write" className="text-sky-500 hover:underline">
            Create
          </Link>{" "}
          one
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto xl:grid-cols-3 xl:gap-8">
          {blogs.map((blog) => (
            <BlogPreviewCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              content={blog.content}
            />
          ))}
        </div>
      )}
    </div>
  );
}
