"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LanguagePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500"
        >
          المنهج الحالي في Codeing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          حالياً بنشرح <span className="text-pink-400 font-bold">مقدمة في علوم الحاسوب</span>،
          وبنبدأ نفهم يعني إيه برمجة وكمبيوتر بيشتغل إزاي، وهنكمل بـ
          <span className="text-cyan-400 font-bold"> HTML</span>، وبعدها
          <span className="text-blue-400 font-bold"> CSS</span>، وهنختم بـ
          <span className="text-yellow-400 font-bold"> JavaScript</span> علشان نقدر نكوّن أول مشروع ويب كامل سوا 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          {/* مقدمة */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-xl border border-yellow-400/40 hover:scale-105 transition">
            <h2 className="text-xl font-bold text-yellow-300 mb-2">مقدمة علوم الحاسوب</h2>
            <p className="text-gray-300 text-sm">
              نفهم يعني إيه برمجة، كمبيوتر، بيانات، أوامر، كومبايلر، إنترپريتر... بلُغة بسيطة وسهلة.
            </p>
          </div>

          {/* HTML */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-xl border border-pink-400/40 hover:scale-105 transition">
            <h2 className="text-xl font-bold text-pink-400 mb-2">HTML</h2>
            <p className="text-gray-300 text-sm">
              نتعلم الهيكل الأساسي لأي موقع: العناوين، الفقرات، الصور، الروابط، والجداول.
            </p>
          </div>

          {/* CSS */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-xl border border-blue-400/40 hover:scale-105 transition">
            <h2 className="text-xl font-bold text-blue-400 mb-2">CSS</h2>
            <p className="text-gray-300 text-sm">
              نلون، ننسق، نجمّل! 💅 هنتعلم ندي ستايل لكل جزء في الصفحة بخيالنا.
            </p>
          </div>

          {/* JavaScript */}
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow-xl border border-yellow-300/40 hover:scale-105 transition">
            <h2 className="text-xl font-bold text-yellow-300 mb-2">JavaScript</h2>
            <p className="text-gray-300 text-sm">
              نخلي الموقع يتفاعل! نبرمج الزراير، النماذج، الرسائل، وكل اللي بيحصل لما المستخدم يتفاعل.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          🚧 المنصة دايمًا بتتطور، وكل فترة بنضيف محتوى جديد ✨
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
