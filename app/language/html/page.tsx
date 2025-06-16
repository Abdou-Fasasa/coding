"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaCheckCircle } from "react-icons/fa";

export default function HTMLIndexPage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-24 pb-16 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-12" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-400 to-yellow-300"
        >
          فهرس دروس HTML
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          هنا هتلاقي كل الدروس اللي أخدناها لحد دلوقتي في جزء HTML، بالترتيب ومع توضيح المحتوى.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="overflow-x-auto"
        >
          <table className="w-full border border-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-[#1e293b]">
              <tr>
                <th className="py-3 px-4 border-b border-gray-600 text-left">#</th>
                <th className="py-3 px-4 border-b border-gray-600 text-left">عنوان الدرس</th>
                <th className="py-3 px-4 border-b border-gray-600 text-left">الوصف</th>
                <th className="py-3 px-4 border-b border-gray-600 text-left">الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#273244]">
                <td className="py-3 px-4 border-b border-gray-700">1</td>
                <td className="py-3 px-4 border-b border-gray-700">ما هو HTML؟</td>
                <td className="py-3 px-4 border-b border-gray-700">تعريف لغة HTML وفكرتها واستخدامها في بناء صفحات الويب</td>
                <td className="py-3 px-4 border-b border-gray-700 text-green-400 flex items-center gap-2">
                  <FaCheckCircle /> تم</td>
              </tr>
              <tr className="hover:bg-[#273244]">
                <td className="py-3 px-4 border-b border-gray-700">2</td>
                <td className="py-3 px-4 border-b border-gray-700">هيكل صفحة HTML</td>
                <td className="py-3 px-4 border-b border-gray-700">شرح عناصر head و body والعناصر الأساسية داخل الصفحة</td>
                <td className="py-3 px-4 border-b border-gray-700 text-green-400 flex items-center gap-2">
                  <FaCheckCircle /> تم</td>
              </tr>
              <tr className="hover:bg-[#273244]">
                <td className="py-3 px-4 border-b border-gray-700">3</td>
                <td className="py-3 px-4 border-b border-gray-700">العناوين والفقرات</td>
                <td className="py-3 px-4 border-b border-gray-700">نتعلم استخدام &lt;h1&gt; لـ &lt;h6&gt; لكتابة العناوين، و&lt;p&gt; للفقرات</td>
                <td className="py-3 px-4 border-b border-gray-700 text-green-400 flex items-center gap-2">
                  <FaCheckCircle /> تم</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
