"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBookOpen, FaStar } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      
      {/* ✅ الهيدر */}
      <Header />

      {/* ✅ البودي */}
      <main className="pt-36 pb-28 px-6 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* النص */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-start space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            ابدأ رحلتك البرمجية<br /> مع منصة <span className="text-pink-400">Codeing</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-md mx-auto md:mx-0">
            تعلم البرمجة بأسلوب عصري، سهل، وعملي. دروس منظمة وممتعة من البداية حتى الاحتراف.
            هذه المنصة موجهة خصيصاً لزملائي الأعزاء لتكون دليلكم الأول في عالم البرمجة ❤️
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/lessons"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg"
            >
              <FaBookOpen className="text-xl" /> تصفح الدروس
            </Link>
          </div>
        </motion.div>

        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 max-w-xl border-4 border-pink-500 rounded-3xl shadow-2xl overflow-hidden relative"
        >
          <Image
            src="/images/hero.jpg"
            alt="Coding Students"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />

          {/* شريط التقدم تحت الصورة */}
          <div className="w-full bg-gray-800 py-3 px-4 flex flex-col gap-2">
            <div className="text-sm font-semibold text-pink-400">شريط تقدم الخطة التعليمية</div>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[0%] bg-pink-500 transition-all duration-500"></div>
            </div>
            <div className="flex gap-1 text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
