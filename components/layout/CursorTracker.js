"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTracker() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

    useEffect(() => {
        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
                boxShadow: `
    0 0 20px rgba(168,85,247,0.8),
    0 0 60px rgba(236,72,153,0.6),
    0 0 120px rgba(99,102,241,0.5)
  `
            }}
            className="
  w-24 h-24
  fixed top-0 left-0
  rounded-full
  bg-gradient-to-tr from-pink-500 to-purple-500
  blur-sm
  pointer-events-none
  backdrop-blur-2xl
  border border-white/20
  mix-blend-screen
"

        />
    );
}
