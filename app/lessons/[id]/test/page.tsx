"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { lessonQuestions } from "../../../data/questions"; // Assuming this path is correct
import { useState, useEffect, useMemo } from "react"; // Add useMemo
import { FaCheck, FaTimes, FaRedoAlt, FaQuestionCircle, FaStar, FaInfoCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Added more icons
import Link from "next/link"; // For navigation buttons

// --- Centralized Lesson Data (Excluding 'Html-lesson14') ---
// NOTE: In a larger application, this data would ideally come from a centralized
// source (like an API or a shared data file) to avoid duplication and ensure consistency.
// For this example, it's included here.
const allLessonsData: {
  [key: string]: { title: string; video?: string; description?: string }; // video and description are optional as this is a test page
} = {
  // HTML Lessons - "Html-lesson14" is explicitly excluded here
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
  },
  "Html-lesson3": {
    title: "بناء هيكل صفحة الويب (HTML)",
  },
  "Html-lesson4": {
    title: "عناصر HTML ومكوناتها",
  },
  "Html-lesson5": {
    title: "التعامل مع النصوص في HTML",
  },
  "Html-lesson6": {
    title: "التعامل مع الروابط في HTML",
  },
  "Html-lesson7": {
    title: "التعامل مع الصور في HTML",
  },
  "Html-lesson8": {
    title: "التعامل مع القوائم في HTML – Lists",
  },
  "Html-lesson9": {
    title: "الجداول في HTML – Tables",
  },
  "Html-lesson10": {
    title: "النماذج في HTML – Forms",
  },
  "Html-lesson11": {
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
  },
  "Html-lesson12": {
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
  },
  "Html-lesson13": {
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
  },
  // CSS Lessons
  "Css-lesson1": {
    title: "مقدمة في CSS",
  },
};

// Create an ordered list of lesson IDs for navigation
const orderedLessonIds = Object.keys(allLessonsData);

