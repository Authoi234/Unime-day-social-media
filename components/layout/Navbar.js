export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
        
        <h1 className="text-lg font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          MySocial
        </h1>

        {/* Liquid Glass Avatar */}
        <div className="relative w-10 h-10 rounded-full">
          
          <div className="
            absolute inset-0
            rounded-full
            bg-gradient-to-br from-white/60 to-white/10
            backdrop-blur-xl
            border border-white/40
            shadow-[inset_0_2px_6px_rgba(255,255,255,0.6),inset_0_-4px_10px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.25)]
          " />

          <div className="
            absolute
            top-1 left-2
            w-4 h-4
            rounded-full
            bg-white/70
            blur-sm
            opacity-80
          " />

        </div>
      </div>
    </header>
  );
}
