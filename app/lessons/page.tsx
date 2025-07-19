"use client";

import React, { useState, useCallback, JSX } from "react"; // <--- أضف React هنا
import { motion, AnimatePresence, Variants } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaptopCode,
  FaArrowLeft,
  FaGraduationCap,
  FaBookOpen,
} from "react-icons/fa";

// استيراد أنواع البيانات والدروس من الملف الخارجي
import {
  Lesson, // تم استيراد Lesson Type
  CourseSection, // تم استيراد CourseSection Type
  htmlLessons,
  cssLessons,
  jsLessons,
  reactLessons,
  programmingFundamentalsLessons,
} from "../data/lessons"; // المسار الصحيح لملف data/lessons.ts

// --- تعريف الأيقونات هنا وربطها بـ courseId ---
// هذا هو المكان الصحيح لتعريف مكونات JSX للأيقونات
const courseIcons: { [key: string]: JSX.Element } = {
  "programming-fundamentals-course": <FaLaptopCode className="text-4xl" />,
  "html-course": <FaHtml5 className="text-4xl" />,
  "css-course": <FaCss3Alt className="text-4xl" />,
  "javascript-course": <FaJsSquare className="text-4xl" />,
  "react-course": <FaReact className="text-4xl" />,
};

// --- Course Sections Data (image properties removed) ---
// تم تحديث هذا الجزء لاستخدام الدروس المستوردة مباشرةً
const allCoursesSections: CourseSection[] = [
  {
    id: "programming-fundamentals-course",
    title: "أساسيات البرمجة",
    description: "بوابة دخولك لعالم البرمجة من الصفر: تعلم التفكير البرمجي وأول خطوات كتابة الكود.",
    lessons: programmingFundamentalsLessons,
    iconColor: "text-emerald-400",
  },
  {
    id: "html-course",
    title: "HTML",
    description: "ابدأ رحلتك في بناء صفحات الويب الأساسية.",
    lessons: htmlLessons,
    iconColor: "text-orange-500",
  },
  {
    id: "css-course",
    title: "CSS",
    description: "أضف لمسة جمالية واحترافية لصفحات الويب الخاصة بك.",
    lessons: cssLessons,
    iconColor: "text-blue-500",
  },
  {
    id: "javascript-course",
    title: "JavaScript",
    description: "اجعل صفحاتك تفاعلية وديناميكية باستخدام قوة JavaScript.",
    lessons: jsLessons,
    iconColor: "text-yellow-500",
  },
  {
    id: "react-course",
    title: "React",
    description: "تعمق في بناء واجهات المستخدم المعقدة باستخدام مكتبة React.js.",
    lessons: reactLessons,
    iconColor: "text-cyan-400",
  },
];

