"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaCheckCircle,
  FaFilePdf,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaShieldAlt,
  FaUnlockAlt,
  FaLaptopCode,
  FaArrowLeft,
  FaLightbulb, // Icon for 'no lessons' message
  FaGraduationCap, // A more general icon for learning
  FaBookOpen, // New icon for 'read lesson' or 'view content'
} from "react-icons/fa";

// Lesson Type Definition (Unchanged)
type Lesson = {
  id: string;
  title: string;
  description: string;
  pdfPath?: string;
  imagePath: string;
  isCompleted?: boolean;
  hasTest?: boolean;
};

// --- Lesson Data (Unchanged - assuming this data is final) ---
const htmlLessons: Lesson[] = [
  {
    id: "Computer-science",
    title: "مقدمة في علوم الحاسوب والبرمجة",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا.",
    pdfPath: "/pdfs/Computer-science.pdf",
    imagePath: "/images/html-lessons.jpg",
  },
  {
    id: "Work-environment",
    title: "تجهيز بيئة العمل",
    description: "جهز أدواتك وابدأ في بناء مشروعك الأول بكل سهولة ويسر.",
    pdfPath: "/pdfs/Work-environment.pdf",
    imagePath: "/images/html-lessons.jpg",
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

const jsLessons: Lesson[] = [];
const reactLessons: Lesson[] = [];
const cyberSecurityLessons: Lesson[] = [];
const socialMediaHackingLessons: Lesson[] = [];

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

// --- Course Sections Data (Unchanged) ---
const allCoursesSections = [
  {
    id: "programming-fundamentals-course",
    title: "أساسيات البرمجة",
    icon: <FaLaptopCode className="text-4xl" />,
    description: "بوابة دخولك لعالم البرمجة من الصفر: تعلم التفكير البرمجي وأول خطوات كتابة الكود.",
    lessons: programmingFundamentalsLessons,
    image: "/images/programming-fundamentals.jpg",
    iconColor: "text-emerald-400",
  },
  {
    id: "html-course",
    title: "HTML",
    icon: <FaHtml5 className="text-4xl" />,
    description: "ابدأ رحلتك في بناء صفحات الويب الأساسية.",
    lessons: htmlLessons,
    image: "/images/html-lessons.jpg",
    iconColor: "text-orange-500",
  },
  {
    id: "css-course",
    title: "CSS",
    icon: <FaCss3Alt className="text-4xl" />,
    description: "أضف لمسة جمالية واحترافية لصفحات الويب الخاصة بك.",
    lessons: cssLessons,
    image: "/images/css-lessons.jpg",
    iconColor: "text-blue-500",
  },
  {
    id: "javascript-course",
    title: "JavaScript",
    icon: <FaJsSquare className="text-4xl" />,
    description: "اجعل صفحاتك تفاعلية وديناميكية باستخدام قوة JavaScript.",
    lessons: jsLessons,
    image: "/images/js-lessons.jpg",
    iconColor: "text-yellow-500",
  },
  {
    id: "react-course",
    title: "React",
    icon: <FaReact className="text-4xl" />,
    description: "تعمق في بناء واجهات المستخدم المعقدة باستخدام مكتبة React.js.",
    lessons: reactLessons,
    image: "/images/react-lessons.jpg",
    iconColor: "text-cyan-400",
  },
  {
    id: "cyber-security-course",
    title: "الأمن السيبراني",
    icon: <FaShieldAlt className="text-4xl" />,
    description: "احترف حماية الأنظمة والشبكات من التهديدات السيبرانية.",
    lessons: cyberSecurityLessons,
    image: "/images/cyber-security.jpg",
    iconColor: "text-purple-400",
  },
  {
    id: "social-media-hacking-course",
    title: "اختراق السوشيال ميديا",
    icon: <FaUnlockAlt className="text-4xl" />,
    description: "كورس متقدم ضمن الأمن السيبراني لتعلم الجوانب القانونية والأخلاقية لاختراق حسابات التواصل الاجتماعي.",
    lessons: socialMediaHackingLessons,
    image: "/images/social-media-hacking.jpg",
    iconColor: "text-red-400",
  },
];

export default function CoursesPage() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCompleted = localStorage.getItem("completedLessons");
      if (storedCompleted) {
        try {
          setCompletedLessons(new Set(JSON.parse(storedCompleted)));
        } catch (e) {
          console.error("Failed to parse completed lessons from local storage", e);
          localStorage.removeItem("completedLessons");
        }
      }
    }
  }, []);

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
    // Outer container with a deep, subtle gradient and background noise effect
    <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white min-h-screen flex flex-col justify-between font-['Cairo',_sans-serif] relative overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
          background: 'radial-gradient(circle at 10% 20%, #4a00e050, transparent 40%), radial-gradient(circle at 90% 80%, #00c6ff50, transparent 40%)'
      }}></div>
      {/* Subtle noise pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'10\' height=\'10\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {selectedCourse.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={{ ...lesson, isCompleted: completedLessons.has(lesson.id) }}
                        onPlay={() => markLessonAsCompleted(lesson.id)}
                        variants={itemVariants}
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

// CourseCard Type Definition
interface CourseCardProps {
  course: typeof allCoursesSections[0];
  onSelect: (courseId: string) => void;
  variants: Variants;
}

// Course Card Component: Floating & Interactive (Unchanged from previous iteration as focus is on lessons)
function CourseCard({ course, onSelect, variants }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      className={`relative p-1.5 rounded-3xl transition-all duration-500 overflow-hidden group 
                  ${isHovered ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 shadow-glow' : 'bg-transparent'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(course.id)}
      whileHover={{ y: -8 }} // Slight lift effect on hover for floating feel
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{ willChange: 'transform' }} // Optimize for animation
    >
      <div
        className="relative bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-3xl p-8 flex flex-col items-center justify-between text-center h-full transition-all duration-300 transform group-hover:scale-[1.01] shadow-2xl border border-gray-700/60"
      >
        {/* Decorative elements for the floating feel */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 rounded-full opacity-10 blur-xl"></div>

        {/* Course Icon with enhanced styling */}
        <motion.div
          className={`relative z-10 p-6 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 mb-7 transition-all duration-300 ${
            isHovered ? 'shadow-lg shadow-white/20' : 'shadow-md shadow-black/30'
          }`}
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
        >
          <div className={`${course.iconColor} transition-colors duration-300 group-hover:text-white text-5xl`}>
            {course.icon}
          </div>
        </motion.div>

        {/* Course Title */}
        <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-300 leading-tight">
          {course.title}
        </h3>
        {/* Course Description */}
        <p className="text-gray-400 text-base mb-6 leading-relaxed line-clamp-3">
          {course.description}
        </p>
        {/* Call to action button */}
        <button className="mt-auto px-9 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-full text-lg font-semibold hover:from-sky-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl active:scale-95 transform hover:-translate-y-1">
          استكشف المحتوى <FaArrowLeft className="transform rotate-180 text-lg" />
        </button>
      </div>
    </motion.div>
  );
}