// --- Component Start ---
export default function LessonTestPage() {
  const { id } = useParams();
  const lessonId = id as string;
  const questions = lessonQuestions[lessonId] || [];
  const lessonTitle = allLessonsData[lessonId]?.title || `الدرس ${lessonId}`;

  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0); // Track retry attempts

  // Calculate if all questions are answered using useMemo for performance
  const allQuestionsAnswered = useMemo(() => {
    return Object.keys(answers).length === questions.length;
  }, [answers, questions.length]);

  // Determine current lesson index for navigation
  const currentLessonIndex = orderedLessonIds.findIndex((lId) => lId === lessonId);
  const prevLessonId = currentLessonIndex > 0 ? orderedLessonIds[currentLessonIndex - 1] : null;
  const nextLessonId = currentLessonIndex < orderedLessonIds.length - 1 ? orderedLessonIds[currentLessonIndex + 1] : null;

  const handleAnswer = (questionIndex: number, answer: string) => {
    if (!showResult) { // Prevent changing answers after submission
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
    if (total === 0) return "";
    const ratio = score / total;
    if (ratio === 1) return "✅ ممتاز! أنت فهمت الدرس كويس جدًا ونجحت بتفوق!";
    if (ratio >= 0.75) return "👍 أداء جيد جداً! أنت قريب من الإتقان، استمر.";
    if (ratio >= 0.5) return "🙂 جيد! راجع النقاط اللي ما كنتش متأكد منها.";
    return "⚠️ محتاج تذاكر الدرس تاني وتراجع أساسياته.";
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResult(false);
    setAttemptCount(prev => prev + 1); // Increment attempt count
  };

  // Logic for a celebratory effect (e.g., confetti)
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    if (showResult && calculateScore() === questions.length && questions.length > 0) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showResult, questions.length]);

  // --- No Questions Found State ---
  if (questions.length === 0) {
    return (
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-center items-center">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-yellow-400 p-8 rounded-xl bg-[#1e293b] shadow-lg border border-purple-500/50"
        >
          <FaInfoCircle className="inline-block text-5xl mb-4 text-pink-400" />
          <p>عذراً، لا يوجد اختبار متاح لـ " {lessonTitle} " حالياً.</p>
          <p className="text-lg text-gray-400 mt-2">نعمل على إضافة المزيد من الاختبارات قريباً!</p>
        </motion.div>
        <Footer />
      </div>
    );
  }

  // --- Main Test Page Render ---
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-40 pb-20 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 leading-snug mb-8"
        >
          اختبار الدرس:{" "}
          <span className="block mt-2 md:inline">{lessonTitle}</span>
        </motion.h1>

        {/* Progress Indicator */}
        <AnimatePresence mode="wait">
          {!showResult && (
            <motion.p
              key="progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center text-lg text-gray-300 mb-8 p-3 bg-[#1e293b] rounded-lg shadow-inner"
            >
              أجبت على <span className="font-bold text-yellow-300">{Object.keys(answers).length}</span> من <span className="font-bold text-cyan-300">{questions.length}</span> أسئلة
            </motion.p>
          )}
        </AnimatePresence>

        {/* Questions Section */}
        <div className="space-y-6">
          {questions.map((q, i) => (
            <motion.div
              key={`${i}-${attemptCount}`} // Key changes on retry to remount and reset animation
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h2 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-3">
                <FaQuestionCircle className="text-pink-400 text-2xl" /> {i + 1}. {q.question}
              </h2>
              <div className="grid gap-3">
                {q.options.map((option, j) => {
                  const isSelected = answers[i] === option;
                  const isCorrect = showResult && option === q.correctAnswer;
                  const isWrong = showResult && isSelected && option !== q.correctAnswer;

                  return (
                    <motion.div
                      key={j}
                      whileHover={!showResult ? { scale: 1.01, backgroundColor: "rgba(30, 41, 59, 0.7)" } : {}}
                      whileTap={!showResult ? { scale: 0.98 } : {}}
                      className={`flex items-center justify-between px-5 py-3 rounded-lg border cursor-pointer transition-all duration-200 ease-in-out
                        ${isCorrect ? "bg-green-700/20 border-green-500 text-green-300 shadow-lg-green" : ""}
                        ${isWrong ? "bg-red-700/20 border-red-500 text-red-400 shadow-lg-red" : ""}
                        ${!isCorrect && !isWrong && isSelected ? "bg-blue-700/20 border-blue-500 text-blue-300 shadow-lg-blue" : ""}
                        ${!isCorrect && !isWrong && !isSelected ? "border-gray-600/50 hover:border-gray-500" : ""}
                        ${showResult && !isSelected && option === q.correctAnswer ? "border-green-500 bg-green-700/10 text-green-300 opacity-70" : ""} {/* Show correct if not selected */}
                      `}
                      onClick={() => handleAnswer(i, option)}
                    >
                      <label className="flex items-center gap-4 w-full cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${i}`}
                          value={option}
                          checked={isSelected}
                          onChange={() => handleAnswer(i, option)}
                          disabled={showResult}
                          className="form-radio h-5 w-5 text-pink-500 bg-gray-700 border-gray-500 focus:ring-pink-500 transition-colors duration-200"
                        />
                        <span className="flex-1 text-lg font-medium">{option}</span>
                      </label>
                      {showResult && isCorrect && <FaCheck className="text-green-400 text-xl animate-fade-in" />}
                      {showResult && isWrong && <FaTimes className="text-red-400 text-xl animate-fade-in" />}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons & Results */}
        <div className="text-center space-y-6 mt-12">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.button
                key="submit-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowResult(true)}
                disabled={!allQuestionsAnswered}
                className={`w-full max-w-xs px-8 py-4 rounded-xl text-white font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-3 mx-auto
                  ${allQuestionsAnswered ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" : "bg-gray-700 cursor-not-allowed opacity-60"}
                `}
              >
                <FaCheck /> تصحيح الاختبار
              </motion.button>
            ) : (
              <motion.div
                key="results-panel"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="p-8 rounded-2xl bg-[#1e293b] shadow-2xl border border-purple-500/50 space-y-6 flex flex-col items-center justify-center"
              >
                {showConfetti && ( // Simple confetti effect (visual only)
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: Math.random() * 400 - 200,
                          y: Math.random() * 400 - 200,
                          rotate: Math.random() * 360,
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [0, -500, 500],
                          rotate: [0, 720],
                          transition: {
                            delay: Math.random() * 0.8,
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeOut",
                          },
                        }}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: `hsl(${Math.random() * 360}, 70%, 70%)`,
                        }}
                      />
                    ))}
                  </div>
                )}
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl font-extrabold text-yellow-300 flex items-center gap-3"
                >
                  <FaStar className="text-purple-400 text-3xl" /> نتيجتك: {calculateScore()} من {questions.length}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xl text-white leading-relaxed text-center"
                >
                  {getEvaluationMessage(calculateScore())}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  onClick={handleRetry}
                  className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-xl text-white font-semibold text-lg transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  <FaRedoAlt /> إعادة الاختبار
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Lesson Navigation (Previous/Next) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }} // Delayed to appear after test results
          className="flex justify-between w-full max-w-4xl mt-16 gap-4"
        >
          {prevLessonId ? (
            <Link
              href={`/lessons/${prevLessonId}/test`} // Link to previous lesson's test
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-all shadow-md active:scale-95"
            >
              <FaArrowRight className="transform rotate-180" /> اختبار الدرس السابق
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-lg font-semibold text-gray-400 cursor-not-allowed opacity-50">
              <FaArrowRight className="transform rotate-180" /> اختبار الدرس السابق
            </span>
          )}

          {nextLessonId ? (
            <Link
              href={`/lessons/${nextLessonId}/test`} // Link to next lesson's test
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all shadow-md active:scale-95"
            >
              اختبار الدرس التالي <FaArrowRight />
            </Link>
          ) : (
            <span className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-lg text-lg font-semibold text-gray-400 cursor-not-allowed opacity-50">
              اختبار الدرس التالي <FaArrowRight />
            </span>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}