export default function CoursesPage() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  const handleCourseSelect = useCallback((courseId: string) => {
    setSelectedCourseId(courseId);
  }, []);

  const handleBackToCourses = useCallback(() => {
    setSelectedCourseId(null);
  }, []);

  const selectedCourse = selectedCourseId
    ? allCoursesSections.find((course) => course.id === selectedCourseId)
    : null;

  // Variants for animation
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white min-h-screen flex flex-col justify-between font-['Cairo',_sans-serif] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20" style={{
          background: 'radial-gradient(circle at 10% 20%, #4a00e050, transparent 40%), radial-gradient(circle at 90% 80%, #00c6ff50, transparent 40%)'
      }}></div>
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/svg%3E")',
          backgroundSize: '10px 10px'
      }}></div>

      <Header />

      <main className="pt-32 pb-20 text-center space-y-12 relative z-10 px-4 md:px-8 lg:px-12" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 mb-16 leading-tight drop-shadow-2xl"
        >
          اكتشف رحلتك التعليمية القادمة
        </motion.h1>

        <div className="max-w-8xl mx-auto">
          <AnimatePresence mode="wait">
            {selectedCourseId === null ? (
              <motion.div
                key="course-cards"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-stretch"
              >
                {allCoursesSections.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onSelect={handleCourseSelect}
                    variants={itemVariants}
                    courseIcon={courseIcons[course.id]} // تمرير الأيقونة هنا
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="course-lessons"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full"
              >
                <div className="flex justify-start mb-10">
                  <motion.button
                    onClick={handleBackToCourses}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 rounded-full text-xl font-semibold transition-all duration-300 shadow-xl active:scale-95 text-white transform hover:-translate-x-2 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-80"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaArrowLeft className="text-xl" /> العودة إلى الكورسات
                  </motion.button>
                </div>

                <motion.h2
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-16 text-right bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500 drop-shadow-xl leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  دروس كورس: {selectedCourse?.title}
                </motion.h2>

                {selectedCourse && selectedCourse.lessons.length > 0 ? (
                  <motion.div
                    className="flex flex-col gap-4 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {selectedCourse.lessons.map((lesson, index) => (
                      <LessonListItem
                        key={lesson.id}
                        lesson={lesson}
                        variants={itemVariants}
                        lessonNumber={index + 1}
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-gray-400 text-2xl font-semibold mt-12 p-10 border border-gray-700/60 rounded-3xl bg-gray-800/40 flex flex-col items-center justify-center gap-6 shadow-2xl backdrop-blur-md"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <FaGraduationCap className="text-6xl text-purple-400 mb-4 animate-pulse" />
                    <span className="leading-relaxed text-center">
                      نحن نعمل بجد لإعداد محتوى هذا الكورس الشيق. <br />
                      يرجى التحقق مرة أخرى قريبًا للحصول على أحدث الدروس المتاحة!
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface CourseCardProps {
  course: (typeof allCoursesSections)[0];
  onSelect: (courseId: string) => void;
  variants: Variants;
  courseIcon: JSX.Element; // إضافة خاصية الأيقونة
}

function CourseCard({ course, onSelect, variants, courseIcon }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className={`relative p-1.5 rounded-3xl transition-all duration-500 overflow-hidden group 
                    ${isHovered ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 shadow-glow' : 'bg-transparent'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(course.id)}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{ willChange: 'transform' }}
    >
      <div
        className="relative bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-3xl p-8 flex flex-col items-center justify-between text-center h-full transition-all duration-300 transform group-hover:scale-[1.01] shadow-2xl border border-gray-700/60"
      >
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full opacity-10 blur-xl"></div>

        <motion.div
          className={`relative z-10 p-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 mb-7 transition-all duration-300 ${
            isHovered ? 'shadow-lg shadow-white/20' : 'shadow-md shadow-black/30'
          }`}
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <div className={`${course.iconColor} transition-colors duration-300 group-hover:text-white text-5xl`}>
            {courseIcon} {/* استخدام الأيقونة التي تم تمريرها كخاصية */}
          </div>
        </motion.div>

        <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-300 leading-tight">
          {course.title}
        </h3>
        <p className="text-gray-400 text-base mb-6 leading-relaxed line-clamp-3">
          {course.description}
        </p>
        <button className="mt-auto px-9 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl active:scale-95 transform hover:-translate-y-1">
          استكشف المحتوى <FaArrowLeft className="transform rotate-180 text-lg" />
        </button>
      </div>
    </motion.div>
  );
}

interface LessonListItemProps {
  lesson: Lesson;
  variants: Variants;
  lessonNumber: number;
}

function LessonListItem({ lesson, variants, lessonNumber }: LessonListItemProps) {
  return (
    <motion.div
      variants={variants}
      className={`relative bg-gradient-to-br from-slate-800 to-gray-900 border border-slate-700/70 rounded-xl p-5 shadow-lg transition-all duration-300 flex items-center gap-4 hover:border-blue-500 transform hover:-translate-y-1 hover:shadow-blue-600/30 group overflow-hidden`}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(59,130,246,0.1), transparent 70%), radial-gradient(circle at 90% 80%, rgba(147,51,234,0.1), transparent 70%)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'center',
          animation: 'swirl 15s linear infinite'
      }}></div>

      <div className="relative z-10 flex items-center w-full">
        <span className="flex-shrink-0 text-3xl font-bold text-blue-400 mr-4 w-12 text-center">
          {lessonNumber}.
        </span>

        <div className="flex-grow text-right pr-4">
          <h3 className="text-xl font-bold text-teal-300 leading-snug">
            {lesson.title}
          </h3>
          {/* تم حذف السطر التالي لأن خاصية description لم تعد موجودة في نوع Lesson */}
          {/* <p className="text-gray-400 text-sm mt-1 leading-relaxed line-clamp-2">
            {lesson.description}
          </p> */}
        </div>

        <Link
          href={`/lessons/${lesson.id}`}
          className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-sky-700 hover:from-blue-700 hover:to-sky-800 transition rounded-lg py-2.5 px-4 flex items-center gap-2 justify-center font-semibold text-sm text-white hover:shadow-xl active:scale-95 transform hover:scale-[1.02] mr-4"
        >
          <FaBookOpen className="text-xs" /> ابدأ
        </Link>
      </div>
    </motion.div>
  );
}