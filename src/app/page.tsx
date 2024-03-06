"use client";

import BlogList from "@/components/BlogList";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Blog } from "@/types";
import { useEffect, useState } from "react";

// const SERVER_URL = "https://intern-challenge-backend.onrender.com";
const SERVER_URL = "http://localhost:3200";

export default function Home() {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/blogs`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as Blog[];
        setBlogData(data);
      } catch (error) {
        console.error("Ocurrió un problema: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="space-y-2 mt-8 text-center">
        <h1 className="bg-gradient-to-r from-[#5344b2] via-[#6484f8] to-[#579df3] bg-clip-text text-transparent text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
          The Official OneSeven Blog
        </h1>
        <p className="text-[#0b0a38] lg:text-lg">
          The latest news, updates, and stories from the OneSeven team.
        </p>
      </div>
      {isLoading ? <LoadingSkeleton /> : <BlogList blogs={blogData} />}
    </>
  );
}
