"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaBrain, FaLaptopCode, FaCodeBranch, FaRobot } from "react-icons/fa";

export default function ComputerSciencePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between rtl">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-8 max-w-6xl mx-auto space-y-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500"
        >
          فهرس مقدمة علوم الحاسوب 💡
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <table className="min-w-full table-auto border-collapse border border-gray-700 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#1f2937] text-yellow-300">
                <th className="px-4 py-3 text-right text-lg">#</th>
                <th className="px-4 py-3 text-right text-lg">العنوان</th>
                <th className="px-4 py-3 text-right text-lg">الوصف</th>
                <th className="px-4 py-3 text-right text-lg">أيقونة</th>
              </tr>
            </thead>
            <tbody className="text-right text-gray-200 divide-y divide-gray-700">
              <tr className="hover:bg-gray-800 transition">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3 font-bold">يعني إيه برمجة؟</td>
                <td className="px-4 py-3">مقدمة ممتعة عن البرمجة وأهميتها في العالم الرقمي</td>
                <td className="px-4 py-3"><FaLaptopCode className="text-xl text-cyan-400" /></td>
              </tr>
              <tr className="hover:bg-gray-800 transition">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3 font-bold">الكمبيوتر بيشتغل إزاي؟</td>
                <td className="px-4 py-3">فهم مكونات الكمبيوتر الأساسية وطريقة تنفيذه للأوامر</td>
                <td className="px-4 py-3"><FaBrain className="text-xl text-pink-400" /></td>
              </tr>
              <tr className="hover:bg-gray-800 transition">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3 font-bold">Compiler vs Interpreter</td>
                <td className="px-4 py-3">إيه الفرق بين المترجم والمفسر؟ وليه بيأثر على الأداء؟</td>
                <td className="px-4 py-3"><FaCodeBranch className="text-xl text-yellow-400" /></td>
              </tr>
              <tr className="hover:bg-gray-800 transition">
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3 font-bold">اللغات وأنواعها</td>
                <td className="px-4 py-3">نتعرف على اللغات العامة والمتخصصة وأمثلة لكل نوع</td>
                <td className="px-4 py-3"><FaRobot className="text-xl text-green-400" /></td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-sm text-gray-400 mt-4"
        >
          📌 تم إعداد المحتوى بلغة مبسطة وبشكل تفاعلي علشان أي حد يقدر يفهم بسهولة 💖
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
