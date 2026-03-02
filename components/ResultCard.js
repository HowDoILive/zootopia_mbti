"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResultCard({ mbti, result, onRestart }) {
  const [imgError, setImgError] = useState(false);

  if (!result) return null;

  const {
    characterNameKo,
    characterName,
    volunteerStyle,
    description,
    color,
    image,
  } = result;

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 border-zootopia-yellow/30 shadow-zootopia-green/5">
        {/* 상단: MBTI + 그라데이션 */}
        <div className={`bg-gradient-to-r ${color} p-6 text-white text-center`}>
          <motion.p
            className="text-3xl font-black tracking-widest mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {mbti}
          </motion.p>
          <motion.h2
            className="text-xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {characterNameKo}
            {characterName && (
              <span className="font-normal text-white/90 text-base ml-1">
                ({characterName})
              </span>
            )}
          </motion.h2>
        </div>

        {/* 캐릭터 이미지 영역 */}
        <div className="flex justify-center pt-6 pb-2">
          <motion.div
            className="relative w-32 h-32 rounded-2xl overflow-hidden bg-zootopia-cream border-2 border-zootopia-yellow/30 shadow-inner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 }}
          >
            {!imgError && image ? (
              <Image
                src={image}
                alt={characterNameKo}
                fill
                className="object-cover"
                sizes="128px"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center text-4xl font-black text-zootopia-yellow/70"
                aria-hidden
              >
                {characterNameKo.charAt(0)}
              </div>
            )}
          </motion.div>
        </div>

        {/* 봉사 현장 속 나의 모습 (한 줄) */}
        <div className="px-6 pb-2 text-center">
          <motion.p
            className="text-zootopia-green font-semibold text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            봉사 현장 속 나의 모습
          </motion.p>
          <motion.p
            className="text-zootopia-brown font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {volunteerStyle}
          </motion.p>
        </div>

        {/* 봉사 스타일 설명 */}
        <div className="p-6 pt-2">
          <motion.p
            className="text-zootopia-brown leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>

          <div className="mt-8 space-y-3">
            <motion.a
              href="https://forms.gle/PF3mNsGMJwUZWLW39"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl bg-gradient-to-r from-zootopia-green to-zootopia-yellow text-zootopia-brown font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              키비탄 가입 신청하기❤️
            </motion.a>

            <motion.button
              onClick={onRestart}
              className="w-full py-3 rounded-lg border border-zootopia-green/40 bg-white text-zootopia-green font-semibold text-sm hover:bg-zootopia-yellowLight/60 transition-all duration-200"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              다시 하기
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
