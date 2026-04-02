import '../../app/globals.css';
import SpecialButton from './../ui-items/Specialbutton';
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-lg font-bold tracking-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          MySocial
        </h1>

        <SpecialButton text = "Login" />

      </div>
    </header>
  );
}
