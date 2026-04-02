'use client';
import '../../app/globals.css';
import { motion } from 'framer-motion';
export default function SpecialButton({text}) {
  return (
    <motion.button className="frutiger-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="inner">
        <div className="top-white"></div>
        <span className="text">{text}</span>
      </div>
    </motion.button>
  );
}