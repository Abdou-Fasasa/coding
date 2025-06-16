"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const lessonData: {
  [key: string]: {
    title: string;
    video: string;
  };
} = {
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
  },
    "Html-lesson1": {
    title: "بناء هيكل صفحه الويب(HTML)- الجزء الأول",
    video: "/videos/html-lesson1.mp4",
  },
};

export default function LessonPage() {
  const { id } = useParams();
  const lessonId = id as string;
  const lesson = lessonData[lessonId];

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="flex-1 pt-32 pb-20 px-4 sm:px-8 max-w-5xl mx-auto space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500"
        >
          {lesson?.title || "الدرس"}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          {lesson?.video ? (
            <video
              src={lesson.video}
              controls
              className="w-full max-w-4xl rounded-2xl shadow-2xl"
            />
          ) : (
            <p className="text-red-400 font-bold">الفيديو غير متوفر لهذا الدرس</p>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
