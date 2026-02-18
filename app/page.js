import CreatePost from "@/components/feed/CreatePost";
import Feed from "@/components/feed/Feed";
import CursorTracker from "@/components/layout/CursorTracker";

export default function HomePage() {
  return (
    <>
      <CursorTracker />
      <div className="mx-auto max-w-3xl px-6 space-y-6 mt-8">
        <CreatePost />
        <Feed />
      </div>
    </>
  );
}
