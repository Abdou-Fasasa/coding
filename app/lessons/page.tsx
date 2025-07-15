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
  FaCheck, // This will be removed from LessonCard's JSX
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
  FaLaptopCode, // Icon for Programming Fundamentals
} from "react-icons/fa";

// تعريف نوع الدرس (TypeScript)
type Lesson = {
  id: string;
  title: string;
  description: string;
  pdfPath?: string; // جعلها اختيارية
  imagePath: string;
  isCompleted?: boolean;
  hasTest?: boolean; // تحديد ما إذا كان الدرس يحتوي على اختبار
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
    pdfPath: "/pdfs/html/html-lesson3.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson4",
    title: "عناصر HTML ومكوناتها",
    description: "تعمق في فهم مكونات HTML وكيفية استخدامها بفاعلية.",
    pdfPath: "/pdfs/html/html-lesson4.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson5",
    title: "التعامل مع النصوص في HTML",
    description: "تعلم كيفية تنسيق النصوص وعرضها بشكل جذاب ومقروء في صفحاتك.",
    pdfPath: "/pdfs/html/html-lesson5.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson6",
    title: "التعامل مع الروابط في HTML",
    description: "اجعل صفحاتك متصلة بالعالم الخارجي وباقي صفحات موقعك.",
    pdfPath: "/pdfs/html/html-lesson6.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson7",
    title: "التعامل مع الصور في HTML",
    description: "أضف لمسة بصرية لصفحاتك باستخدام الصور وتعرف على أفضل الممارسات.",
    pdfPath: "/pdfs/html/html-lesson7.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson8",
    title: "التعامل مع القوائم في HTML – Lists",
    description: "نظم معلوماتك وهياكل المحتوى باستخدام القوائم المتنوعة.",
    pdfPath: "/pdfs/html/html-lesson8.pdf",
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
    pdfPath: "/pdfs/html/html-lesson10.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson11",
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    description: "هيكل صفحة الويب الخاصة بك بشكل احترافي وسهل الإدارة.",
    pdfPath: "/pdfs/html/html-lesson11.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson12",
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    description: "أثرِ صفحاتك بإضافة محتوى من مصادر خارجية متنوعة.",
    pdfPath: "/pdfs/html/html-lesson12.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson13",
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    description: "اكتشف الأساليب المثلى لكتابة كود HTML نظيف وفعال.",
    pdfPath: "/pdfs/html/html-lesson13.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Html-lesson14",
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    description: "طبق كل ما تعلمته في مشروع عملي يبرز مهاراتك في HTML.",
    pdfPath: "/pdfs/html/html-lesson14.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
];

