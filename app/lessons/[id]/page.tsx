"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { FaShieldAlt, FaInfoCircle, FaArrowRight, FaLock, FaUnlockAlt, FaDollarSign } from "react-icons/fa"; // Added FaDollarSign for subscribe button
import Link from "next/link";

// بيانات الدروس (يجب أن تتطابق مع تلك الموجودة في LessonsPage لتسجيل الإكمال)
// ✅ تم إضافة حقل 'poster' لكل درس لتحديد الصورة المصغرة للفيديو
const allLessonsData: {
  [key: string]: { title: string; video: string; description: string; poster: string };
} = {
  // دروس علوم الحاسوب
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
    description: "انطلق في رحلتك البرمجية بفهم الأساسيات التي تحرك عالم التكنولوجيا. هذا الدرس يضع الأساس لجميع الدورات القادمة.",
    poster: "/images/Computer-science.jpg", // صورة مصغرة لهذا الفيديو
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
    description: "تعلم كيفية إعداد بيئة التطوير المثالية لبناء مشاريعك البرمجية بسهولة وفعالية.",
    poster: "/images/Work-environment.jpg", // صورة مصغرة لهذا الفيديو
  },
  // دروس HTML
  "Html-lesson3": {
    title: "بناء هيكل صفحة الويب (HTML)",
    video: "/videos/html-lesson3.mp4",
    description: "اكتشف أساسيات HTML وكيفية تنظيم المحتوى لإنشاء صفحات الويب المتكاملة.",
    poster: "/images/html-lessons.jpg", // صورة مصغرة لدروس HTML
  },
  "Html-lesson4": {
    title: "عناصر HTML ومكوناتها",
    video: "/videos/html-lesson4.mp4",
    description: "تفصيل شامل لأنواع عناصر HTML المختلفة وكيفية استخدامها لبناء صفحات غنية بالمحتوى.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson5": {
    title: "التعامل مع النصوص في HTML",
    video: "/videos/html-lesson5.mp4",
    description: "تعلم كيفية تنسيق وإدارة النصوص في HTML، من العناوين والفقرات إلى التنسيقات الخاصة.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson6": {
    title: "التعامل مع الروابط في HTML",
    video: "/videos/html-lesson6.mp4",
    description: "دليل شامل لإنشاء الروابط في HTML، وكيفية ربط الصفحات والموارد الخارجية بفعالية.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson7": {
    title: "التعامل مع الصور في HTML",
    video: "/videos/html-lesson7.mp4",
    description: "استكشف كيفية إضافة الصور إلى صفحات HTML وتحسينها للعرض على الويب.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson8": {
    title: "التعامل مع القوائم في HTML – Lists",
    video: "/videos/html-lesson8.mp4",
    description: "تعلم تنظيم المحتوى باستخدام القوائم المرتبة وغير المرتبة والقوائم الوصفية في HTML.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson9": {
    title: "الجداول في HTML – Tables",
    video: "/videos/html-lesson9.mp4",
    description: "استخدام الجداول في HTML لعرض البيانات المنظمة بشكل جذاب وواضح.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson10": {
    title: "النماذج في HTML – Forms",
    video: "/videos/html-lesson10.mp4",
    description: "دليل كامل لإنشاء نماذج HTML للتفاعل مع المستخدمين وجمع البيانات.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson11": {
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    video: "/videos/html-lesson11.mp4",
    description: "هيكل صفحات الويب الخاصة بك بشكل احترافي باستخدام الأقسام والعناصر البنائية لتحسين التنظيم وسهولة القراءة.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson12": {
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    video: "/videos/html-lesson12.mp4",
    description: "أضف محتوى تفاعليًا وغنيًا من مصادر خارجية مثل الفيديوهات والخرائط لتحسين تجربة المستخدم.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson13": {
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    video: "/videos/html-lesson13.mp4",
    description: "تعلم نصائح وحيل الخبراء لكتابة كود HTML نظيف، فعال، ومتوافق مع معايير الويب.",
    poster: "/images/html-lessons.jpg",
  },
  "Html-lesson14": {
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    video: "/videos/html-lesson14.mp4",
    description: "طبق كل ما تعلمته في HTML لإنشاء مشروع ويب كامل، demonstrating your skills.",
    poster: "/images/html-lessons.jpg",
  },
  // دروس CSS
  "Css-lesson1": {
    title: "مقدمة في CSS",
    video: "", // لا يوجد فيديو لهذا الدرس في البيانات الأصلية، لذا سيبقى فارغًا
    description: "ابدأ رحلتك في عالم تصميم الويب وتعلم كيفية إضفاء الجمال والجاذبية على صفحاتك باستخدام CSS.",
    poster: "/images/css-lessons.jpg", // صورة مصغرة لدروس CSS
  },
};

// تحويل object الدروس إلى مصفوفة للحصول على ترتيب
const orderedLessons = Object.keys(allLessonsData).map(id => ({
  id,
  ...allLessonsData[id]
}));

// ✅ الكود السري لفتح الفيديوهات
const VIDEO_UNLOCK_CODE = "VIPCODE2025"; // الكود السري لفتح الفيديوهات
// ✅ مفتاح Local Storage لتخزين حالة الفتح لكل درس
const LOCAL_STORAGE_UNLOCKED_PREFIX = "unlocked_lesson_"; // Prefix for local storage keys

export default function LessonPage() {
  const routerParams = useParams();
  const lessonId = routerParams.id as string;
  const lesson = allLessonsData[lessonId];
  const videoRef = useRef<HTMLVideoElement>(null); // Ref لعنصر الفيديو

  // ✅ حالة قفل/فتح الفيديو
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // تحديد فهرس الدرس الحالي لتحديد الدرس السابق والتالي
  const currentLessonIndex = orderedLessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentLessonIndex > 0 ? orderedLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < orderedLessons.length - 1 ? orderedLessons[currentLessonIndex + 1] : null;

  // دالة لتحديث Local Storage لوضع علامة "مكتمل"
  const updateCompletedLessons = useCallback((id: string) => {
    if (typeof window !== 'undefined') {
      try {
        const storedCompleted = localStorage.getItem('completedLessons');
        let completedSet = new Set<string>();

        if (storedCompleted) {
          completedSet = new Set(JSON.parse(storedCompleted));
        }

        if (!completedSet.has(id)) {
          completedSet.add(id);
          localStorage.setItem('completedLessons', JSON.stringify(Array.from(completedSet)));
          console.log(`Lesson "${id}" marked as completed in local storage.`);
        }
      } catch (e) {
        console.error("Failed to update completed lessons in local storage", e);
      }
    }
  }, []);

  // ✅ تحميل حالة الفتح من Local Storage عند تحميل المكون
  useEffect(() => {
    if (typeof window !== 'undefined' && lessonId) {
      const unlockedStatus = localStorage.getItem(`${LOCAL_STORAGE_UNLOCKED_PREFIX}${lessonId}`);
      if (unlockedStatus === "true") {
        setIsUnlocked(true);
      } else {
        setIsUnlocked(false); // Reset if not found or false
      }
    }
  }, [lessonId]);

  // عند تحميل المكون أو تغير lessonId، قم بتحديد الدرس كمكتمل
  useEffect(() => {
    // فقط قم بتحديد الدرس كمكتمل إذا كان مفتوحًا بالفعل
    if (lessonId && lesson && isUnlocked) {
      updateCompletedLessons(lessonId);
    }
  }, [lessonId, lesson, isUnlocked, updateCompletedLessons]); // إضافة isUnlocked كـ dependency

  // منع التحميل من جانب العميل (يتم تطبيقه فقط إذا كان الفيديو مفتوحًا)
  useEffect(() => {
    const videoElement = videoRef.current;

    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      // alert('التحميل أو النسخ غير مسموح به لحماية المحتوى.'); // Removed alert
    };

    const disableContextMenu = (e: Event) => {
      e.preventDefault();
    };

    const disableCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      // alert('النسخ غير مسموح به لحماية المحتوى.'); // Removed alert
    };

    const disableSave = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        // alert('حفظ الصفحة غير مسموح به لحماية المحتوى.'); // Removed alert
      }
    };

    if (isUnlocked && videoElement) {
      videoElement.setAttribute('controlsList', 'nodownload');
      videoElement.addEventListener('contextmenu', disableContextMenu);
      document.addEventListener('contextmenu', disableRightClick);
      document.addEventListener('copy', disableCopy);
      document.addEventListener('keydown', disableSave);
    } else {
      // Remove listeners if video is locked or not available
      if (videoElement) {
        videoElement.removeAttribute('controlsList'); // Remove nodownload if locked
        videoElement.removeEventListener('contextmenu', disableContextMenu);
      }
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('keydown', disableSave);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('contextmenu', disableContextMenu);
      }
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('copy', disableCopy);
      document.removeEventListener('keydown', disableSave);
    };
  }, [isUnlocked]); // Dependency on isUnlocked

  // ✅ دالة للتحقق من الكود وفتح الفيديو
  const handleUnlockVideo = () => {
    if (inputCode === VIDEO_UNLOCK_CODE) {
      setIsUnlocked(true);
      localStorage.setItem(`${LOCAL_STORAGE_UNLOCKED_PREFIX}${lessonId}`, "true");
      setErrorMessage("");
      updateCompletedLessons(lessonId); // Mark as completed upon successful unlock
    } else {
      setErrorMessage("الكود غير صحيح. يرجى المحاولة مرة أخرى.");
    }
  };

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
          className="w-full max-w-4xl bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-blue-500/30 relative" // إطار أنيق حول الفيديو
        >
          {lesson.video && isUnlocked ? ( // ✅ عرض الفيديو فقط إذا كان مفتوحًا
            <video
              ref={videoRef} // ربط الـref هنا
              src={lesson.video}
              controls
              controlsList="nodownload" // منع زر التنزيل
              disablePictureInPicture // منع وضع PiP
              preload="auto" // لتحسين تجربة التحميل
              poster={lesson.poster} // إضافة الصورة المصغرة هنا
              className="w-full h-auto max-h-[70vh] object-contain rounded-2xl" // object-contain للحفاظ على نسبة العرض للارتفاع بالكامل
            >
              متصفحك لا يدعم عنصر الفيديو.
            </video>
          ) : lesson.video && !isUnlocked ? ( // ✅ عرض شاشة القفل إذا كان الفيديو موجودًا ولكنه غير مفتوح
            <div
              className="relative w-full h-96 flex flex-col items-center justify-center p-8 text-center"
              style={{
                backgroundImage: `url(${lesson.poster})`, // استخدام الصورة المصغرة كخلفية
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center space-y-6 rounded-2xl">
                <FaLock className="text-6xl text-red-400 mb-4 animate-bounce-slow" />
                <p className="text-xl md:text-2xl font-bold text-white">
                  هذا الدرس محمي. يرجى إدخال كود الوصول:
                </p>
                <input
                  type="password" // نوع password لإخفاء المدخلات
                  value={inputCode}
                  onChange={(e) => {
                    setInputCode(e.target.value);
                    setErrorMessage(""); // Clear error on new input
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
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
          ) : ( // ✅ عرض رسالة "الفيديو غير متوفر" إذا لم يكن هناك مسار فيديو
            <div className="flex items-center justify-center h-96 text-red-400 font-bold text-center p-8">
              <FaInfoCircle className="inline-block text-5xl mr-4" />
              <p>عذراً، فيديو هذا الدرس غير متوفر حالياً. نعمل على توفيره بأسرع وقت!</p>
            </div>
          )}

          {/* تراكب بصري خفيف للتأكيد على الأمان (يظهر دائمًا) */}
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
          className="flex justify-between w-full max-w-4xl mt-12 gap-4"
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
          className="mt-12 p-6 bg-[#1e293b] rounded-2xl shadow-lg border border-gray-700 max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-yellow-300 mb-3 flex items-center justify-center gap-2">
            <FaInfoCircle /> حماية المحتوى
          </h2>
          <p className="text-gray-400">
            هذا الفيديو محمي بحقوق الطبع والنشر. يرجى العلم بأن أي محاولة للتحميل أو النسخ غير مصرح بها قد تعرضك للمساءلة القانونية. نقدر تفهمكم والتزامكم.
          </p>
        </motion.div>

        {/* ✅ New Section: Subscribe for Code */}
        {!isUnlocked && lesson.video && ( // Only show if video exists and is locked
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
