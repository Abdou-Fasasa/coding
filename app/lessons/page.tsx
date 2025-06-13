"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaPlay, FaShareAlt, FaCheckCircle, FaCheck } from "react-icons/fa";

const lessons = [
  {
    "id": 1,
    "title": "1. مقدمة في علوم الحاسوب والبرمجة",
    "description": "دي رحلتك الأولى لاكتشاف عالم التكنولوجيا المثير! هنتعلم فيها أساسيات التفكير الحاسوبي، إزاي الكمبيوتر بيفكر، وإيه هي لغات البرمجة المختلفة، وإزاي ممكن نستخدمها عشان نعمل حاجات مفيدة زي بناء مواقع الويب التفاعلية.",
    "videoPath": "/videos/lesson1.mp4"
  },
  {
    "id": 2,
    "title": "2. مقدمة في HTML وأساسيات بناء صفحات الويب",
    "description": "في الدرس ده، هنتعرف على HTML، اللي هي اللغة الأساسية لبناء أي صفحة ويب. هنتعلم إزاي نستخدم الوسوم (Tags) المختلفة عشان نضيف النصوص، الصور، والروابط، ونرتب المحتوى بتاعنا بشكل صح.",
    "videoPath": "/videos/lesson2.mp4"
  }
];

export default function LessonsPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleShare = (lessonId: number) => {
    const url = `${window.location.origin}/lessons/${lessonId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(lessonId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
        >
          الدروس التعليمية
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: lesson.id * 0.1 }}
              className="bg-[#1e293b] border border-cyan-500/40 rounded-2xl p-6 shadow-lg flex flex-col justify-between"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">{lesson.title}</h2>
              <p className="text-gray-300 flex-grow">{lesson.description}</p>

              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={`/lessons/${lesson.id}`}
                  className="bg-cyan-600 hover:bg-cyan-700 transition rounded-xl py-2 px-4 flex items-center gap-2 justify-center"
                >
                  <FaPlay /> تشغيل الدرس
                </Link>

                <Link
                  href={`/lessons/${lesson.id}/test`}
                  className="bg-purple-600 hover:bg-purple-700 transition rounded-xl py-2 px-4 flex items-center gap-2 justify-center"
                >
                  <FaCheckCircle /> اختبار الدرس
                </Link>

                <button
                  onClick={() => handleShare(lesson.id)}
                  className="bg-gray-700 hover:bg-gray-800 transition rounded-xl py-2 px-4 flex items-center gap-2 justify-center"
                >
                  {copiedId === lesson.id ? (
                    <>
                      <FaCheck /> تم النسخ!
                    </>
                  ) : (
                    <>
                      <FaShareAlt /> مشاركة
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
