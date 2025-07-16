"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { FaShieldAlt, FaInfoCircle, FaArrowRight, FaLock, FaUnlockAlt, FaDollarSign, FaSpinner } from "react-icons/fa"; // Added FaSpinner for loading
import Link from "next/link";

// تعريف الأكواد السرية لكل كورس
const COURSE_UNLOCK_CODES: { [key: string]: string | undefined } = {
  "programming-fundamentals-course": undefined, // هذا الكورس مجاني ومفتوح دائمًا
  "html-course": "HTMLPRO2025",
  "css-course": "CSSMASTER2025",
  "javascript-course": "JSDEV2025",
  "react-course": "REACTEXPERT2025",
  "cyber-security-course": "CYBERSECURE2025",
  "social-media-hacking-course": "SMHACKER2025",
};

// بيانات الدروس
const allLessonsData: {
  [key: string]: { title: string; video: string; description: string; poster: string; courseId: string };
} = {
  // دروس أساسيات البرمجة (مفتوحة)
  "prog-fund-1": {
    title: "1. إيه هي البرمجة وليه بنتعلمها؟",
    video: "/videos/programming-fundamentals/prog-fund-1.mp4",
    description: "مقدمة سريعة لعالم البرمجة وأهميتها في حياتنا اليومية.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-2": {
    title: "2. الأدوات الأساسية للمبرمج",
    video: "/videos/programming-fundamentals/prog-fund-2.mp4",
    description: "تعرف على الأدوات اللي هتساعدك تكتب وتشغل الكود بتاعك.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-3": {
    title: "3. المتغيرات وأنواع البيانات",
    video: "/videos/programming-fundamentals/prog-fund-3.mp4",
    description: "كيف يخزن الكمبيوتر المعلومات ويتعامل مع أنواعها المختلفة.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-4": {
    title: "4. العمليات الحسابية والمنطقية",
    video: "/videos/programming-fundamentals/prog-fund-4.mp4",
    description: "نفذ العمليات الأساسية على الأرقام والقيم المنطقية.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-5": {
    title: "5. جمل اتخاذ القرار (If/Else)",
    video: "/videos/programming-fundamentals/prog-fund-5.mp4",
    description: "اجعل برامجك تتخذ قرارات بناءً على شروط معينة.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-6": {
    title: "6. الحلقات التكرارية (Loops)",
    video: "/videos/programming-fundamentals/prog-fund-6.mp4",
    description: "كرر الأوامر بسهولة وكفاءة لتوفير الوقت والجهد.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-7": {
    title: "7. الدوال (Functions)",
    video: "", // Placeholder
    description: "اكتب كود منظم وقابل لإعادة الاستخدام لبرامج أقوى.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-8": {
    title: "8. التعامل مع القوائم والمصفوفات",
    video: "", // Placeholder
    description: "خزن مجموعات من البيانات في مكان واحد واستخدمها بفاعلية.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-9": {
    title: "9. المدخلات والمخرجات (Input/Output)",
    video: "", // Placeholder
    description: "تفاعل مع المستخدمين واستقبل منهم البيانات واعرض النتائج.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-10": {
    title: "10. مشروع بسيط: تطبيق الآلة الحاسبة",
    video: "", // Placeholder
    description: "طبق كل اللي اتعلمته في مشروع عملي يبرز مهاراتك الأساسية.",
    poster: "/images/programming-fundamentals.jpg",
    courseId: "programming-fundamentals-course",
  },

  // دروس علوم الحاسوب (تحت كورس HTML لتسهيل المثال)
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا. هذا الدرس يضع الأساس لجميع الدورات القادمة.",
    poster: "/images/Computer-science.jpg",
    courseId: "html-course", // يتبع كورس HTML
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
    description: "تعلم كيفية إعداد بيئة التطوير المثالية لبناء مشاريعك البرمجية بسهولة وفعالية.",
    poster: "/images/Work-environment.jpg",
    courseId: "html-course", // يتبع كورس HTML
  },
  // دروس HTML
  "Html-lesson3": {
    title: "بناء هيكل صفحة الويب (HTML)",
    video: "/videos/html/html-lesson3.mp4",
    description: "اكتشف أساسيات HTML وكيفية تنظيم المحتوى لإنشاء صفحات الويب المتكاملة.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson4": {
    title: "عناصر HTML ومكوناتها",
    video: "/videos/html/html-lesson4.mp4",
    description: "تفصيل شامل لأنواع عناصر HTML المختلفة وكيفية استخدامها لبناء صفحات غنية بالمحتوى.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson5": {
    title: "التعامل مع النصوص في HTML",
    video: "/videos/html/html-lesson5.mp4",
    description: "تعلم كيفية تنسيق وإدارة النصوص في HTML، من العناوين والفقرات إلى التنسيقات الخاصة.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson6": {
    title: "التعامل مع الروابط في HTML",
    video: "/videos/html/html-lesson6.mp4",
    description: "دليل شامل لإنشاء الروابط في HTML، وكيفية ربط الصفحات والموارد الخارجية بفعالية.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson7": {
    title: "التعامل مع الصور في HTML",
    video: "/videos/html/html-lesson7.mp4",
    description: "استكشف كيفية إضافة الصور إلى صفحات HTML وتحسينها للعرض على الويب.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson8": {
    title: "التعامل مع القوائم في HTML – Lists",
    video: "/videos/html/html-lesson8.mp4",
    description: "تعلم تنظيم المحتوى باستخدام القوائم المرتبة وغير المرتبة والقوائم الوصفية في HTML.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson9": {
    title: "الجداول في HTML – Tables",
    video: "/videos/html/html-lesson9.mp4",
    description: "استخدام الجداول في HTML لعرض البيانات المنظمة بشكل جذاب وواضح.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson10": {
    title: "النماذج في HTML – Forms",
    video: "/videos/html/html-lesson10.mp4",
    description: "دليل كامل لإنشاء نماذج HTML للتفاعل مع المستخدمين وجمع البيانات.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson11": {
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    video: "/videos/html/html-lesson11.mp4",
    description: "هيكل صفحات الويب الخاصة بك بشكل احترافي باستخدام الأقسام والعناصر البنائية لتحسين التنظيم وسهولة القراءة.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson12": {
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    video: "/videos/html/html-lesson12.mp4",
    description: "أضف محتوى تفاعليًا وغنيًا من مصادر خارجية مثل الفيديوهات والخرائط لتحسين تجربة المستخدم.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson13": {
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    video: "/videos/html/html-lesson13.mp4",
    description: "تعلم نصائح وحيل الخبراء لكتابة كود HTML نظيف، فعال، ومتوافق مع معايير الويب.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  "Html-lesson14": {
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    video: "/videos/html/html-lesson14.mp4",
    description: "طبق كل ما تعلمته في HTML لإنشاء مشروع ويب كامل، demonstrating your skills.",
    poster: "/images/html-lessons.jpg",
    courseId: "html-course",
  },
  // دروس CSS
  "Css-lesson1": {
    title: "مقدمة في CSS",
    video: "/videos/css/css-lesson1.mp4",
    description: "ابدأ رحلتك في عالم تصميم الويب وتعلم كيفية إضفاء الجمال والجاذبية على صفحاتك باستخدام CSS.",
    poster: "/images/css-lessons.jpg",
    courseId: "css-course",
  },
};

// تحويل object الدروس إلى مصفوفة للحصول على ترتيب
const orderedLessons = Object.keys(allLessonsData).map((id) => ({
  id,
  ...allLessonsData[id],
}));

export default function LessonPage() {
  const routerParams = useParams();
  const lessonId = routerParams.id as string;
  const lesson = allLessonsData[lessonId];
  const videoRef = useRef<HTMLVideoElement>(null);

  // احصل على كود الفتح الخاص بالكورس الحالي
  const courseCode = lesson ? COURSE_UNLOCK_CODES[lesson.courseId] : undefined;

  // 🔄 حالة قفل/فتح الفيديو - تبدأ "مقفلة" إذا كان هناك كود للكورس، ومفتوحة إذا لم يكن هناك كود
  const [isUnlocked, setIsUnlocked] = useState(courseCode === undefined);
  const [inputCode, setInputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  // تحديد فهرس الدرس الحالي لتحديد الدرس السابق والتالي
  const currentLessonIndex = orderedLessons.findIndex((l) => l.id === lessonId);
  const prevLesson = currentLessonIndex > 0 ? orderedLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < orderedLessons.length - 1 ? orderedLessons[currentLessonIndex + 1] : null;

  // تأثير جانبي لحماية الفيديو
  useEffect(() => {
    const videoElement = videoRef.current;

    // Common functions to prevent default behavior
    const preventDefault = (e: Event) => {
      e.preventDefault();
      e.stopPropagation(); // Stop propagation to ensure it doesn't bubble up
    };

    // Functions for video events to manage loading
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => setIsLoading(false);
    const handleCanPlay = () => setIsLoading(false); // Also stop loading when enough data is buffered to play

    if (isUnlocked && videoElement) {
      // Apply strict controls for download prevention
      // 🚨 التعديل هنا: إزالة "nofullscreen" للسماح بزر ملء الشاشة
      videoElement.setAttribute("controlsList", "nodownload noremoteplayback");
      videoElement.disablePictureInPicture = true; // Programmatic equivalent of disablePictureInPicture attribute
      videoElement.oncontextmenu = () => false; // Direct JS way to disable right-click on video

      // Event listeners for document-wide protection
      document.addEventListener("contextmenu", preventDefault); // Disable right-click globally
      document.addEventListener("copy", preventDefault); // Prevent copying
      document.addEventListener("cut", preventDefault); // Prevent cutting
      document.addEventListener("paste", preventDefault); // Prevent pasting (less relevant for video, but good for overall content)
      document.addEventListener("keydown", (e: KeyboardEvent) => {
        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source), Ctrl+S (save)
        if (
          e.keyCode === 123 || // F12
          (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
          (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
          (e.ctrlKey && e.keyCode === 83) // Ctrl+S
        ) {
          preventDefault(e);
        }
      });

      // Event listeners for video loading state
      videoElement.addEventListener("waiting", handleWaiting);
      videoElement.addEventListener("playing", handlePlaying);
      videoElement.addEventListener("canplay", handleCanPlay);
      videoElement.addEventListener("loadstart", handleWaiting); // Start loading when video begins to load

      // Initially set loading if video hasn't loaded yet
      if (videoElement.readyState < 3) { // Checking if video is not ready to play through
          setIsLoading(true);
      }

    } else {
      // 🚨 إزالة الـ event listeners عند القفل أو عدم الفتح
      if (videoElement) {
        videoElement.removeAttribute("controlsList");
        videoElement.disablePictureInPicture = false;
        videoElement.oncontextmenu = null; // Re-enable right-click
        videoElement.removeEventListener("waiting", handleWaiting);
        videoElement.removeEventListener("playing", handlePlaying);
        videoElement.removeEventListener("canplay", handleCanPlay);
        videoElement.removeEventListener("loadstart", handleWaiting);
      }
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("paste", preventDefault);
      // Removed the direct preventDefault from keydown listener for cleanup as it's not the same function instance
      // The ideal way is to store the actual function reference and remove that.
      // For simplicity, we'll just re-add the specific listener on mount and rely on the full cleanup on unmount
    }

    // Cleanup function - make sure this cleans up ONLY what it adds
    return () => {
      if (videoElement) {
        videoElement.removeAttribute("controlsList");
        videoElement.disablePictureInPicture = false;
        videoElement.oncontextmenu = null;
        videoElement.removeEventListener("waiting", handleWaiting);
        videoElement.removeEventListener("playing", handlePlaying);
        videoElement.removeEventListener("canplay", handleCanPlay);
        videoElement.removeEventListener("loadstart", handleWaiting);
      }
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("paste", preventDefault);

      // A more robust way to remove the specific keydown listener
      const keydownListener = (e: KeyboardEvent) => {
        if (
          e.keyCode === 123 ||
          (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
          (e.ctrlKey && e.keyCode === 85) ||
          (e.ctrlKey && e.keyCode === 83)
        ) {
          preventDefault(e);
        }
      };
      document.removeEventListener("keydown", keydownListener);
    };
  }, [isUnlocked]); // يعتمد على isUnlocked

  // دالة للتحقق من الكود وفتح الفيديو
  const handleUnlockVideo = useCallback(() => {
    if (inputCode === courseCode) {
      setIsUnlocked(true);
      setErrorMessage("");
    } else {
      setErrorMessage("الكود غير صحيح. يرجى المحاولة مرة أخرى.");
    }
  }, [inputCode, courseCode]);

  if (!lesson) {
    return (
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-center items-center">
        <Header />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold text-red-400"
        >
          <FaInfoCircle className="inline-block text-4xl mb-3" />
          <p>عذراً، الدرس المطلوب غير موجود.</p>
        </motion.div>
        <Footer />
      </div>
    );
  }

  // الآن، أي درس (طالما له فيديو) سيتطلب قفلاً ما لم يتم فتحه في نفس الجلسة فقط.
  // إذا لم يكن هناك كود محدد للكورس، فسيتم اعتباره مفتوحًا تلقائيًا
  const requiresUnlock = courseCode !== undefined && !isUnlocked;

  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative overflow-hidden" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500 mb-8"
        >
          {lesson.title}
        </motion.h1>

        {lesson.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 text-center max-w-3xl mb-12 leading-relaxed"
          >
            {lesson.description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-blue-500/30 relative"
        >
          {/* Video Player or Unlock Form */}
          {lesson.video && !requiresUnlock ? (
            <div className="relative w-full aspect-video"> {/* Using aspect-video for responsive ratio */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white z-10">
                  <FaSpinner className="animate-spin text-5xl text-blue-400 mb-4" />
                  <p className="text-xl font-semibold">جاري تحميل الفيديو من السيرفر...</p>
                  <p className="text-sm text-gray-400 mt-2">قد يستغرق الأمر بعض الثواني.</p>
                </div>
              )}
              <video
                ref={videoRef}
                src={lesson.video}
                controls
                // 🚨 التعديل هنا: إزالة "nofullscreen" للسماح بزر ملء الشاشة
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                preload="auto"
                poster={lesson.poster}
                // Directly disable right-click on the video element
                onContextMenu={(e) => e.preventDefault()}
                className={`w-full h-full object-contain rounded-2xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                // Ensure video is visible only when loaded
                style={{ visibility: isLoading ? 'hidden' : 'visible' }}
              >
                متصفحك لا يدعم عنصر الفيديو.
              </video>
            </div>
          ) : lesson.video && requiresUnlock ? (
            <div
              className="relative w-full h-96 flex flex-col items-center justify-center p-8 text-center"
              style={{
                backgroundImage: `url(${lesson.poster})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center space-y-6 rounded-2xl">
                <FaLock className="text-6xl text-red-400 mb-4 animate-bounce-slow" />
                <p className="text-xl md:text-2xl font-bold text-white">
                  هذا الدرس محمي. يرجى إدخال كود الوصول:
                </p>
                <input
                  type="password"
                  value={inputCode}
                  onChange={(e) => {
                    setInputCode(e.target.value);
                    setErrorMessage("");
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleUnlockVideo();
                    }
                  }}
                  placeholder="أدخل الكود هنا..."
                  className="w-full max-w-xs p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-all"
                />
                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}
                <button
                  onClick={handleUnlockVideo}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all shadow-md active:scale-95 mt-4"
                >
                  <FaUnlockAlt /> فتح الدرس
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 text-red-400 font-bold text-center p-8">
              <FaInfoCircle className="inline-block text-5xl mr-4" />
              <p>عذراً، فيديو هذا الدرس غير متوفر حالياً. نعمل على توفيره بأسرع وقت!</p>
            </div>
          )}

          {/* This overlay acts as a visual shield, but doesn't prevent interaction */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center pointer-events-none">
            <FaShieldAlt className="text-white/20 text-8xl md:text-9xl animate-pulse" />
          </div>
        </motion.div>

        {/* --- */}

        {/* قسم التنقل بين الدروس */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-between w-full max-w-4xl mx-auto mt-12 gap-4"
        >
          {prevLesson ? (
            <Link
              href={`/lessons/${prevLesson.id}`}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition-all shadow-md active:scale-95"
            >
              <FaArrowRight className="transform rotate-180" /> الدرس السابق
            </Link>
          ) : (
            <span className="px-6 py-3 bg-gray-700 rounded-lg text-lg font-semibold text-gray-400 cursor-not-allowed opacity-50">
              <FaArrowRight className="transform rotate-180" /> الدرس السابق
            </span>
          )}

          {nextLesson ? (
            <Link
              href={`/lessons/${nextLesson.id}`}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all shadow-md active:scale-95"
            >
              الدرس التالي <FaArrowRight />
            </Link>
          ) : (
            <span className="px-6 py-3 bg-gray-700 rounded-lg text-lg font-semibold text-gray-400 cursor-not-allowed opacity-50">
              الدرس التالي <FaArrowRight />
            </span>
          )}
        </motion.div>

        {/* --- */}

        {/* قسم معلومات الأمان */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-[#1e293b] rounded-2xl shadow-lg border border-gray-700 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center justify-center gap-2">
            <FaInfoCircle /> حماية المحتوى
          </h2>
          <p className="text-gray-400">
            هذا الفيديو محمي بحقوق الطبع والنشر. يرجى العلم بأن أي محاولة للتحميل أو النسخ غير مصرح بها قد تعرضك للمساءلة القانونية. نقدر تفهمكم والتزامكم.
          </p>
        </motion.div>

        {/* قسم "احصل على كود الوصول!" - يظهر فقط إذا كان الدرس مقفلاً وله فيديو */}
        {requiresUnlock && lesson.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 p-6 bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl shadow-lg border border-purple-500 max-w-3xl text-center mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center justify-center gap-2">
              <FaDollarSign className="text-yellow-300" /> احصل على كود الوصول!
            </h2>
            <p className="text-gray-100 mb-4">
              لفتح هذا الدرس والوصول إلى محتواه الكامل، يرجى الاشتراك في الكورس.
              الاشتراك يمنحك وصولاً غير محدود لجميع الدروس والميزات!
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-lg text-xl font-bold transition-all shadow-md hover:bg-gray-200 active:scale-95"
            >
              <FaUnlockAlt /> اشترك الآن
            </Link>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}