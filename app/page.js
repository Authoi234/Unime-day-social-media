"use client";
import CreatePost from "@/components/feed/CreatePost";
import Feed from "@/components/feed/Feed";
import CursorTracker from "@/components/layout/CursorTracker";
import { useState } from "react";

export default function HomePage() {
  const [postAdded, setPostAdded] = useState(null);
  return (
    <>
      <CursorTracker />
      <div className="mx-auto max-w-3xl px-6 space-y-6 mt-8">
        <CreatePost setPostAdded={setPostAdded} />
        <Feed postAdded={postAdded} />
      </div>
    </>
  );
}
