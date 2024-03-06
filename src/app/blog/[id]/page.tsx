"use client";

import BackButton from "@/components/BackButton";
import { Blog } from "@/types";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogDetailedView({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [blogData, setBlogData] = useState<Blog>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      setTimeout(() => controller.abort(), 5000);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/${id}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as Blog;
        setBlogData(data);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Ocurrió un problema: ", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="text-center">
      {loading ? (
        <div className="flex flex-col gap-5 items-center mt-20">
          <CircularProgress color="inherit" size={25} />
          <span>Loading...</span>
        </div>
      ) : !blogData ? (
        <>
          No se pudo obtener la informacion deseada. Volver a la{" "}
          <Link href="/" className="text-sky-500 hover:underline">
            home
          </Link>
        </>
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
