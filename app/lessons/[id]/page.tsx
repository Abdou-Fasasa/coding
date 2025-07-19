"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import { FaShieldAlt, FaInfoCircle, FaArrowRight, FaSpinner, FaLock, FaUnlockAlt, FaDollarSign } from "react-icons/fa";
import Link from "next/link";

// استيراد أكواد الفتح وبيانات الدروس من الملف الخارجي
import {
  COURSE_UNLOCK_CODES,
  allLessonsData,
} from "@/app/data/lessons"; // تأكد من أن المسار صحيح هنا

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

  // تحديد ما إذا كان الدرس يتطلب كودًا أم لا
  const requiresUnlock = lesson && lesson.courseId !== "programming-fundamentals-course";

  // حالة فتح الدرس: افتراضيًا مفتوح إذا كان من كورس أساسيات البرمجة، وإلا فمغلق دائمًا
  const [isUnlocked, setIsUnlocked] = useState(!requiresUnlock);
  const [inputCode, setInputCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  // دالة لفتح الفيديو
  const handleUnlockVideo = useCallback(() => {
    if (lesson && COURSE_UNLOCK_CODES[lesson.courseId] === inputCode) {
      setIsUnlocked(true);
      setErrorMessage("");
      // تم إزالة localStorage.setItem هنا
    } else {
      setErrorMessage("الكود غير صحيح. يرجى المحاولة مرة أخرى.");
    }
  }, [inputCode, lesson]);

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

    if (videoElement && isUnlocked) { // طبق الحماية فقط إذا كان الفيديو مفتوحًا
      // Apply strict controls for download prevention
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
      // Remove global event listeners
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("paste", preventDefault);
      document.removeEventListener("keydown", keydownListener);
    };
  }, [isUnlocked]); // يعتمد الآن على isUnlocked

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
  {/* عنوان الدرس */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500 mb-8"
  >
    {lesson.title}
  </motion.h1>

  {/* ✅ صندوق الفيديو داخل div لتوسيطه رأسيًا */}
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-blue-500/30 relative"
    >
      {/* Video Player or Unlock Screen */}
      {isUnlocked ? (
        lesson.video ? (
          <div className="relative w-full aspect-video">
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
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              preload="auto"
              onContextMenu={(e) => e.preventDefault()}
              className={`w-full h-full object-contain rounded-2xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{ visibility: isLoading ? 'hidden' : 'visible' }}
            >
              متصفحك لا يدعم عنصر الفيديو.
            </video>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96 text-red-400 font-bold text-center p-8">
            <FaInfoCircle className="inline-block text-5xl mr-4" />
            <p>عذراً، فيديو هذا الدرس غير متوفر حالياً. نعمل على توفيره بأسرع وقت!</p>
          </div>
        )
      ) : (
        // Unlock screen for paid courses
        <div className="relative w-full aspect-video flex flex-col items-center justify-center p-6 text-center">
          {lesson.poster && (
            <img
              src={lesson.poster}
              alt="Lesson locked"
              className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
            />
          )}
          <div className="relative z-10 bg-black/70 p-8 rounded-2xl shadow-xl border border-blue-600/50 backdrop-blur-sm">
            <FaLock className="text-blue-400 text-6xl mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">الدرس مقفل!</h2>
            <p className="text-gray-300 mb-6">
              هذا الدرس جزء من كورس مدفوع. يرجى إدخال كود الوصول لفتح المحتوى.
            </p>
            <input
              type="password"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="أدخل كود الوصول هنا"
              className="w-full p-3 mb-4 text-lg rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
            />
            {errorMessage && (
              <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
            )}
            <button
              onClick={handleUnlockVideo}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 w-full"
            >
              <FaUnlockAlt /> فتح الدرس
            </button>
          </div>
        </div>
      )}

      {/* درع شفاف متحرك */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center pointer-events-none">
        <FaShieldAlt className="text-white/20 text-8xl md:text-9xl animate-pulse" />
      </div>
    </motion.div>
  </div>

  {/* ✅ التنقل بين الدروس */}
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

  {/* ✅ معلومات الأمان */}
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

  {/* ✅ كود الوصول (للدورات المدفوعة فقط) */}
  {requiresUnlock && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="mt-12 p-6 bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-2xl shadow-lg border border-purple-600/50 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-2xl font-bold text-pink-300 mb-3 flex items-center justify-center gap-2">
        <FaDollarSign className="text-green-400" /> احصل على كود الوصول!
      </h2>
      <p className="text-gray-300 mb-4">
        للوصول إلى هذا الكورس، يرجى التواصل معنا للحصول على كود الفتح.
      </p>
      <p className="text-lg text-white font-semibold">
        تواصل معنا عبر:
      </p>
      <ul className="text-lg text-blue-300 mt-2 space-y-1">
        <li><Link href="mailto:coding.hub@yandex.com" className="hover:underline">info@coding.com</Link></li>
        <li><Link href="https://wa.me/+201128606959" className="hover:underline" target="_blank">WhatsApp</Link></li>
      </ul>
    </motion.div>
  )}
</main>


      <Footer />
    </div>
  );
}