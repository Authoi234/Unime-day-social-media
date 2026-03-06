"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Aperture, Video, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { createNewPost } from "@/lib/WorkWithPosts";

export default function CreatePost({setPostAdded}) {
  const prompts = [
    "Whats on your mind?",
    "A cosa stai pensando?",
    "আজকের অনুভূতি কী?",
    "ما الذي يدور في ذهنك؟",
    "你在想什么",
  ];

  const [index, setIndex] = useState(0);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      media: [],
    },
  });

  const postContent = watch("content");

  /* rotating placeholder */
  useEffect(() => {
    if (postContent) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % prompts.length);
    }, 1500);

    return () => clearInterval(id);
  }, [postContent]);

  /* UI-only preview handler */
  const handleLocalPreview = (e, type) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    setIsUploading(true);

    const previews = files.map((file) => ({
      url: URL.createObjectURL(file),
      type,
      file,
    }));

    // visual preparation phase (you handle real processing later)
    setTimeout(() => {
      setMediaFiles((prev) => [...prev, ...previews]);
      setIsUploading(false);
    }, 400);
  };

  const removeMedia = (indexToRemove) => {
    setMediaFiles((prev) =>
      prev.filter((_, i) => i !== indexToRemove)
    );
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        title: data.title,
        content: data.content,
        author: {
          name: "Demo User",
          id: "demo-user-001",
          imgurl: "https://i.pravatar.cc/150?img=3",
        },
        media: mediaFiles,
      };

      const result = await createNewPost(payload);
      console.log("✅ Post created:", result);
      setPostAdded(result);

      reset();
      setMediaFiles([]);
    } catch (err) {
      console.error("❌ Failed:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        rounded-2xl
        bg-white/[0.05]
        backdrop-blur-3xl
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.6)]
        p-4
      "
      >
      {/* HEADER */}
      <div className="flex gap-3 items-center mb-2 pb-2">
        <div className="w-11 h-11 rounded-full bg-white" />

        <div className="flex-1">
          {/* TITLE */}
          <input
            {...register("title", {
              required: "Title is required",
              minLength: { value: 3, message: "Min 3 characters" },
            })}
            className="w-full bg-transparent outline-none text-lg font-semibold text-white mb-1"
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-red-400 text-xs mb-2">
              {errors.title.message}
            </p>
          )}

          {/* CONTENT */}
          <div className="relative">
            <input
              {...register("content", {
                required: "Content is required",
              })}
              className="w-full bg-transparent outline-none text-base text-white"
            />

            {!postContent && (
              <AnimatePresence mode="wait">
                <motion.span
                  key={prompts[index]}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-base text-white"
                >
                  {prompts[index]}
                </motion.span>
              </AnimatePresence>
            )}
          </div>

          {errors.content && (
            <p className="text-red-400 text-xs mt-1">
              {errors.content.message}
            </p>
          )}
        </div>
      </div>

      {/* MEDIA PREVIEW */}
      {mediaFiles.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {mediaFiles.map((media, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group overflow-hidden rounded-lg"
            >
              {media.type === "image" ? (
                <img
                  src={media.url}
                  className="w-40 h-32 flex-1 object-cover"
                />
              ) : (
                <video
                  src={media.url}
                  className="w-40 h-32 flex-1 object-cover"
                  controls
                />
              )}

              <button
                type="button"
                onClick={() => removeMedia(i)}
                className="absolute top-1 right-1 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
              >
                <X size={16} className="text-white" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* UPLOADING STATE */}
      <AnimatePresence>
        {isUploading && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="text-sm text-white/60 mt-2"
          >
            Preparing media...
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <div className="flex justify-between mt-3 pt-2 border-t border-white/10">
        <div className="flex gap-4">

          {/* IMAGE PICKER */}
          <label className="relative cursor-pointer group">
            <input
              type="file"
              accept="image/*"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleLocalPreview(e, "image")}
            />
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/70 group-hover:text-white transition"
            >
              <Aperture size={26} />
            </motion.div>
          </label>

          {/* VIDEO PICKER */}
          <label className="relative cursor-pointer group">
            <input
              type="file"
              accept="video/*"
              multiple
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => handleLocalPreview(e, "video")}
            />
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="text-white/70 group-hover:text-white transition"
            >
              <Video size={26} />
            </motion.div>
          </label>
        </div>

        <input
          type="submit"
          value="Post"
          className="bg-white text-black px-4 py-1.5 rounded-full text-sm active:scale-95 transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!watch("content") || !watch("title")}
        />
      </div>
    </form>
  );
}
