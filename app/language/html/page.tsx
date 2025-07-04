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
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-green-800 text-white text-center py-4 px-6 mt-10 rounded-xl border border-green-400 shadow-lg"
>
  <p className="text-lg sm:text-xl font-semibold flex items-center justify-center gap-3">
    <FaCheckCircle className="text-green-300" /> تم الانتهاء من شرح جميع دروس HTML بنجاح 🎉
  </p>
</motion.div>

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
              {[
                [1, "مقدمة في علوم الحاسوب والبرمجة", "تعريف البرمجة وإزاي الكمبيوتر بيفهم الأوامر وبيشغلها"],
                [2, "تجهيز بيئة العمل", "تحميل البرامج اللازمة وفتح أول ملف HTML"],
                [3, "بناء هيكل صفحة الويب (HTML)", "شرح <html>, <head>, <body> وبدء الصفحة"],
                [4, "يعني إيه عنصر في HTML", "شرح العناصر والتاجات Attributes & Tags"],
                [5, "التعامل مع النصوص في HTML", "استخدام <h1> لـ <h6> و <p> والنصوص"],
                [6, "التعامل مع الروابط", "إضافة روابط باستخدام <a> وفتحها في نافذة جديدة"],
                [7, "التعامل مع الصور", "إدراج الصور باستخدام <img> وتعديل الأبعاد والنص البديل"],
                [8, "القوائم – Lists", "شرح القوائم المرتبة <ol> وغير المرتبة <ul>"],
                [9, "الجداول – Tables", "إدراج جدول باستخدام <table>, <tr>, <td>, <th>"],
                [10, "النماذج – Forms", "إضافة فورم وإدخال الاسم، الإيميل، زر الإرسال"],
                [11, "تنظيم الصفحة باستخدام الأقسام", "شرح <div>, <section>, <article>, <header>"],
                [12, "إدراج عناصر خارجية", "إضافة فيديوهات، خرائط، مواقع تانية داخل الصفحة"],
                [13, "أفضل الممارسات في HTML", "كتابة كود نظيف ومنظم واحترافي"],
                [14, "مشروع نهائي باستخدام HTML", "صفحة ويب كاملة بتجمع كل اللي اتعلمناه"]
              ].map(([num, title, desc]) => (
                <tr key={num} className="hover:bg-[#273244]">
                  <td className="py-3 px-4 border-b border-gray-700">{num}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{title}</td>
                  <td className="py-3 px-4 border-b border-gray-700">{desc}</td>
                  <td className="py-3 px-4 border-b border-gray-700 text-green-400 flex items-center gap-2">
                    <FaCheckCircle /> تم
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
