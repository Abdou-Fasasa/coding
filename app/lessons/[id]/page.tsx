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
    title: "الدرس الأول: مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
  },
  "Work-environment": {
    title: "الدرس الثاني: تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
  },
    "Html-lesson3": {
    title: "الدرس الثالث: بناء هيكل صفحة الويب (HTML)",
    video: "/videos/html-lesson3.mp4",
  },
      "Html-lesson4": {
    title: "الدرس الرابع: يعني إيه عنصر في HTML؟",
    video: "/videos/html-lesson4.mp4",
  },
      "Html-lesson5": {
    title: "الدرس الخامس: التعامل مع النصوص في HTML",
    video: "/videos/html-lesson5.mp4",
  },
      "Html-lesson6": {
    title: "الدرس السادس: التعامـل مع الروابــط في HTML",
    video: "/videos/html-lesson6.mp4",
  },
      "Html-lesson7": {
    title: "الدرس السابع: التعامـل مع الصـور في HTML",
    video: "/videos/html-lesson7.mp4",
  },
      "Html-lesson8": {
    title: "الدرس الثامن: التعامل مع القوائم في HTML – Lists",
    video: "",
  },
      "Html-lesson9": {
    title: " الدرس التاسع: الجداول في HTML – Tables",
    video: "",
  },
      "Html-lesson10": {
    title: "الدرس العاشر: النماذج في HTML – Forms",
    video: "",
  },
        "Html-lesson11": {
    title: "الدرس الحادي عشر: تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    video: "",
  },
          "Html-lesson12": {
    title: "الدرس الثاني عشر: إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    video: "",
  },
          "Html-lesson13": {
    title: "الدرس الثالث عشر: مفاهيم الوصول في HTML – خليك لطيف مع كل المستخدمين",
    video: "",
  },
          "Html-lesson14": {
    title: "الدرس الرابع عشر: أفضل الممارسات في HTML – خليك محترف من أول سطر",
    video: "",
  },
          "Html-lesson15": {
    title: "الدرس الخامس عشر: مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    video: "",
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
