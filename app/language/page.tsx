"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { easeInOut } from "framer-motion";

import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaptopCode,
  FaCheckCircle,
  FaHourglassHalf,
  FaLightbulb,
  FaPlayCircle, // New icon for "Launch Course" button
} from "react-icons/fa";

export default function LanguagePage() {
  return (
    <div className="bg-gradient-to-br from-[#0a111f] via-[#131b2e] to-[#0a111f] text-white min-h-screen flex flex-col justify-between relative overflow-hidden font-['Segoe_UI']">
      {/* Background Animated Blobs - Enhanced for smoother, more subtle effect */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.05, x: '-20%', y: '-20%' }}
        animate={{ scale: 1.2, opacity: 0.15, x: '20%', y: '20%' }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"
      ></motion.div>
      <motion.div
        initial={{ scale: 1.2, opacity: 0.05, x: '20%', y: '20%' }}
        animate={{ scale: 0.8, opacity: 0.15, x: '-20%', y: '-20%' }}
        transition={{ duration: 8, delay: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"
      ></motion.div>

      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative z-10" dir="rtl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 leading-tight drop-shadow-lg"
        >
          المنهج الدراسي في <span className="block mt-2 md:inline">Coding <span className="text-blue-300">📚</span></span>
        </motion.h1>

        {/* Description with Learning Path */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed p-6 bg-[#1e293b]/60 rounded-xl border border-gray-700/50 shadow-xl backdrop-blur-sm"
        >
          حالياً بنشرح <span className="text-yellow-300 font-bold">مقدمة في علوم الحاسوب</span>
          <span className="text-gray-400 mx-2">➡️</span>
          <span className="text-pink-400 font-bold"> HTML</span>
          <span className="text-gray-400 mx-2">➡️</span>
          <span className="text-blue-400 font-bold"> CSS</span>
          <span className="text-gray-400 mx-2">➡️</span>
          <span className="text-amber-400 font-bold"> JavaScript</span>
          ...
          <br className="sm:hidden" />
          <span className="block mt-3 text-lg text-white font-semibold">لحد أول مشروع ويب كامل مع بعض! 🚀</span>
        </motion.p>

        {/* Language Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, staggerChildren: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {/* Computer Science Card */}
          <Card
            title="مقدمة علوم الحاسوب"
            icon={FaLaptopCode}
            color="yellow"
            completed={true} // Marked as completed
            description="نفهم يعني إيه برمجة، كمبيوتر، بيانات، أوامر، كومبايلر، إنترپريتر... بلُغة بسيطة وسهلة."
            href="/lessons/Computer-science" // Link to the actual lesson page
          />

          {/* Programming Fundamentals Card - NEW */}
          <Card
            title="أساسيات البرمجة"
            icon={FaCode}
            color="green" // Using green for "free" and "in progress"
            completed={false}
            inProgress={true}
            isFree={true} // New prop for free course
            description="انطلق في عالم البرمجة من الصفر! تعلم المفاهيم الأساسية والأدوات اللازمة لبناء أولى برامجك."
            href="/lessons/prog-fund-1" // Link to the first lesson of programming fundamentals
          />

          {/* HTML Card */}
          <Card
            title="HTML"
            icon={FaHtml5}
            color="pink"
            completed={true} // Marked as completed
            description="نتعلم الهيكل الأساسي لأي موقع: العناوين، الفقرات، الصور، الروابط، والجداول."
            href="/lessons/Html-lesson3" // Link to the actual lesson page (e.g., first HTML lesson)
          />

          {/* CSS Card */}
          <Card
            title="CSS"
            icon={FaCss3Alt}
            color="blue"
            completed={false} // Not completed
            inProgress={true} // Marked as in progress
            description="نلون، ننسق، نجمّل! 💅 هنتعلم ندي ستايل لكل جزء في الصفحة بخيالنا."
            href="/lessons/Css-lesson1" // Link to the actual lesson page (e.g., first CSS lesson)
          />

          {/* JavaScript Card */}
          <Card
            title="JavaScript"
            icon={FaJs}
            color="amber"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="نخلي الموقع يتفاعل! نبرمج الزراير، النماذج، الرسائل، وكل اللي بيحصل لما المستخدم يتفاعل."
            href="#" // No active link yet
          />

          {/* Placeholder for Future Languages (e.g., Python, etc.) */}
          <Card
            title="Python"
            icon={FaCode} // Generic code icon
            color="purple" // Changed from green to purple to avoid conflict with Programming Fundamentals
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: انغمس في عالم البايثون، من الأساسيات إلى تطبيقات الذكاء الاصطناعي."
            href="#" // No active link yet
          />
          <Card
            title="React"
            icon={FaCode} // Generic code icon
            color="red" // Changed from purple to red
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: تعلم بناء واجهات مستخدم تفاعلية وقوية باستخدام React.js."
            href="#" // No active link yet
          />
          <Card
            title="Node.js"
            icon={FaCode} // Generic code icon
            color="sky" // Changed from red to sky
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: تعلم بناء تطبيقات الويب الخلفية سريعة وقابلة للتطوير باستخدام Node.js."
            href="#" // No active link yet
          />
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-center text-sm sm:text-base text-gray-400 mt-10 p-4 bg-[#1e293b]/60 rounded-xl border border-gray-700/50 shadow-inner backdrop-blur-sm"
        >
          🚧 المنصة دايمًا بتتطور، وكل فترة بنضيف محتوى جديد ومميز ✨ تابعونا!
        </motion.div>
      </main>

      <Footer />

      {/* Global CSS for custom animations (optional, can be moved to a global CSS file) */}
      <style jsx global>{`
        /* Define a subtle pulse for in-progress cards */
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.01);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

// --- Card Component ---
type CardProps = {
  title: string;
  description: string;
  href: string;
  color: "yellow" | "pink" | "blue" | "amber" | "green" | "purple" | "red" | "sky"; // Expanded colors
  completed?: boolean;
  comingSoon?: boolean; // New prop for coming soon
  inProgress?: boolean; // New prop for in progress
  isFree?: boolean; // New prop for free course
  icon: React.ElementType; // Icon component type
};

function Card({
  title,
  description,
  href,
  color,
  completed = false,
  comingSoon = false,
  inProgress = false,
  isFree = false, // Default to false
  icon: Icon
}: CardProps) {
  const colors = {
    yellow: {
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      gradient: "from-yellow-500 to-orange-500",
      darkGradient: "from-yellow-600 to-orange-600" // Darker gradient for button
    },
    pink: {
      border: "border-pink-400/40",
      text: "text-pink-400",
      gradient: "from-pink-500 to-rose-500",
      darkGradient: "from-pink-600 to-rose-600"
    },
    blue: {
      border: "border-blue-400/40",
      text: "text-blue-400",
      gradient: "from-blue-500 to-cyan-500",
      darkGradient: "from-blue-600 to-cyan-600"
    },
    amber: {
      border: "border-amber-400/40",
      text: "text-amber-400",
      gradient: "from-amber-500 to-yellow-600",
      darkGradient: "from-amber-600 to-yellow-700"
    },
    green: {
      border: "border-green-400/40",
      text: "text-green-400",
      gradient: "from-green-500 to-emerald-500",
      darkGradient: "from-green-600 to-emerald-600"
    },
    purple: {
      border: "border-purple-400/40",
      text: "text-purple-400",
      gradient: "from-purple-500 to-fuchsia-500",
      darkGradient: "from-purple-600 to-fuchsia-600"
    },
    red: {
      border: "border-red-400/40",
      text: "text-red-400",
      gradient: "from-red-500 to-rose-600",
      darkGradient: "from-red-600 to-rose-700"
    },
    sky: {
      border: "border-sky-400/40",
      text: "text-sky-400",
      gradient: "from-sky-500 to-blue-500",
      darkGradient: "from-sky-600 to-blue-600"
    },
  };

  const { border, text, gradient, darkGradient } = colors[color];

  const cardOpacity = comingSoon ? 'opacity-70' : '';
  const cardPointerEvents = comingSoon ? 'pointer-events-none' : '';
  const cardCursor = comingSoon ? 'cursor-not-allowed' : '';

  // Define glow style for hover effect
  const glowStyle: React.CSSProperties & { [key: string]: string } = {
    '--tw-shadow-color-rgb': `var(--${color}-500-rgb)`
  };

  return (
    <motion.div
      whileHover={{
        scale: (comingSoon || inProgress) ? 1.01 : 1.05,
        boxShadow: `0 0 30px -5px rgba(var(--${color}-500-rgb), 0.6), 0 0 10px rgba(var(--${color}-500-rgb), 0.3)`
      }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={`relative bg-[#1e293b] rounded-2xl p-6 shadow-xl border ${border} flex flex-col justify-between
        ${completed ? 'hover:border-green-500/60' : inProgress ? 'border-orange-500/60 animate-pulse-subtle' : comingSoon ? '' : 'hover:border-blue-500/60'}
        transform transition-all duration-300 ease-in-out ${cardOpacity} ${cardPointerEvents} ${cardCursor}
        hover:bg-gradient-to-br hover:${gradient} group`}
      style={glowStyle}
    >
      {completed && (
        <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg flex items-center gap-1">
          <FaCheckCircle className="text-sm" /> مُنجز
        </div>
      )}
      {inProgress && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg flex items-center gap-1">
          <FaHourglassHalf className="text-sm" /> قيد التقدم
        </div>
      )}
      {comingSoon && (
        <div className="absolute top-0 right-0 bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg flex items-center gap-1">
          <FaLightbulb className="text-sm" /> قريباً
        </div>
      )}
      {isFree && !completed && !inProgress && !comingSoon && ( // Show "Free" only if not completed, in progress, or coming soon
        <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs font-bold py-1 px-3 rounded-tl-2xl rounded-br-lg">
          مجاني 🎁
        </div>
      )}


      <div className="space-y-4">
        <h2 className={`text-2xl font-bold ${text} mb-2 flex items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-200`}>
          <Icon className={`text-3xl ${text} group-hover:rotate-6 transition-transform duration-200`} />
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed opacity-90">{description}</p>
      </div>

      <Link
        href={href}
        className={`mt-4 text-sm bg-gradient-to-r ${darkGradient} text-white font-bold py-3 px-6 rounded-xl transition w-fit mx-auto shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2
          ${comingSoon ? 'opacity-50 pointer-events-none cursor-not-allowed' : 'hover:scale-105 transform hover:-translate-y-1'}`} // Disabled state for link
        aria-disabled={comingSoon}
        tabIndex={comingSoon ? -1 : 0}
      >
        <FaPlayCircle className="text-xl" />
        انطلق في الكورس 🚀
      </Link>
    </motion.div>
  );
}