interface LessonCardProps {
  lesson: Lesson & { isCompleted: boolean };
  onPlay: (lessonId: string) => void;
  variants: Variants;
}

// NEW & IMPROVED Lesson Card Component
function LessonCard({ lesson, onPlay, variants }: LessonCardProps) {
  return (
    <motion.div
      variants={variants}
      className={`relative bg-gradient-to-br from-slate-800 to-gray-900 border ${
        lesson.isCompleted ? 'border-green-600 shadow-green-700/40' : 'border-slate-700/70'
      } rounded-2xl p-6 shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-blue-500 transform hover:-translate-y-2 hover:shadow-blue-600/30 group overflow-hidden`}
    >
      {/* Background swirl/pattern on hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(59,130,246,0.1), transparent 70%), radial-gradient(circle at 90% 80%, rgba(147,51,234,0.1), transparent 70%)',
          backgroundSize: '200% 200%',
          backgroundPosition: 'center',
          animation: 'swirl 15s linear infinite' // Needs a CSS keyframe
      }}></div>

      {/* Completed Badge */}
      {lesson.isCompleted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 bg-green-700 text-white text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 z-10 shadow-lg font-semibold"
        >
          <FaCheckCircle className="text-base" /> مكتمل
        </motion.div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center flex-grow">
        {/* Lesson Image */}
        <div className="w-full h-40 mb-4 overflow-hidden rounded-xl relative shadow-lg border border-gray-700/50">
          <Image
            src={lesson.imagePath}
            alt={`صورة الدرس ${lesson.id}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Lesson Title */}
        <h3 className="text-2xl font-bold text-teal-300 mb-2 leading-snug line-clamp-2">
          {lesson.title}
        </h3>
        {/* Lesson Description */}
        <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3 flex-grow">
          {lesson.description}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-col gap-3 mt-auto pt-4 border-t border-slate-700/60">
        <Link
          href={`/lessons/${lesson.id}`}
          onClick={() => onPlay(lesson.id)}
          className="bg-gradient-to-r from-blue-600 to-sky-700 hover:from-blue-700 hover:to-sky-800 transition rounded-lg py-3 px-3 flex items-center gap-2 justify-center font-semibold text-base text-white hover:shadow-xl active:scale-95 transform hover:scale-[1.01]"
        >
          <FaBookOpen className="text-sm" /> ابدأ الدرس
        </Link>

        {lesson.hasTest !== false && (
          <Link
            href={`/lessons/${lesson.id}/test`}
            className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 transition rounded-lg py-3 px-3 flex items-center gap-2 justify-center font-semibold text-base text-white hover:shadow-xl active:scale-95 transform hover:scale-[1.01]"
          >
            <FaCheckCircle className="text-sm" /> اختبار الدرس
          </Link>
        )}

        {lesson.pdfPath && (
          <a
            href={lesson.pdfPath}
            download
            className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 transition rounded-lg py-3 px-3 flex items-center gap-2 justify-center font-semibold text-base text-white hover:shadow-xl active:scale-95 transform hover:scale-[1.01]"
          >
            <FaFilePdf className="text-sm" /> تحميل ملف PDF
          </a>
        )}
      </div>
    </motion.div>
  );
}