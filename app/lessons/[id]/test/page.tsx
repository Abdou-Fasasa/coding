"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { lessonQuestions } from "../../../data/questions"; // Assuming this path is correct
import { useState, useEffect, useCallback, useMemo } from "react"; // Added useMemo
import { FaCheck, FaTimes, FaRedoAlt, FaInfoCircle } from "react-icons/fa";

// Import allLessonsData from LessonPage to get the lesson title
// NOTE: For a real app, you might want a centralized data source or API endpoint
// to fetch lesson details and questions, rather than duplicating data or relying on sibling components.
// For this example, I'm assuming allLessonsData is accessible or can be imported.
const allLessonsData: {
  [key: string]: { title: string; video: string; description: string };
} = {
  // HTML Lessons - Keep this in sync with your actual lesson data
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا. هذا الدرس يضع الأساس لجميع الدورات القادمة.",
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
    description: "تعلم كيفية إعداد بيئة التطوير المثالية لبناء مشاريعك البرمجية بسهولة وفعالية.",
  },
  "Html-lesson3": {
    title: "بناء هيكل صفحة الويب (HTML)",
    video: "/videos/html-lesson3.mp4",
    description: "اكتشف أساسيات HTML وكيفية تنظيم المحتوى لإنشاء صفحات الويب المتكاملة.",
  },
  "Html-lesson4": {
    title: "عناصر HTML ومكوناتها",
    video: "/videos/html-lesson4.mp4",
    description: "تفصيل شامل لأنواع عناصر HTML المختلفة وكيفية استخدامها لبناء صفحات غنية بالمحتوى.",
  },
  "Html-lesson5": {
    title: "التعامل مع النصوص في HTML",
    video: "/videos/html-lesson5.mp4",
    description: "تعلم كيفية تنسيق وإدارة النصوص في HTML، من العناوين والفقرات إلى التنسيقات الخاصة.",
  },
  "Html-lesson6": {
    title: "التعامل مع الروابط في HTML",
    video: "/videos/html-lesson6.mp4",
    description: "دليل شامل لإنشاء الروابط في HTML، وكيفية ربط الصفحات والموارد الخارجية بفعالية.",
  },
  "Html-lesson7": {
    title: "التعامل مع الصور في HTML",
    video: "/videos/html-lesson7.mp4",
    description: "استكشف كيفية إضافة الصور إلى صفحات HTML وتحسينها للعرض على الويب.",
  },
  "Html-lesson8": {
    title: "التعامل مع القوائم في HTML – Lists",
    video: "/videos/html-lesson8.mp4",
    description: "تعلم تنظيم المحتوى باستخدام القوائم المرتبة وغير المرتبة والقوائم الوصفية في HTML.",
  },
  "Html-lesson9": {
    title: "الجداول في HTML – Tables",
    video: "/videos/html-lesson9.mp4",
    description: "استخدام الجداول في HTML لعرض البيانات المنظمة بشكل جذاب وواضح.",
  },
  "Html-lesson10": {
    title: "النماذج في HTML – Forms",
    video: "/videos/html-lesson10.mp4",
    description: "دليل كامل لإنشاء نماذج HTML للتفاعل مع المستخدمين وجمع البيانات.",
  },
  "Html-lesson11": {
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    video: "/videos/html-lesson11.mp4",
    description: "هيكل صفحات الويب الخاصة بك بشكل احترافي باستخدام الأقسام والعناصر البنائية لتحسين التنظيم وسهولة القراءة.",
  },
  "Html-lesson12": {
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    video: "/videos/html-lesson12.mp4",
    description: "أضف محتوى تفاعليًا وغنيًا من مصادر خارجية مثل الفيديوهات والخرائط لتحسين تجربة المستخدم.",
  },
  "Html-lesson13": {
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    video: "/videos/html-lesson13.mp4",
    description: "تعلم نصائح وحيل الخبراء لكتابة كود HTML نظيف، فعال، ومتوافق مع معايير الويب.",
  },
  "Html-lesson14": {
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    video: "/videos/html-lesson14.mp4",
    description: "طبق كل ما تعلمته في HTML لإنشاء مشروع ويب كامل، demonstrating your skills.",
  },
  // CSS Lessons
  "Css-lesson1": {
    title: "مقدمة في CSS",
    video: "/videos/css-lesson1.mp4",
    description: "ابدأ رحلتك في عالم تصميم الويب وتعلم كيفية إضفاء الجمال والجاذبية على صفحاتك باستخدام CSS.",
  },
};


