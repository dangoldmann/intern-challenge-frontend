"use client";

import BackButton from "@/components/BackButton";
import { Blog } from "@/types";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function BlogDetailedView({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [blogData, setBlogData] = useState<Blog>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as Blog;
        setBlogData(data);
      } catch (error) {
        console.error("Ocurrió un problema: ", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="text-center">
      {!blogData ? (
        <div className="flex flex-col gap-5 items-center mt-20">
          <CircularProgress color="inherit" size={25} />
          <span>Loading...</span>
        </div>
      ) : (
        <div className="space-y-5 mt-4">
          <BackButton />
          <div className="space-y-5 md:space-y-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              {blogData.title}
            </h1>
            <p className="text-justify mx-5 md:mx-10 lg:mx-16">
              {blogData.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
