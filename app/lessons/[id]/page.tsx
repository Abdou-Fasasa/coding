"use client";

import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

export default function LessonPage() {
  const params = useParams();
  const lessonId = params.id;

  const lessonTitles: { [key: string]: string } = {
    "1": "مقدمة في علوم الحاسوب والبرمجة ",
  };

  const title = lessonTitles[lessonId as string] || "الدرس";

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
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-300 text-lg max-w-3xl mx-auto"
        >
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <video
            src={`/videos/lesson${lessonId}.mp4`}
            controls
            className="w-full max-w-4xl rounded-2xl shadow-2xl"
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}