export default function LessonTestPage() {
  const { id } = useParams();
  const lessonId = id as string;

  // Wrapped questions assignment with useMemo
  const questions = useMemo(() => lessonQuestions[lessonId] || [], [lessonId]);

  const lessonTitle = allLessonsData[lessonId]?.title || `الدرس ${lessonId}`; // Get full lesson title

  const [answers, setAnswers] = useState<{ [index: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  const handleAnswer = (questionIndex: number, answer: string) => {
    if (!showResult) {
      setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
    }
  };

  // Wrapped calculateScore in useCallback to make it stable
  const calculateScore = useCallback(() => {
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [answers, questions]); // Dependencies for useCallback

  const getEvaluationMessage = (score: number) => {
    const total = questions.length;
    if (total === 0) return "";
    const ratio = score / total;
    if (ratio === 1) return "✅ ممتاز! أنت فهمت الدرس كويس جدًا.";
    if (ratio >= 0.75) return "👍 أداء جيد جداً! أنت قريب من الإتقان.";
    if (ratio >= 0.5) return "🙂 كويس! بس راجع شوية حاجات.";
    return "⚠️ محتاج تذاكر الدرس تاني وتحاول تاني.";
  };

  const handleRetry = () => {
    setAnswers({});
    setShowResult(false);
  };

  // useEffect to calculate score when showResult changes
  // This ensures score is calculated when results are about to be shown
  useEffect(() => {
    if (showResult) {
      calculateScore(); // Recalculate score when showing results
    }
  }, [showResult, calculateScore]); // Dependency on calculateScore

  // Handle case where no questions are found for the lesson
  if (questions.length === 0) {
    return (
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-center items-center">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-yellow-400 p-8 rounded-xl bg-[#1e293b] shadow-lg"
        >
          <FaInfoCircle className="inline-block text-5xl mb-4 text-pink-400" />
          <p>عذراً، لا يوجد اختبار متاح لهذا الدرس حالياً.</p>
          <p className="text-lg text-gray-400 mt-2">نعمل على إضافة المزيد من الاختبارات قريباً!</p>
        </motion.div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative overflow-hidden" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-500 leading-snug"
        >
          اختبار الدرس:{" "}
          <span className="block mt-2 md:inline">{lessonTitle}</span>
        </motion.h1>

        {/* Progress Indicator */}
        {!showResult && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-lg text-gray-300 mb-8"
          >
            أجبت على {Object.keys(answers).length} من {questions.length} أسئلة
          </motion.p>
        )}

        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4 border border-gray-700/50"
          >
            <h2 className="text-xl font-semibold text-cyan-300 mb-4">
              {i + 1}. {q.question}
            </h2>
            <div className="grid gap-3">
              {q.options.map((option, j) => {
                const isSelected = answers[i] === option;
                const isCorrect = showResult && option === q.correctAnswer;
                const isWrong = showResult && isSelected && option !== q.correctAnswer;

                return (
                  <motion.div
                    key={j}
                    whileHover={!showResult ? { scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.5)" } : {}}
                    className={`flex items-center justify-between px-5 py-3 rounded-lg border cursor-pointer transition-all duration-200
                      ${isCorrect ? "bg-green-700/20 border-green-500 text-green-300" : ""}
                      ${isWrong ? "bg-red-700/20 border-red-500 text-red-400" : ""}
                      ${!isCorrect && !isWrong && isSelected ? "bg-blue-700/20 border-blue-500 text-blue-300" : ""}
                      ${!isCorrect && !isWrong && !isSelected ? "border-gray-600/50 hover:border-gray-500" : ""}
                    `}
                    onClick={() => handleAnswer(i, option)} // Clickable div
                  >
                    <label className="flex items-center gap-3 w-full cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${i}`}
                        value={option}
                        checked={isSelected}
                        onChange={() => handleAnswer(i, option)}
                        disabled={showResult} // Disable after submission
                        className="form-radio h-5 w-5 text-pink-500 bg-gray-700 border-gray-500 focus:ring-pink-500" // Custom radio styling
                      />
                      <span className="flex-1 text-lg">{option}</span>
                    </label>
                    {showResult && isCorrect && <FaCheck className="text-green-400 text-xl" />}
                    {showResult && isWrong && <FaTimes className="text-red-400 text-xl" />}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}

        <div className="text-center space-y-6 mt-12">
          {!showResult && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: questions.length * 0.1 + 0.2 }}
              onClick={() => setShowResult(true)}
              disabled={!allQuestionsAnswered} // Disable until all answered
              className={`mt-6 px-8 py-4 rounded-xl text-white font-bold text-xl transition-all shadow-lg hover:shadow-xl active:scale-95
                ${allQuestionsAnswered ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 cursor-not-allowed opacity-60"}
              `}
            >
              تصحيح الاختبار
            </motion.button>
          )}

          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="p-8 rounded-2xl bg-[#1e293b] shadow-2xl border border-purple-500/50 space-y-4"
            >
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl font-bold text-yellow-300"
              >
                نتيجتك: {calculateScore()} من {questions.length}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xl text-white leading-relaxed"
              >
                {getEvaluationMessage(calculateScore())}
              </motion.p>

              {/* Confetti Placeholder (if you decide to add a library) */}
              {calculateScore() === questions.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-4xl mt-4"
                >
                  🎉🥳🎊
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                onClick={handleRetry}
                className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold text-lg transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 mx-auto"
              >
                <FaRedoAlt /> إعادة الاختبار
              </motion.button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
