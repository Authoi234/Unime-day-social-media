"use client";
import { getAllPosts } from "@/lib/WorkWithPosts";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="
  relative
  rounded-3xl
  backdrop-blur-xl
  gap-3
  ">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
