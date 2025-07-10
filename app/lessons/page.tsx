"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import { easeInOut } from "framer-motion"; // ✅ لازم تستورده كـ دالة
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaShareAlt,
  FaCheck, // For "Copied!" and "Completed"
  FaCheckCircle, // For "اختبار الدرس" button
  FaFilePdf,
  FaCode, // Icon for HTML/Coding in general
  FaCss3Alt, // Icon for CSS
  FaChevronDown, // Icon for dropdown/expand
  FaChevronUp, // Icon for collapse
} from "react-icons/fa";

// بيانات الدروس لكورس HTML
const initialHtmlLessons = [
  {
    id: "Computer-science",
    title: "مقدمة في علوم الحاسوب والبرمجة",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا.",
    pdfPath: "/pdfs/Computer-science.pdf",
    imagePath: "/images/Computer-science.jpg",
  },
  {
    id: "Work-environment",
    title: "تجهيز بيئة العمل",
    description: "جهز أدواتك وابدأ في بناء مشروعك الأول بكل سهولة ويسر.",
    pdfPath: "/pdfs/Work-environment.pdf",
    imagePath: "/images/Work-environment.jpg",
  },
  {
    id: "Html-lesson3",
    title: "بناء هيكل صفحة الويب (HTML)",
    description: "اكتشف كيف تُبنى صفحات الويب من الصفر باستخدام لغة HTML.",
    pdfPath: "/pdfs/html-lesson3.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson4",
    title: "عناصر HTML ومكوناتها",
    description: "تعمق في فهم مكونات HTML وكيفية استخدامها بفاعلية.",
    pdfPath: "/pdfs/html-lesson4.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson5",
    title: "التعامل مع النصوص في HTML",
    description: "تعلم كيفية تنسيق النصوص وعرضها بشكل جذاب ومقروء في صفحاتك.",
    pdfPath: "/pdfs/html-lesson5.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson6",
    title: "التعامل مع الروابط في HTML",
    description: "اجعل صفحاتك متصلة بالعالم الخارجي وباقي صفحات موقعك.",
    pdfPath: "/pdfs/html-lesson6.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson7",
    title: "التعامل مع الصور في HTML",
    description: "أضف لمسة بصرية لصفحاتك باستخدام الصور وتعرف على أفضل الممارسات.",
    pdfPath: "/pdfs/html-lesson7.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson8",
    title: "التعامل مع القوائم في HTML – Lists",
    description: "نظم معلوماتك وهياكل المحتوى باستخدام القوائم المتنوعة.",
    pdfPath: "/pdfs/html-lesson8.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson9",
    title: "الجداول في HTML – Tables",
    description: "تعلم كيفية عرض البيانات المعقدة بشكل منظم وواضح في جداول HTML.",
    pdfPath: "/pdfs/html-lesson9.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson10",
    title: "النماذج في HTML – Forms",
    description: "اجمع معلومات المستخدمين وتفاعل معهم من خلال إنشاء نماذج متكاملة.",
    pdfPath: "/pdfs/html-lesson10.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson11",
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    description: "هيكل صفحة الويب الخاصة بك بشكل احترافي وسهل الإدارة.",
    pdfPath: "/pdfs/html-lesson11.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson12",
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    description: "أثرِ صفحاتك بإضافة محتوى من مصادر خارجية متنوعة.",
    pdfPath: "/pdfs/html-lesson12.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson13",
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    description: "اكتشف الأساليب المثلى لكتابة كود HTML نظيف وفعال.",
    pdfPath: "/pdfs/html-lesson13.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson14",
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    description: "طبق كل ما تعلمته في مشروع عملي يبرز مهاراتك في HTML.",
    pdfPath: "/pdfs/html-lesson14.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
];

// بيانات الدروس لكورس CSS
const initialCssLessons = [
  {
    id: "Css-lesson1",
    title: "مقدمة في CSS",
    description: "ابدأ رحلتك في عالم التصميم وتعلم كيفية إضفاء الجمال على صفحاتك.",
    pdfPath: "/pdfs/css-lesson1.pdf",
    imagePath: "/images/css-lessons.jpg",
  },
];


export default function LessonsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [activeCourse, setActiveCourse] = useState<string | null>(null); // ✅ Initially null to keep all sections closed

  // Load completion status from Local Storage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCompleted = localStorage.getItem('completedLessons');
      if (storedCompleted) {
        try {
          setCompletedLessons(new Set(JSON.parse(storedCompleted)));
        } catch (e) {
          console.error("Failed to parse completed lessons from local storage", e);
          localStorage.removeItem('completedLessons'); // Clear invalid data
        }
      }
    }
  }, []);

  // Save completion status to Local Storage on every change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedLessons', JSON.stringify(Array.from(completedLessons)));
    }
  }, [completedLessons]);

  const handleShare = useCallback((lessonId: string) => {
    const url = `${window.location.origin}/lessons/${lessonId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(lessonId);
      setTimeout(() => setCopiedId(null), 2000); // Hide "Copied!" message after 2 seconds
    });
  }, []);

  const markLessonAsCompleted = useCallback((lessonId: string) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      newSet.add(lessonId);
      return newSet;
    });
  }, []);

  const toggleCourseSection = useCallback((courseKey: string) => {
    setActiveCourse(prev => (prev === courseKey ? null : courseKey));
  }, []);

const lessonGridVariants = {
  open: {
    opacity: 1,
    height: "auto",
    marginTop: "2rem",
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ صح
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    marginTop: "0rem",
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ صح
      when: "afterChildren",
    },
  },
};

  const lessonCardItemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    collapsed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 text-center space-y-12 relative overflow-hidden" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 mb-12"
        >
          اكتشف مساراتنا التعليمية
        </motion.h1>

        {/* HTML Course Section */}
        <section className="w-full py-12 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl border-t border-b border-gray-700/50">
          <div className="max-w-6xl mx-auto px-6"> {/* Inner container for content */}
            <motion.div
              className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700/60"
              onClick={() => toggleCourseSection('html')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 flex items-center gap-3">
                <FaCode className="text-4xl text-pink-400" /> كورس HTML: بناء الويب من الصفر
              </h2>
              <motion.div
                animate={{ rotate: activeCourse === 'html' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeCourse === 'html' ? (
                  <FaChevronUp className="text-3xl text-gray-400" />
                ) : (
                  <FaChevronDown className="text-3xl text-gray-400" />
                )}
              </motion.div>
            </motion.div>

            <AnimatePresence initial={false}>
              {/* ✅ This motion.div now gets the background, padding, border, and shadow */}
              {activeCourse === 'html' && (
                <motion.div
                  key="html-lessons-collapsible-content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={lessonGridVariants}
                  className="overflow-hidden bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-gray-700/50"
                >
                  <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-8 mt-4">
                    تعلم أساسيات لغة HTML، لغة بناء صفحات الويب. ابدأ رحلتك في عالم تطوير الويب بخطوات سهلة وممتعة.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {initialHtmlLessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={{ ...lesson, isCompleted: completedLessons.has(lesson.id) }}
                        copiedId={copiedId}
                        onShare={handleShare}
                        onPlay={() => markLessonAsCompleted(lesson.id)}
                        variants={lessonCardItemVariants}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CSS Course Section */}
        <section className="w-full py-12 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl border-t border-b border-gray-700/50">
          <div className="max-w-6xl mx-auto px-6"> {/* Inner container for content */}
            <motion.div
              className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700/60"
              onClick={() => toggleCourseSection('css')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 flex items-center gap-3">
                <FaCss3Alt className="text-4xl text-purple-400" /> كورس CSS: لمسة الجمال والتصميم
              </h2>
              <motion.div
                animate={{ rotate: activeCourse === 'css' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeCourse === 'css' ? (
                  <FaChevronUp className="text-3xl text-gray-400" />
                ) : (
                  <FaChevronDown className="text-3xl text-gray-400" />
                )}
              </motion.div>
            </motion.div>

            <AnimatePresence initial={false}>
              {/* ✅ This motion.div now gets the background, padding, border, and shadow */}
              {activeCourse === 'css' && (
                <motion.div
                  key="css-lessons-collapsible-content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={lessonGridVariants}
                  className="overflow-hidden bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-gray-700/50"
                >
                  <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-8 mt-8">
                    انتقل بتصاميمك إلى المستوى التالي! تعلم CSS لتحويل صفحاتك من مجرد هياكل إلى أعمال فنية تفاعلية.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
                    {initialCssLessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={{ ...lesson, isCompleted: completedLessons.has(lesson.id) }}
                        copiedId={copiedId}
                        onShare={handleShare}
                        onPlay={() => markLessonAsCompleted(lesson.id)}
                        variants={lessonCardItemVariants}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// تعريف نوع الدرس (TypeScript)
type Lesson = {
  id: string;
  title: string;
  description: string;
  pdfPath: string;
  imagePath: string;
  isCompleted?: boolean;
};

interface LessonCardProps {
  lesson: Lesson & { isCompleted: boolean };
  copiedId: string | null;
  onShare: (lessonId: string) => void;
  onPlay: (lessonId: string) => void;
  variants: Variants; // ✅ استخدام النوع الصحيح من Framer Motion
}

// مكون بطاقة الدرس
function LessonCard({ lesson, copiedId, onShare, onPlay, variants }: LessonCardProps) {
  return (
    <motion.div
      variants={variants} // Apply item variants
      className={`relative bg-[#1e293b] border ${
        lesson.isCompleted ? 'border-green-500 shadow-green-500/30' : 'border-cyan-500/40'
      } rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col`}
    >
      {/* ✅ علامة صح للمكتمل */}
      {lesson.isCompleted && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute top-4 right-4 bg-green-600 rounded-full p-2 text-white shadow-lg z-10"
        >
          <FaCheck className="text-xl" />
        </motion.div>
      )}

      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl relative">
        <Image
          src={lesson.imagePath}
          alt={`صورة الدرس ${lesson.id}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <h3 className="text-2xl font-bold text-cyan-300 mb-2 text-center flex-grow">
        {lesson.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 text-center flex-grow">
        {lesson.description}
      </p>

      <div className="flex flex-col gap-3 mt-auto">
        <Link
          href={`/lessons/${lesson.id}`}
          onClick={() => onPlay(lesson.id)}
          className="bg-cyan-600 hover:bg-cyan-700 transition rounded-xl py-3 px-4 flex items-center gap-2 justify-center font-semibold text-lg hover:shadow-md active:scale-95"
        >
          <FaPlay className="text-base" /> تشغيل الدرس
        </Link>

        <Link
          href={`/lessons/${lesson.id}/test`}
          className="bg-purple-600 hover:bg-purple-700 transition rounded-xl py-3 px-4 flex items-center gap-2 justify-center font-semibold text-lg hover:shadow-md active:scale-95"
        >
          <FaCheckCircle className="text-base" /> اختبار الدرس
        </Link>

        <a
          href={lesson.pdfPath}
          download
          className="bg-green-600 hover:bg-green-700 transition rounded-xl py-3 px-4 flex items-center gap-2 justify-center font-semibold text-lg hover:shadow-md active:scale-95"
        >
          <FaFilePdf className="text-base" /> تحميل ملف الدرس PDF
        </a>

        <button
          onClick={() => onShare(lesson.id)}
          className="bg-gray-700 hover:bg-gray-800 transition rounded-xl py-3 px-4 flex items-center gap-2 justify-center font-semibold text-lg hover:shadow-md active:scale-95"
        >
          {copiedId === lesson.id ? (
            <>
              <FaCheck className="text-base" /> تم النسخ!
            </>
          ) : (
            <>
              <FaShareAlt className="text-base" /> مشاركة
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
