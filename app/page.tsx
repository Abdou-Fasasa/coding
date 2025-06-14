"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBookOpen, FaStar, FaUserTie, FaUsers } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between overflow-x-hidden">

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
            ابدأ رحلتك البرمجية<br /> مع منصة <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">Coding</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
            اكتشف عالم البرمجة بأسلوب ممتع وسلس 💻. مع <strong className="text-pink-400">Coding</strong>، مش هتتعلم بس، هتعيش البرمجة خطوة بخطوة، وبشكل مبسط، من غير ملل.
          </p>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center md:justify-start"
          >
            <Link
              href="/lessons"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 hover:from-purple-600 hover:to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-2xl active:scale-95"
            >
              <FaBookOpen className="text-xl" /> تصفح الدروس
            </Link>
          </motion.div>
        </motion.div>

        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 max-w-xl rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(236,72,153,0.05)_0%,_transparent_70%)] pointer-events-none z-0" />

          <Image
            src="/images/hero.jpg"
            alt="Coding Students"
            width={700}
            height={500}
            className="w-full h-auto object-cover relative z-10 rounded-3xl shadow-xl"
            priority
          />

          {/* شريط التقدم تحت الصورة */}
          <div className="w-full bg-gray-900 py-3 px-4 flex flex-col gap-2 relative z-10">
            <div className="text-sm font-semibold text-pink-400 tracking-wide">
              شريط تقدم الخطة التعليمية
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "1%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-pink-500 rounded-full"
              ></motion.div>
            </div>
            <div className="flex gap-1 text-yellow-400 text-lg">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
          </div>
        </motion.div>
      </main>

      {/* ✅ إضافة Call to Action */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b]">
        <h3 className="text-3xl font-bold text-pink-400 mb-4">مستعد تبدأ؟</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          ابدأ رحلتك البرمجية الان مع كودينج💡
        </p>
        <Link
          href="/lessons"
          className="inline-block bg-pink-600 hover:bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition"
        >
          ابدأ الآن
        </Link>

        {/* ✅ مطور الموقع والطلاب */}
        <div className="mt-12 max-w-2xl mx-auto space-y-4 text-gray-300">
          <div className="flex items-center justify-center gap-2 text-base">
            <FaUserTie className="text-pink-400 text-xl" />
            <span>المطور: المهندس <strong className="text-white">عبدالرحمن</strong></span>
          </div>
          <div className="flex items-center justify-center gap-2 text-base">
            <FaUsers className="text-purple-400 text-xl" />
            <span>طلابنا: <strong className="text-white">عبدالعزيز، عبدالله، محمود، الحملي، صلاح</strong></span>
          </div>
        </div>
      </section>

      {/* ✅ الفوتر */}
      <Footer />
    </div>
  );
}