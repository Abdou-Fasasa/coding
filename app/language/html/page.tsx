"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link"; // استيراد Link للتنقل
import { FaCheckCircle, FaHtml5, FaPlayCircle } from "react-icons/fa"; // أيقونات إضافية

// ✅ بيانات محتوى دروس HTML - منظمة وجاهزة للعرض الديناميكي
// تم ربط هذه البيانات مباشرة بـ IDs الدروس التي قدمتها
const htmlLessonsContent = [
  {
    order: 1, // تم تعديل الترتيب
    id: "Html-lesson3",
    title: "بناء هيكل صفحة الويب (HTML)",
    description: "اكتشف أساسيات HTML وكيفية تنظيم المحتوى لإنشاء صفحات الويب المتكاملة.",
    icon: FaHtml5,
  },
  {
    order: 2, // تم تعديل الترتيب
    id: "Html-lesson4",
    title: "عناصر HTML ومكوناتها",
    description: "تفصيل شامل لأنواع عناصر HTML المختلفة وكيفية استخدامها لبناء صفحات غنية بالمحتوى.",
    icon: FaHtml5,
  },
  {
    order: 3, // تم تعديل الترتيب
    id: "Html-lesson5",
    title: "التعامل مع النصوص في HTML",
    description: "تعلم كيفية تنسيق وإدارة النصوص في HTML، من العناوين والفقرات إلى التنسيقات الخاصة.",
    icon: FaHtml5,
  },
  {
    order: 4, // تم تعديل الترتيب
    id: "Html-lesson6",
    title: "التعامل مع الروابط في HTML",
    description: "دليل شامل لإنشاء الروابط في HTML، وكيفية ربط الصفحات والموارد الخارجية بفعالية.",
    icon: FaHtml5,
  },
  {
    order: 5, // تم تعديل الترتيب
    id: "Html-lesson7",
    title: "التعامل مع الصور في HTML",
    description: "استكشف كيفية إضافة الصور إلى صفحات HTML وتحسينها للعرض على الويب.",
    icon: FaHtml5,
  },
  {
    order: 6, // تم تعديل الترتيب
    id: "Html-lesson8",
    title: "التعامل مع القوائم في HTML – Lists",
    description: "تعلم تنظيم المحتوى باستخدام القوائم المرتبة وغير المرتبة والقوائم الوصفية في HTML.",
    icon: FaHtml5,
  },
  {
    order: 7, // تم تعديل الترتيب
    id: "Html-lesson9",
    title: "الجداول في HTML – Tables",
    description: "استخدام الجداول في HTML لعرض البيانات المنظمة بشكل جذاب وواضح.",
    icon: FaHtml5,
  },
  {
    order: 8, // تم تعديل الترتيب
    id: "Html-lesson10",
    title: "النماذج في HTML – Forms",
    description: "دليل كامل لإنشاء نماذج HTML للتفاعل مع المستخدمين وجمع البيانات.",
    icon: FaHtml5,
  },
  {
    order: 9, // تم تعديل الترتيب
    id: "Html-lesson11",
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    description: "هيكل صفحات الويب الخاصة بك بشكل احترافي باستخدام الأقسام والعناصر البنائية لتحسين التنظيم وسهولة القراءة.",
    icon: FaHtml5,
  },
  {
    order: 10, // تم تعديل الترتيب
    id: "Html-lesson12",
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    description: "أضف محتوى تفاعليًا وغنيًا من مصادر خارجية مثل الفيديوهات والخرائط لتحسين تجربة المستخدم.",
    icon: FaHtml5,
  },
  {
    order: 11, // تم تعديل الترتيب
    id: "Html-lesson13",
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    description: "تعلم نصائح وحيل الخبراء لكتابة كود HTML نظيف، فعال، ومتوافق مع معايير الويب.",
    icon: FaHtml5,
  },
  {
    order: 12, // تم تعديل الترتيب
    id: "Html-lesson14",
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    description: "طبق كل ما تعلمته في HTML لإنشاء مشروع ويب كامل، demonstrating your skills.",
    icon: FaHtml5,
  },
];

export default function HTMLIndexPage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative overflow-hidden" dir="rtl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // ✅ تم تعديل التدرج اللوني ليتناسب مع ComputerSciencePage
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-500 leading-tight"
        >
          فهرس دروس HTML 📄
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          // ✅ تم تعديل الخلفية والحدود والظل ليتناسب مع ComputerSciencePage
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-lg"
        >
          هنا هتلاقي كل الدروس اللي أخدناها لحد دلوقتي في جزء HTML، بالترتيب ومع توضيح المحتوى.
          الخطوة الأولى لإنشاء أي موقع ويب! 🌐
        </motion.p>

        {/* Course Completion Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // ✅ تم تعديل التدرج اللوني والحدود ليتناسب مع ComputerSciencePage
          className="bg-gradient-to-r from-green-800 to-green-900 text-white text-center py-4 px-6 rounded-xl border border-green-400 shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
        >
          <p className="text-lg sm:text-xl font-semibold flex items-center justify-center gap-3">
            <FaCheckCircle className="text-green-300 text-2xl" /> تم الانتهاء من شرح جميع دروس HTML بنجاح 🎉
          </p>
        </motion.div>

        {/* Lessons Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          // ✅ تم تعديل الخلفية والحدود والظل ليتناسب مع ComputerSciencePage
          className="overflow-x-auto bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-700/50"
        >
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-[#1f2937] text-yellow-300 border-b border-gray-700">
                <th className="py-4 px-4 text-right text-lg font-bold rounded-tr-xl">#</th>
                <th className="py-4 px-4 text-right text-lg font-bold">العنوان</th>
                <th className="py-4 px-4 text-right text-lg font-bold">الوصف</th>
                <th className="py-4 px-4 text-center text-lg font-bold rounded-tl-xl">مشاهدة</th>
              </tr>
            </thead>
            <tbody className="text-right text-gray-200 divide-y divide-gray-700">
              {htmlLessonsContent.map((lesson, index) => (
                <motion.tr
                  key={lesson.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="hover:bg-gray-800 transition-colors duration-200"
                >
                  <td className="py-4 px-4 text-base font-medium">{lesson.order}</td>
                  <td className="py-4 px-4 font-bold text-lg text-pink-300"> {/* ✅ لون نص العنوان */}
                    <div className="flex items-center gap-3">
                      <lesson.icon className="text-2xl text-red-400" /> {/* ✅ لون أيقونة HTML */}
                      {lesson.title}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-300">{lesson.description}</td>
                  <td className="py-4 px-4 text-center">
                    <Link
                      href={`/lessons/${lesson.id}`}
                      // ✅ تم تعديل لون زر "ابدأ الدرس" إلى الأحمر
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
                    >
                      <FaPlayCircle /> ابدأ الدرس
                    </Link>
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
          transition={{ duration: 1, delay: htmlLessonsContent.length * 0.1 + 0.8 }}
          // ✅ تم تعديل الخلفية والحدود والظل ليتناسب مع ComputerSciencePage
          className="text-center text-sm sm:text-base text-gray-400 mt-10 p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-inner"
        >
          ✨ كل درس تم تصميمه بوضوح وسهولة لضمان تجربة تعلم ممتازة للمبتدئين!
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
