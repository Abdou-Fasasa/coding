"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { lessonQuestions } from "../../../data/questions";
import { useState } from "react";

export default function LessonTestPage() {
  const { id } = useParams();
  const questions = lessonQuestions[id as string] || [];

  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500"
        >
          اختبار الدرس رقم {id}
        </motion.h1>

        {questions.map((q, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">{i + 1}. {q.question}</h2>
            <div className="grid gap-2">
              {q.options.map((option, j) => (
                <label key={j} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={option}
                    checked={answers[i] === option}
                    onChange={() => handleAnswer(i, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            onClick={() => setShowResult(true)}
            className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold"
          >
            تصحيح الاختبار
          </button>

          {showResult && (
            <p className="mt-6 text-xl font-bold text-yellow-300">
              نتيجتك: {calculateScore()} من {questions.length}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
