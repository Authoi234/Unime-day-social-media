'use client';
import '../../app/globals.css';
import { motion } from 'framer-motion';

const myStyle = {
  color: "#cfd8ff",
  textShadow: `
    0 0 6px #0029fa,
    0 0 20px #001a9e,
    0 0 30px #4a008f,
    0 0 50px #5f00cc,
    0 0 80px #a100ff
  `,
  filter: "brightness(1.7) saturate(1.5)",
};
export default function SpecialButton({ text }) {
  return (
    <motion.button className="special_button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div class="wrap">
        <p>
          <span style={myStyle}>✧</span>
          <span style={myStyle}>✦</span>
          {text}
        </p>
      </div>
    </motion.button>
  );
}