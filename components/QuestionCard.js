"use client";

import { motion } from "framer-motion";

const transition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.4,
};

export default function QuestionCard({ question, option1, option2, onSelect, questionNumber }) {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={transition}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-zootopia-yellow/30 shadow-zootopia-green/5">
        <p className="text-zootopia-green/70 text-sm font-medium mb-4">
          Q{questionNumber}
        </p>
        <h2 className="text-xl font-bold text-zootopia-brown mb-8 leading-relaxed">
          {question}
        </h2>

        <div className="space-y-4">
          <motion.button
            onClick={() => onSelect(option1.key)}
            className="w-full py-4 px-6 text-left rounded-xl bg-zootopia-yellowLight border-2 border-zootopia-yellow/40 hover:border-zootopia-yellow hover:bg-zootopia-yellow/30 transition-colors duration-200 text-zootopia-brown font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option1.text}
          </motion.button>
          <motion.button
            onClick={() => onSelect(option2.key)}
            className="w-full py-4 px-6 text-left rounded-xl bg-white border-2 border-zootopia-green/30 hover:border-zootopia-green hover:bg-zootopia-green/10 transition-colors duration-200 text-zootopia-brown font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option2.text}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
