"use client";
import { getAllPosts } from "@/lib/WorkWithPosts";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

export default function Feed({ postAdded }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetchPosts();
  }, [postAdded]);
  return (
    <div className="
  relative
  rounded-3xl
  backdrop-blur-xl
  gap-3
  ">

      {posts.map((post) => (
        <>
          <div
            data-aos="fade-up"
          >
            <PostCard key={post._id} post={post} />
          </div>
        </>
      ))}
    </div>
  );
}
