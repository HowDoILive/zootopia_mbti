"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getRandomQuestionSet, calculateMBTI } from "@/lib/questions";
import { MBTI_RESULTS } from "@/lib/results";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";
import ResultCard from "@/components/ResultCard";

const QUESTION_COUNT = 8;

export default function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = QUESTION_COUNT;
  const currentQuestion = questions[currentIndex];

  const handleStart = () => {
    setQuestions(getRandomQuestionSet());
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setIsStarted(true);
  };

  const handleSelect = (choice) => {
    const newAnswers = {
      ...answers,
      [currentIndex]: [currentQuestion.dimension, choice],
    };
    setAnswers(newAnswers);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const mbti = useMemo(() => {
    if (!isFinished) return null;
    return calculateMBTI(answers);
  }, [isFinished, answers]);

  const result = mbti ? MBTI_RESULTS[mbti] : null;

  const handleRestart = () => {
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <h1 className="text-3xl md:text-4xl font-black text-zootopia-brown mb-4">
            주토피아 봉사 스타일
            <br />
            <span className="text-zootopia-green">MBTI 테스트</span>
          </h1>
          <p className="text-zootopia-brown/80 mb-8 leading-relaxed">
            나의 봉사 스타일은 주토피아의 어떤 캐릭터와 비슷할까요?
            <br />
            총 {QUESTION_COUNT}개의 질문으로 알아보세요.
          </p>
          <motion.button
            onClick={handleStart}
            className="px-12 py-4 rounded-2xl bg-gradient-to-r from-zootopia-yellow to-zootopia-green text-zootopia-brown font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            테스트 시작하기
          </motion.button>
        </motion.div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 py-16">
        <ResultCard mbti={mbti} result={result} onRestart={handleRestart} />
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 py-16">
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentIndex}
          question={currentQuestion.question}
          option1={currentQuestion.option1}
          option2={currentQuestion.option2}
          onSelect={handleSelect}
          questionNumber={currentIndex + 1}
        />
      </AnimatePresence>
    </div>
  );
}
