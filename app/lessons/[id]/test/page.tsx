"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { lessonQuestions } from "../../../data/questions";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function LessonTestPage() {
  const { id } = useParams();
  const questions = lessonQuestions[id as string] || [];

  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionIndex: number, answer: string) => {
    if (!showResult) {
      setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    }
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

  const getEvaluationMessage = (score: number) => {
    const total = questions.length;
    const ratio = score / total;
    if (ratio === 1) return "✅ ممتاز! أنت فهمت الدرس كويس جدًا.";
    if (ratio >= 0.5) return "🙂 كويس! بس راجع شوية حاجات.";
    return "⚠️ محتاج تذاكر الدرس تاني وتحاول تاني.";
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-40 pb-20 px-4 sm:px-8 max-w-4xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 leading-snug"
        >
          اختبار الدرس
          <span className="block break-words">{id}</span>
        </motion.h1>

        {questions.map((q, i) => (
          <div key={i} className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-semibold">{i + 1}. {q.question}</h2>
            <div className="grid gap-3">
              {q.options.map((option, j) => {
                const isCorrect = showResult && option === q.correctAnswer;
                const isWrong = showResult && answers[i] === option && option !== q.correctAnswer;

                return (
                  <div
                    key={j}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg border
                      ${isCorrect ? "bg-green-100/10 border-green-500 text-green-300" : ""}
                      ${isWrong ? "bg-red-100/10 border-red-500 text-red-400" : ""}
                      ${!isCorrect && !isWrong ? "border-gray-500/30" : ""}
                    `}
                  >
                    <label className="flex items-center gap-3 w-full cursor-pointer">
                      {!showResult && (
                        <input
                          type="radio"
                          name={`question-${i}`}
                          value={option}
                          checked={answers[i] === option}
                          onChange={() => handleAnswer(i, option)}
                        />
                      )}
                      <span className="flex-1">{option}</span>
                      {isCorrect && <FaCheck className="text-green-400" />}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center space-y-4">
          {!showResult && (
            <button
              onClick={() => setShowResult(true)}
              className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold"
            >
              تصحيح الاختبار
            </button>
          )}

          {showResult && (
            <>
              <p className="mt-6 text-xl font-bold text-yellow-300">
                نتيجتك: {calculateScore()} من {questions.length}
              </p>
              <p className="text-lg text-white">{getEvaluationMessage(calculateScore())}</p>

              <button
                onClick={handleRetry}
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-medium"
              >
                إعادة الاختبار 🔁
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