// بيانات الدروس لكورس CSS
const cssLessons: Lesson[] = [
  {
    id: "Css-lesson1",
    title: "مقدمة في CSS",
    description: "ابدأ رحلتك في عالم التصميم وتعلم كيفية إضفاء الجمال على صفحاتك.",
    pdfPath: "/pdfs/css/css-lesson1.pdf",
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

// بيانات الدروس لكورس أساسيات البرمجة (جديد)
const programmingFundamentalsLessons: Lesson[] = [
  {
    id: "prog-fund-1",
    title: "1. إيه هي البرمجة وليه بنتعلمها؟",
    description: "مقدمة سريعة لعالم البرمجة وأهميتها في حياتنا اليومية.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-2",
    title: "2. الأدوات الأساسية للمبرمج",
    description: "تعرف على الأدوات اللي هتساعدك تكتب وتشغل الكود بتاعك.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-3",
    title: "3. المتغيرات وأنواع البيانات",
    description: "كيف يخزن الكمبيوتر المعلومات ويتعامل مع أنواعها المختلفة.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-4",
    title: "4. العمليات الحسابية والمنطقية",
    description: "نفذ العمليات الأساسية على الأرقام والقيم المنطقية.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-5",
    title: "5. جمل اتخاذ القرار (If/Else)",
    description: "اجعل برامجك تتخذ قرارات بناءً على شروط معينة.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-6",
    title: "6. الحلقات التكرارية (Loops)",
    description: "كرر الأوامر بسهولة وكفاءة لتوفير الوقت والجهد.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-7",
    title: "7. الدوال (Functions)",
    description: "اكتب كود منظم وقابل لإعادة الاستخدام لبرامج أقوى.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-8",
    title: "8. التعامل مع القوائم والمصفوفات",
    description: "خزن مجموعات من البيانات في مكان واحد واستخدمها بفاعلية.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-9",
    title: "9. المدخلات والمخرجات (Input/Output)",
    description: "تفاعل مع المستخدمين واستقبل منهم البيانات واعرض النتائج.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
  {
    id: "prog-fund-10",
    title: "10. مشروع بسيط: تطبيق الآلة الحاسبة",
    description: "طبق كل اللي اتعلمته في مشروع عملي يبرز مهاراتك الأساسية.",
    imagePath: "/images/programming-fundamentals.jpg",
    hasTest: false,
  },
];

// هيكل لجميع الكورسات التي سيتم عرضها كأقسام قابلة للطي
const allCoursesSections = [
  {
    id: "programming-fundamentals-course",
    title: "كورس أساسيات البرمجة 💡 (مجاناً)",
    icon: <FaLaptopCode className="text-4xl text-emerald-400" />,
    description: "بوابة دخولك لعالم البرمجة من الصفر: تعلم التفكير البرمجي وأول خطوات كتابة الكود.",
    lessons: programmingFundamentalsLessons,
    number: 1, // Added number
  },
  {
    id: "html-course",
    title: "كورس HTML: بناء هيكل الويب",
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    description: "ابدأ رحلتك في بناء صفحات الويب الأساسية.",
    lessons: htmlLessons,
    number: 2, // Added number
  },
  {
    id: "css-course",
    title: "كورس CSS: تنسيق وتصميم الويب",
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    description: "أضف لمسة جمالية واحترافية لصفحات الويب الخاصة بك.",
    lessons: cssLessons,
    number: 3, // Added number
  },
  {
    id: "javascript-course",
    title: "كورس JavaScript: التفاعل والديناميكية",
    icon: <FaJsSquare className="text-4xl text-yellow-500" />,
    description: "اجعل صفحاتك تفاعلية وديناميكية باستخدام قوة JavaScript.",
    lessons: jsLessons,
    number: 4, // Added number
  },
  {
    id: "react-course",
    title: "كورس React: بناء واجهات المستخدم الحديثة",
    icon: <FaReact className="text-4xl text-cyan-400" />,
    description: "تعمق في بناء واجهات المستخدم المعقدة باستخدام مكتبة React.js.",
    lessons: reactLessons,
    number: 5, // Added number
  },
  {
    id: "cyber-security-course",
    title: "كورس الأمن السيبراني: احترف حماية الأنظمة والشبكات",
    icon: <FaShieldAlt className="text-4xl text-purple-400" />,
    description: "احترف حماية الأنظمة والشبكات من التهديدات السيبرانية.",
    lessons: cyberSecurityLessons,
    number: 6, // Added number
  },
  {
    id: "social-media-hacking-course",
    title: "كورس اختراق السوشيال ميديا (لأغراض أمنية)",
    icon: <FaUnlockAlt className="text-4xl text-red-400" />,
    description: "كورس متقدم ضمن الأمن السيبراني لتعلم الجوانب القانونية والأخلاقية لاختراق حسابات التواصل الاجتماعي.",
    lessons: socialMediaHackingLessons,
    number: 7, // Added number
  },
  // يمكنك إضافة كورسات أخرى هنا بنفس النمط
];

export default function CoursesPage() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  // فتح كورس أساسيات البرمجة تلقائياً عند التحميل، أو يمكن تركه null ليتم إغلاق الكل
  const [activeCourseSection, setActiveCourseSection] = useState<string | null>("programming-fundamentals-course"); 

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
      marginTop: "1.5rem", // Slightly reduced margin
      transition: {
        duration: 0.5,
        ease: easeInOut,
        when: "beforeChildren",
        staggerChildren: 0.08, // Slightly faster stagger
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
            className={`w-full py-10 ${index === 0 ? 'border-t' : ''} border-b border-gray-700/50 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-2xl`}
          >
            <div className="max-w-6xl mx-auto px-6">
              {/* UPDATED COURSE SECTION HEADER STYLE */}
              <motion.div
                className="flex items-center justify-between cursor-pointer py-4 px-6 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-xl border border-gray-600"
                onClick={() => toggleCourseSection(courseSection.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-teal-300 flex items-center gap-3">
                  <span className="text-gray-400 text-2xl md:text-3xl font-mono mr-2">
                    {courseSection.number}.
                  </span>
                  {courseSection.icon} {courseSection.title}
                </h2>
                <motion.div
                  animate={{ rotate: activeCourseSection === courseSection.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeCourseSection === courseSection.id ? (
                    <FaChevronUp className="text-3xl text-gray-300" />
                  ) : (
                    <FaChevronDown className="text-3xl text-gray-300" />
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
                    className="overflow-hidden bg-[#1e293b] p-4 rounded-2xl shadow-xl border border-gray-700/50"
                  >
                    <p className="text-gray-400 text-base text-center max-w-3xl mx-auto mb-6 mt-3">
                      {courseSection.description}
                    </p>

                    {courseSection.lessons.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      <p className="text-gray-500 text-lg font-semibold mt-8 p-5 border border-gray-700/40 rounded-xl bg-gray-800/30 flex items-center justify-center gap-2">
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

// مكون بطاقة الدرس (محتفظة بالحجم المدمج والأنيق)
function LessonCard({ lesson, onPlay, variants }: LessonCardProps) {
  return (
    <motion.div
      variants={variants}
      className={`relative bg-[#1e293b] border ${
        lesson.isCompleted ? 'border-green-500 shadow-green-500/30' : 'border-cyan-500/40'
      } rounded-xl p-3 shadow-lg transition-all duration-300 flex flex-col`}
    >
      <div className="w-full h-28 mb-1 overflow-hidden rounded-lg relative">
        <Image
          src={lesson.imagePath}
          alt={`صورة الدرس ${lesson.id}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <h3 className="text-lg font-bold text-cyan-300 mb-0.5 text-center flex-grow line-clamp-2">
        {lesson.title}
      </h3>
      <p className="text-gray-400 text-xs mb-2 text-center flex-grow line-clamp-3">
        {lesson.description}
      </p>

      <div className="flex flex-col gap-1.5 mt-auto">
        <Link
          href={`/lessons/${lesson.id}`}
          onClick={() => onPlay(lesson.id)}
          className="bg-cyan-600 hover:bg-cyan-700 transition rounded-lg py-1.5 px-2.5 flex items-center gap-1.5 justify-center font-semibold text-sm hover:shadow-md active:scale-95"
        >
          <FaPlay className="text-xs" /> تشغيل الدرس
        </Link>

        {lesson.hasTest !== false && (
          <Link
            href={`/lessons/${lesson.id}/test`}
            className="bg-purple-600 hover:bg-purple-700 transition rounded-lg py-1.5 px-2.5 flex items-center gap-1.5 justify-center font-semibold text-sm hover:shadow-md active:scale-95"
          >
            <FaCheckCircle className="text-xs" /> اختبار الدرس
          </Link>
        )}

        {lesson.pdfPath && (
          <a
            href={lesson.pdfPath}
            download
            className="bg-green-600 hover:bg-green-700 transition rounded-lg py-1.5 px-2.5 flex items-center gap-1.5 justify-center font-semibold text-sm hover:shadow-md active:scale-95"
          >
            <FaFilePdf className="text-xs" /> تحميل ملف الدرس PDF
          </a>
        )}
      </div>
    </motion.div>
  );
}