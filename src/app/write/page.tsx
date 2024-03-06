"use client";

import BackButton from "@/components/BackButton";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (title.length === 0 || content.length === 0)
      return toast.error("Title and content are required");

    setSending(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setSending(false);
    if (res.ok) {
      setTitle("");
      setContent("");
      toast.success("Post created successfully!");
    } else {
      toast.error("Failed to create post");
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-8 gap-10">
      <BackButton />
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Title"
          disabled={sending}
          className="w-48 min-[470px]:w-64 md:w-80 lg:w-[600px] text-3xl md:text-4xl lg:text-5xl border-none outline-none bg-transparent disabled:opacity-50 disabled:pointer-events-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-[85px] h-10 lg:w-[100px] lg:h-12 rounded-md bg-theme text-white p-2 hover:brightness-95 flex justify-center items-center"
        >
          {sending ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <span className="lg:text-lg">Publish</span>
          )}
        </button>
      </div>
      <textarea
        disabled={sending}
        className="text-xl border-none outline-none bg-transparent h-[500px] resize-none disabled:opacity-50 disabled:pointer-events-none"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Toaster />
    </div>
  );
}
