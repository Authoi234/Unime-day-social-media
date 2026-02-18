"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -3 }}
      className="
        relative rounded-3xl overflow-hidden my-5
        backdrop-blur-2xl
        bg-white/[0.06]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
    >
      {/* subtle top glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

      {/* AUTHOR */}
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex items-center gap-3">
          <img
            src={post.author?.imgurl || "https://i.pravatar.cc/150?img=3"}
            alt={post.author?.name || "User"}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white/20"
          />
          <div>
            <h3 className="font-semibold text-sm text-white">
              {post.author?.name || "Anonymous"}
            </h3>
            <p className="text-xs text-white/50">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* TITLE */}
      {post.title && (
        <div className="px-5 pt-4">
          <h2 className="font-semibold text-lg text-white tracking-tight">
            {post.title}
          </h2>
        </div>
      )}

      {/* CONTENT */}
      <div className="px-5 pt-2 pb-4 text-sm leading-relaxed text-white/80">
        {post.content}
      </div>

      {/* MEDIA */}
      {post.media?.length > 0 && (
        <div className="px-5 pb-4">
          <div
            className={`
              grid gap-2
              ${post.media.length > 1 ? "grid-cols-2" : "grid-cols-1"}
            `}
          >
            {post.media.map((m, idx) => (
              <div key={idx} className="relative w-full">
                {m.type === "image" ? (
                  <Image
                    src={m.url}
                    alt={`media-${idx}`}
                    width={800}
                    height={600}
                    className="w-full aspect-square object-cover rounded-2xl border border-white/10"
                  />
                ) : (
                  <video
                    src={m.url}
                    controls
                    className="w-full aspect-square object-cover rounded-2xl border border-white/10"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ENGAGEMENT STATS (placeholder for now) */}
      <div className="px-5 text-xs text-white/50 pb-2">
        12 likes · 3 comments
      </div>

      {/* ACTIONS */}
      <div className="flex justify-around items-center py-3 border-t border-white/10 bg-white/[0.03]">
        
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center gap-2 text-sm transition"
        >
          <motion.div
            whileTap={{ scale: 1.4 }}
            animate={{ color: liked ? "#ff4d6d" : "#ffffff80" }}
          >
            <Heart
              size={18}
              fill={liked ? "#ff4d6d" : "none"}
            />
          </motion.div>
          <span className={liked ? "text-white" : "text-white/70"}>
            Like
          </span>
        </button>

        <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
          <MessageCircle size={18} />
          Comment
        </button>

        <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
          <Share2 size={18} />
          Share
        </button>

      </div>
    </motion.div>
  );
}
