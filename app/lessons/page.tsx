"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants, easeInOut } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaCheck,
  FaCheckCircle,
  FaFilePdf,
  FaHtml5, // HTML icon
  FaCss3Alt, // CSS icon
  FaJsSquare, // JavaScript icon
  FaReact, // React icon
  FaShieldAlt, // Cyber Security icon
  FaUnlockAlt, // Social Media Hacking icon
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// تعريف نوع الدرس (TypeScript)
type Lesson = {
  id: string;
  title: string;
  description: string;
  pdfPath: string;
  imagePath: string;
  isCompleted?: boolean;
};

// بيانات الدروس لكورس HTML
const htmlLessons: Lesson[] = [
  {
    id: "Computer-science",
    title: "مقدمة في علوم الحاسوب والبرمجة",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا.",
    pdfPath: "/pdfs/Computer-science.pdf",
    imagePath: "/images/Computer-science.jpg",
  },
  {
    id: "Work-environment",
    title: "تجهيز بيئة العمل",
    description: "جهز أدواتك وابدأ في بناء مشروعك الأول بكل سهولة ويسر.",
    pdfPath: "/pdfs/Work-environment.pdf",
    imagePath: "/images/Work-environment.jpg",
  },
  {
    id: "Html-lesson3",
    title: "بناء هيكل صفحة الويب (HTML)",
    description: "اكتشف كيف تُبنى صفحات الويب من الصفر باستخدام لغة HTML.",
    pdfPath: "/pdfs/html-lesson3.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson4",
    title: "عناصر HTML ومكوناتها",
    description: "تعمق في فهم مكونات HTML وكيفية استخدامها بفاعلية.",
    pdfPath: "/pdfs/html-lesson4.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson5",
    title: "التعامل مع النصوص في HTML",
    description: "تعلم كيفية تنسيق النصوص وعرضها بشكل جذاب ومقروء في صفحاتك.",
    pdfPath: "/pdfs/html-lesson5.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson6",
    title: "التعامل مع الروابط في HTML",
    description: "اجعل صفحاتك متصلة بالعالم الخارجي وباقي صفحات موقعك.",
    pdfPath: "/pdfs/html-lesson6.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson7",
    title: "التعامل مع الصور في HTML",
    description: "أضف لمسة بصرية لصفحاتك باستخدام الصور وتعرف على أفضل الممارسات.",
    pdfPath: "/pdfs/html-lesson7.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson8",
    title: "التعامل مع القوائم في HTML – Lists",
    description: "نظم معلوماتك وهياكل المحتوى باستخدام القوائم المتنوعة.",
    pdfPath: "/pdfs/html-lesson8.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson9",
    title: "الجداول في HTML – Tables",
    description: "تعلم كيفية عرض البيانات المعقدة بشكل منظم وواضح في جداول HTML.",
    pdfPath: "/pdfs/html-lesson9.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson10",
    title: "النماذج في HTML – Forms",
    description: "اجمع معلومات المستخدمين وتفاعل معهم من خلال إنشاء نماذج متكاملة.",
    pdfPath: "/pdfs/html-lesson10.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson11",
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    description: "هيكل صفحة الويب الخاصة بك بشكل احترافي وسهل الإدارة.",
    pdfPath: "/pdfs/html-lesson11.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson12",
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    description: "أثرِ صفحاتك بإضافة محتوى من مصادر خارجية متنوعة.",
    pdfPath: "/pdfs/html-lesson12.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson13",
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    description: "اكتشف الأساليب المثلى لكتابة كود HTML نظيف وفعال.",
    pdfPath: "/pdfs/html-lesson13.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson14",
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    description: "طبق كل ما تعلمته في مشروع عملي يبرز مهاراتك في HTML.",
    pdfPath: "/pdfs/html-lesson14.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
];

// بيانات الدروس لكورس CSS
const cssLessons: Lesson[] = [
  {
    id: "Css-lesson1",
    title: "مقدمة في CSS",
    description: "ابدأ رحلتك في عالم التصميم وتعلم كيفية إضفاء الجمال على صفحاتك.",
    pdfPath: "/pdfs/css-lesson1.pdf",
    imagePath: "/images/css-lessons.jpg",
  },
  // Add more CSS lessons here
];

// بيانات الدروس لكورس JavaScript
const jsLessons: Lesson[] = [
  // {
  //   id: "Js-lesson1",
  //   title: "مقدمة في JavaScript",
  //   description: "اكتشف قوة JavaScript في إضفاء التفاعل والحياة على صفحات الويب.",
  //   pdfPath: "/pdfs/js-lesson1.pdf",
  //   imagePath: "/images/js-lessons.jpg",
  // },
];

// بيانات الدروس لكورس React
const reactLessons: Lesson[] = [
  // {
  //   id: "React-lesson1",
  //   title: "مقدمة في React.js",
  //   description: "تعلم أساسيات React.js وبناء مكونات الواجهة.",
  //   pdfPath: "/pdfs/react-lesson1.pdf",
  //   imagePath: "/images/react-lessons.jpg",
  // },
];

// بيانات الدروس لكورس الأمن السيبراني
const cyberSecurityLessons: Lesson[] = [
  // {
  //   id: "CS-lesson1",
  //   title: "مقدمة في الشبكات وأساسياتها",
  //   description: "فهم البنية التحتية للشبكات وأهميتها في الأمن السيبراني.",
  //   pdfPath: "/pdfs/cs-lesson1.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
  // {
  //   id: "CS-lesson2",
  //   title: "أنواع الاختراقات وأساليبها",
  //   description: "تعرف على أبرز التهديدات السيبرانية وكيفية عملها.",
  //   pdfPath: "/pdfs/cs-lesson2.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
  // {
  //   id: "CS-lesson3",
  //   title: "أساليب الحماية المتقدمة",
  //   description: "تعلم استراتيجيات قوية لحماية الأنظمة والبيانات.",
  //   pdfPath: "/pdfs/cs-lesson3.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
  // {
  //   id: "CS-lesson4",
  //   title: "أدوات اختبار الاختراق (Penetration Testing)",
  //   description: "اكتشف الأدوات المستخدمة في اختبار الاختراق الأخلاقي.",
  //   pdfPath: "/pdfs/cs-lesson4.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
  // {
  //   id: "CS-lesson5",
  //   title: "مشروع اختراق قانوني (Ethical Hacking)",
  //   description: "طبق مهاراتك في مشروع عملي محاكي لاختراق نظام.",
  //   pdfPath: "/pdfs/cs-lesson5.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
  // {
  //   id: "CS-lesson6",
  //   title: "تأهيل للعمل في مجال الأمن السيبراني",
  //   description: "إرشادات وخطوات للدخول إلى سوق العمل في الأمن السيبراني.",
  //   pdfPath: "/pdfs/cs-lesson6.pdf",
  //   imagePath: "/images/cyber-security.jpg",
  // },
];

// بيانات الدروس لكورس اختراق السوشيال ميديا
const socialMediaHackingLessons: Lesson[] = [
  // {
  //   id: "SMH-lesson1",
  //   title: "تقنيات جمع المعلومات (OSINT)",
  //   description: "تعلم كيفية جمع المعلومات علنًا عن الأهداف.",
  //   pdfPath: "/pdfs/smh-lesson1.pdf",
  //   imagePath: "/images/social-media-hacking.jpg",
  // },
  // {
  //   id: "SMH-lesson2",
  //   title: "فهم الثغرات الشائعة",
  //   description: "اكتشف الثغرات الأمنية المتكررة في منصات التواصل.",
  //   pdfPath: "/pdfs/smh-lesson2.pdf",
  //   imagePath: "/images/social-media-hacking.jpg",
  // },
];

// هيكل لجميع الكورسات التي سيتم عرضها كأقسام قابلة للطي
const allCoursesSections = [
  {
    id: "html-course",
    title: "كورس HTML: بناء هيكل الويب",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    description: "ابدأ رحلتك في بناء صفحات الويب الأساسية.",
    lessons: htmlLessons,
  },
  {
    id: "css-course",
    title: "كورس CSS: تنسيق وتصميم الويب",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    description: "أضف لمسة جمالية واحترافية لصفحات الويب الخاصة بك.",
    lessons: cssLessons,
  },
  {
    id: "javascript-course",
    title: "كورس JavaScript: التفاعل والديناميكية",
    icon: <FaJsSquare className="text-4xl text-yellow-500" />,
    description: "اجعل صفحاتك تفاعلية وديناميكية باستخدام قوة JavaScript.",
    lessons: jsLessons,
  },
  {
    id: "react-course",
    title: "كورس React: بناء واجهات المستخدم الحديثة",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    description: "تعمق في بناء واجهات المستخدم المعقدة باستخدام مكتبة React.js.",
    lessons: reactLessons,
  },
  {
    id: "cyber-security-course",
    title: "كورس الأمن السيبراني: احترف حماية الأنظمة والشبكات",
    icon: <FaShieldAlt className="text-4xl text-purple-400" />,
    description: "احترف حماية الأنظمة والشبكات من التهديدات السيبرانية.",
    lessons: cyberSecurityLessons,
  },
  {
    id: "social-media-hacking-course",
    title: "كورس اختراق السوشيال ميديا (لأغراض أمنية)",
    icon: <FaUnlockAlt className="text-4xl text-red-400" />,
    description: "كورس متقدم ضمن الأمن السيبراني لتعلم الجوانب القانونية والأخلاقية لاختراق حسابات التواصل الاجتماعي.",
    lessons: socialMediaHackingLessons,
  },
  // يمكنك إضافة كورسات أخرى هنا بنفس النمط
];


export default function CoursesPage() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  // فتح كورس HTML تلقائياً عند التحميل، أو يمكن تركه null ليتم إغلاق الكل
  const [activeCourseSection, setActiveCourseSection] = useState<string | null>("html-course");

  // Load completion status from Local Storage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCompleted = localStorage.getItem("completedLessons");
      if (storedCompleted) {
        try {
          setCompletedLessons(new Set(JSON.parse(storedCompleted)));
        } catch (e) {
          console.error("Failed to parse completed lessons from local storage", e);
          localStorage.removeItem("completedLessons"); // Clear invalid data
        }
      }
    }
  }, []);

  // Save completion status to Local Storage on every change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("completedLessons", JSON.stringify(Array.from(completedLessons)));
    }
  }, [completedLessons]);

  const markLessonAsCompleted = useCallback((lessonId: string) => {
    setCompletedLessons((prev) => {
      const newSet = new Set(prev);
      newSet.add(lessonId);
      return newSet;
    });
  }, []);

  const toggleCourseSection = useCallback((sectionId: string) => {
    setActiveCourseSection((prev) => (prev === sectionId ? null : sectionId));
  }, []);

  const lessonGridVariants = {
    open: {
      opacity: 1,
      height: "auto",
      marginTop: "2rem",
      transition: {
        duration: 0.5,
        ease: easeInOut,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    collapsed: {
      opacity: 0,
      height: 0,
      marginTop: "0rem",
      transition: {
        duration: 0.5,
        ease: easeInOut,
        when: "afterChildren",
      },
    },
  };

  const lessonCardItemVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    collapsed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 text-center space-y-12 relative overflow-hidden" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 mb-12"
        >
          اكتشف مساراتنا التعليمية
        </motion.h1>

        {/* Dynamic Course Sections */}
        {allCoursesSections.map((courseSection, index) => (
          <section
            key={courseSection.id}
            className={`w-full py-12 ${index === 0 ? 'border-t' : ''} border-b border-gray-700/50 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200 shadow-lg border border-gray-700/60"
                onClick={() => toggleCourseSection(courseSection.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 flex items-center gap-3">
                  {courseSection.icon} {courseSection.title}
                </h2>
                <motion.div
                  animate={{ rotate: activeCourseSection === courseSection.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeCourseSection === courseSection.id ? (
                    <FaChevronUp className="text-3xl text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-3xl text-gray-400" />
                  )}
                </motion.div>
              </motion.div>

              <AnimatePresence initial={false}>
                {activeCourseSection === courseSection.id && (
                  <motion.div
                    key={`${courseSection.id}-collapsible-content`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={lessonGridVariants}
                    className="overflow-hidden bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-gray-700/50"
                  >
                    <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-8 mt-4">
                      {courseSection.description}
                    </p>

                    {courseSection.lessons.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {courseSection.lessons.map((lesson) => (
                          <LessonCard
                            key={lesson.id}
                            lesson={{ ...lesson, isCompleted: completedLessons.has(lesson.id) }}
                            onPlay={() => markLessonAsCompleted(lesson.id)}
                            variants={lessonCardItemVariants}
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-xl font-semibold mt-10 p-6 border border-gray-700/40 rounded-xl bg-gray-800/30 flex items-center justify-center gap-3">
                        {courseSection.icon} لم يتم تسجيل محاضرات لهذا الكورس بعد. ابقوا على اطلاع!
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}

interface LessonCardProps {
  lesson: Lesson & { isCompleted: boolean };
  onPlay: (lessonId: string) => void;
  variants: Variants;
}

// مكون بطاقة الدرس (بعد التعديلات المطلوبة: حذف زر المشاركة وتصغير الحجم)
function LessonCard({ lesson, onPlay, variants }: LessonCardProps) {
  return (
    <motion.div
      variants={variants}
      className={`relative bg-[#1e293b] border ${
        lesson.isCompleted ? 'border-green-500 shadow-green-500/30' : 'border-cyan-500/40'
      } rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col`}
    >
      {lesson.isCompleted && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute top-4 right-4 bg-green-600 rounded-full p-2 text-white shadow-lg z-10"
        >
          <FaCheck className="text-xl" />
        </motion.div>
      )}

      <div className="w-full h-32 mb-2 overflow-hidden rounded-xl relative">
        <Image
          src={lesson.imagePath}
          alt={`صورة الدرس ${lesson.id}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* تصغير حجم مربع العنوان ووصف الفيديو */}
      <h3 className="text-xl font-bold text-cyan-300 mb-1 text-center flex-grow line-clamp-2">
        {lesson.title}
      </h3>
      <p className="text-gray-400 text-xs mb-3 text-center flex-grow line-clamp-3">
        {lesson.description}
      </p>

      <div className="flex flex-col gap-2 mt-auto">
        <Link
          href={`/lessons/${lesson.id}`}
          onClick={() => onPlay(lesson.id)}
          className="bg-cyan-600 hover:bg-cyan-700 transition rounded-xl py-2 px-3 flex items-center gap-2 justify-center font-semibold text-base hover:shadow-md active:scale-95"
        >
          <FaPlay className="text-sm" /> تشغيل الدرس
        </Link>

        <Link
          href={`/lessons/${lesson.id}/test`}
          className="bg-purple-600 hover:bg-purple-700 transition rounded-xl py-2 px-3 flex items-center gap-2 justify-center font-semibold text-base hover:shadow-md active:scale-95"
        >
          <FaCheckCircle className="text-sm" /> اختبار الدرس
        </Link>

        <a
          href={lesson.pdfPath}
          download
          className="bg-green-600 hover:bg-green-700 transition rounded-xl py-2 px-3 flex items-center gap-2 justify-center font-semibold text-base hover:shadow-md active:scale-95"
        >
          <FaFilePdf className="text-sm" /> تحميل ملف الدرس PDF
        </a>

        {/* تم حذف زر المشاركة بالكامل بناءً على طلبك */}
      </div>
    </motion.div>
  );
}