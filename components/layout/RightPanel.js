export default function RightPanel() {
  return (
    <aside className="sticky top-24 space-y-6">

      {/* Suggestions */}
      <div className="glass p-6 rounded-3xl">
        <h3 className="font-semibold mb-4">Suggested for you</h3>

        <Suggestion name="Jaber Ahmed" />
        <Suggestion name="Md. Nazmus Sakib Khan Auvro" />
        <Suggestion name="Authoi" />
      </div>

      {/* Trending */}
      <div className="glass p-6 rounded-3xl">
        <h3 className="font-semibold mb-4">Trending</h3>

        <Trend tag="#webdev" posts="1.2k posts" />
        <Trend tag="#design" posts="842 posts" />
        <Trend tag="#nextjs" posts="2.1k posts" />
      </div>

    </aside>
  );
}

function Suggestion({ name }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/30" />
        <span className="text-sm">{name}</span>
      </div>
      <button className="text-xs text-blue-400 hover:text-blue-300">
        Follow
      </button>
    </div>
  );
}

function Trend({ tag, posts }) {
  return (
    <div className="mb-3">
      <p className="text-sm font-medium">{tag}</p>
      <p className="text-xs text-white/50">{posts}</p>
    </div>
  );
}
