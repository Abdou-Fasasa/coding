"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaShareAlt,
  FaCheckCircle,
  FaCheck,
  FaFilePdf,
} from "react-icons/fa";

const lessons = [
  {
    id: "Computer-science",
    title: "مقدمة في علوم الحاسوب والبرمجة",
    pdfPath: "/pdfs/Computer-science.pdf",
    imagePath: "/images/Computer-science.jpg",
  },
  {
    id: "Work-environment",
    title: "تجهيز بيئة العمل",
    pdfPath: "/pdfs/Work-environment.pdf",
    imagePath: "/images/Work-environment.jpg",
  },
];

export default function LessonsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = (lessonId: string) => {
    const url = `${window.location.origin}/lessons/${lessonId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(lessonId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
        >
          الدروس التعليمية
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1e293b] border border-cyan-500/40 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all"
            >
              <h2 className="text-xl font-bold text-cyan-400 mb-3 text-center">
                {lesson.title}
              </h2>

              <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={lesson.imagePath}
                  alt={`صورة الدرس ${lesson.id}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3">
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

                <a
                  href={lesson.pdfPath}
                  download
                  className="bg-green-600 hover:bg-green-700 transition rounded-xl py-2 px-4 flex items-center gap-2 justify-center"
                >
                  <FaFilePdf /> تحميل ملف الدرس PDF
                </a>

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
