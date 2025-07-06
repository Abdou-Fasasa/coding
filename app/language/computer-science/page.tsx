"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link"; // استيراد Link للتنقل
import { FaBrain, FaLaptopCode, FaCodeBranch, FaRobot, FaCheckCircle, FaPlayCircle } from "react-icons/fa"; // أيقونات إضافية

// بيانات محتوى كورس مقدمة علوم الحاسوب
// ✅ تم تنظيم البيانات في مصفوفة لسهولة العرض والتعديل
const csCourseContent = [
  {
    order: 1,
    id: "Computer-science", // هذا الـ ID يطابق ID الفيديو في allLessonsData
    title: "مقدمة في علوم الحاسوب والبرمجة",
    description: "فهم شامل لمفاهيم البرمجة الأساسية وكيف يعمل الكمبيوتر.",
    icon: FaLaptopCode,
    isLinkable: true, // هذا الدرس له صفحة فيديو مخصصة
  },
  {
    order: 2,
    id: "Work-environment", // هذا الـ ID يطابق ID الفيديو في allLessonsData
    title: "تجهيز بيئة العمل",
    description: "إعداد الأدوات والبرامج اللازمة لبدء رحلتك في البرمجة.",
    icon: FaLaptopCode,
    isLinkable: true,
  },
  {
    order: 3,
    id: "conceptual-programming-intro", // هذا درس مفاهيمي، ليس له فيديو خاص به في allLessonsData
    title: "يعني إيه برمجة؟",
    description: "مقدمة ممتعة عن البرمجة وأهميتها في العالم الرقمي.",
    icon: FaBrain,
    isLinkable: false,
  },
  {
    order: 4,
    id: "conceptual-how-computer-works", // درس مفاهيمي
    title: "الكمبيوتر بيشتغل إزاي؟",
    description: "فهم مكونات الكمبيوتر الأساسية وطريقة تنفيذه للأوامر.",
    icon: FaBrain,
    isLinkable: false,
  },
  {
    order: 5,
    id: "conceptual-compiler-interpreter", // درس مفاهيمي
    title: "Compiler vs Interpreter",
    description: "إيه الفرق بين المترجم والمفسر؟ وليه بيأثر على الأداء؟",
    icon: FaCodeBranch,
    isLinkable: false,
  },
  {
    order: 6,
    id: "conceptual-languages-types", // درس مفاهيمي
    title: "اللغات وأنواعها",
    description: "نتعرف على اللغات العامة والمتخصصة وأمثلة لكل نوع.",
    icon: FaRobot,
    isLinkable: false,
  },
];

export default function ComputerSciencePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between rtl">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative overflow-hidden" dir="rtl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 leading-tight"
        >
          فهرس مقدمة علوم الحاسوب 💡
        </motion.h1>

        {/* Course Completion Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-800 to-blue-900 text-white text-center py-4 px-6 rounded-xl border border-blue-400 shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
        >
          <p className="text-lg sm:text-xl font-semibold flex items-center justify-center gap-3">
            <FaCheckCircle className="text-blue-300 text-2xl" /> تم الانتهاء من شرح : مقدمة في علوم الحاسوب والبرمجة ✅
          </p>
        </motion.div>

        {/* Lessons Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="overflow-x-auto bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-700/50"
        >
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#1f2937] text-yellow-300 border-b border-gray-700">
                <th className="px-4 py-4 text-right text-lg font-bold rounded-tr-xl">#</th>
                <th className="px-4 py-4 text-right text-lg font-bold">العنوان</th>
                <th className="px-4 py-4 text-right text-lg font-bold">الوصف</th>
                <th className="px-4 py-4 text-center text-lg font-bold rounded-tl-xl"></th> {/* For Icon/Action */}
              </tr>
            </thead>
            <tbody className="text-right text-gray-200 divide-y divide-gray-700">
              {csCourseContent.map((lesson, index) => (
                <motion.tr
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="hover:bg-gray-800 transition-colors duration-200"
                >
                  <td className="px-4 py-4 text-base font-medium">{lesson.order}</td>
                  <td className="px-4 py-4 font-bold text-lg text-cyan-300">
                    {lesson.title}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-300">{lesson.description}</td>
                  <td className="px-4 py-4 text-center">
                    {lesson.isLinkable ? (
                      <Link
                        href={`/lessons/${lesson.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
                      >
                        <FaPlayCircle /> مشاهدة الدرس
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold text-gray-400 cursor-default">
                        <lesson.icon className={`text-xl ${lesson.icon === FaBrain ? 'text-pink-400' : lesson.icon === FaCodeBranch ? 'text-yellow-400' : lesson.icon === FaRobot ? 'text-green-400' : 'text-cyan-400'}`} />
                        {/* No direct link for conceptual topics */}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: csCourseContent.length * 0.1 + 0.6 }}
          className="text-center text-sm sm:text-base text-gray-400 mt-10 p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-inner"
        >
          📌 تم إعداد المحتوى بلغة مبسطة وبشكل تفاعلي علشان أي حد يقدر يفهم بسهولة 💖
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}