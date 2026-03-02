"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between text-sm text-zootopia-green/80 mb-2">
        <span>질문 {current} / {total}</span>
      </div>
      <div className="h-2.5 bg-zootopia-yellowLight/80 rounded-full overflow-hidden shadow-inner border border-zootopia-yellow/20">
        <motion.div
          className="h-full bg-gradient-to-r from-zootopia-yellow to-zootopia-green rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}
