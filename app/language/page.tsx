"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { FaCheckCircle, FaCode, FaHtml5, FaCss3Alt, FaJs, FaLaptopCode, FaStar } from "react-icons/fa"; // Added more specific icons

export default function LanguagePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between relative overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
      ></motion.div>

      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 leading-tight"
        >
          المنهج الدراسي في <span className="block mt-2 md:inline">Coding 📚</span>
        </motion.h1>

        {/* Description with Learning Path */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-lg"
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
          <span className="block mt-3 text-lg text-white">لحد أول مشروع ويب كامل مع بعض! 🚀</span>
        </motion.p>

        {/* Language Cards Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {/* Computer Science Card */}
          <Card
            title="مقدمة علوم الحاسوب"
            icon={FaLaptopCode}
            color="yellow"
            completed={true} // Marked as completed
            description="نفهم يعني إيه برمجة، كمبيوتر، بيانات، أوامر، كومبايلر، إنترپريتر... بلُغة بسيطة وسهلة."
            href="/language/computer-science"
          />

          {/* HTML Card */}
          <Card
            title="HTML"
            icon={FaHtml5}
            color="pink"
            completed={true} // Marked as completed
            description="نتعلم الهيكل الأساسي لأي موقع: العناوين، الفقرات، الصور، الروابط، والجداول."
            href="/language/html"
          />

          {/* CSS Card */}
          <Card
            title="CSS"
            icon={FaCss3Alt}
            color="blue"
            completed={false} // Not completed
            inProgress={true} // Marked as in progress
            description="نلون، ننسق، نجمّل! 💅 هنتعلم ندي ستايل لكل جزء في الصفحة بخيالنا."
            href="/language/css"
          />

          {/* JavaScript Card */}
          <Card
            title="JavaScript"
            icon={FaJs}
            color="amber"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="نخلي الموقع يتفاعل! نبرمج الزراير، النماذج، الرسائل، وكل اللي بيحصل لما المستخدم يتفاعل."
            href="/language/javascript"
          />

          {/* Placeholder for Future Languages (e.g., Python, etc.) */}
          <Card
            title="Python"
            icon={FaCode} // Generic code icon
            color="green"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: انغمس في عالم البايثون، من الأساسيات إلى تطبيقات الذكاء الاصطناعي."
            href="#" // No active link yet
          />
           <Card
            title="React"
            icon={FaCode} // Generic code icon
            color="purple"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: تعلم بناء واجهات مستخدم تفاعلية وقوية باستخدام React.js."
            href="#" // No active link yet
          />
           <Card
            title="Node.js"
            icon={FaCode} // Generic code icon
            color="red"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: تعلم بناء تطبيقات الويب الخلفية سريعة وقابلة للتطوير باستخدام Node.js."
            href="#" // No active link yet
          />
           <Card
            title="SQL"
            icon={FaCode} // Generic code icon
            color="sky"
            completed={false}
            comingSoon={true} // Marked as coming soon
            description="قريباً: اتقن لغة الاستعلام الهيكلية لإدارة وتحليل قواعد البيانات."
            href="#" // No active link yet
          />
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-center text-sm sm:text-base text-gray-400 mt-10 p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-inner"
        >
          🚧 المنصة دايمًا بتتطور، وكل فترة بنضيف محتوى جديد ومميز ✨ تابعونا!
        </motion.div>
      </main>

      <Footer />
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
  icon: React.ElementType; // Icon component type
};

function Card({ title, description, href, color, completed = false, comingSoon = false, inProgress = false, icon: Icon }: CardProps) {
  const colors = {
    yellow: {
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      bg: "bg-yellow-500 hover:bg-yellow-600",
      glow: "shadow-yellow-500/30",
    },
    pink: {
      border: "border-pink-400/40",
      text: "text-pink-400",
      bg: "bg-pink-500 hover:bg-pink-600",
      glow: "shadow-pink-500/30",
    },
    blue: {
      border: "border-blue-400/40",
      text: "text-blue-400",
      bg: "bg-blue-500 hover:bg-blue-600",
      glow: "shadow-blue-500/30",
    },
    amber: {
      border: "border-amber-400/40",
      text: "text-amber-400",
      bg: "bg-amber-500 hover:bg-amber-600",
      glow: "shadow-amber-500/30",
    },
    green: {
      border: "border-green-400/40",
      text: "text-green-400",
      bg: "bg-green-500 hover:bg-green-600",
      glow: "shadow-green-500/30",
    },
    purple: {
      border: "border-purple-400/40",
      text: "text-purple-400",
      bg: "bg-purple-500 hover:bg-purple-600",
      glow: "shadow-purple-500/30",
    },
    red: {
      border: "border-red-400/40",
      text: "text-red-400",
      bg: "bg-red-500 hover:bg-red-600",
      glow: "shadow-red-500/30",
    },
    sky: {
      border: "border-sky-400/40",
      text: "text-sky-400",
      bg: "bg-sky-500 hover:bg-sky-600",
      glow: "shadow-sky-500/30",
    },
  };

  const { border, text, bg, glow } = colors[color];

  // Determine card opacity and interactivity based on status
  const cardOpacity = comingSoon ? 'opacity-70' : '';
  const cardPointerEvents = comingSoon ? 'pointer-events-none' : '';
  const cardCursor = comingSoon ? 'cursor-not-allowed' : '';
  const linkOpacity = comingSoon ? 'opacity-60' : '';
  const linkPointerEvents = comingSoon ? 'pointer-events-none' : '';

  return (
    <motion.div
      whileHover={{ scale: (comingSoon || inProgress) ? 1.01 : 1.05, boxShadow: `0 0 25px -5px var(--tw-shadow-color-rgb, rgba(var(--${color}-500-rgb), 0.5))` }} // Dynamic glow on hover, reduced scale for inProgress/comingSoon
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`relative bg-[#1e293b] rounded-2xl p-6 shadow-xl border ${border} flex flex-col justify-between
                  ${completed ? 'hover:border-green-500/60' : inProgress ? 'border-orange-500/60 animate-pulse-slow' : comingSoon ? '' : 'hover:border-blue-500/60'}
                  transform transition-all duration-300 ease-in-out ${cardOpacity} ${cardPointerEvents} ${cardCursor}`}
      style={{ ['--tw-shadow-color-rgb' as any]: `var(--${color}-500-rgb)` } as React.CSSProperties} // Custom property for dynamic glow
    >
      {/* Status Ribbon/Tag */}
      {completed && (
        <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg">
          مُنجز ✅
        </div>
      )}
      {inProgress && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg">
          قيد التقدم ⏳
        </div>
      )}
      {comingSoon && (
        <div className="absolute top-0 right-0 bg-gray-500 text-white text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg">
          قريباً ✨
        </div>
      )}

      <div className="space-y-4">
        <h2 className={`text-2xl font-bold ${text} mb-2 flex items-center justify-center gap-3`}>
          <Icon className={`text-3xl ${text}`} /> {/* Render dynamic icon */}
          {title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">{description}</p>
      </div>

      <Link
        href={href}
        className={`mt-4 text-sm ${bg} text-white font-bold py-2.5 px-6 rounded-xl transition w-fit mx-auto shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 ${linkOpacity} ${linkPointerEvents}`}
        aria-disabled={comingSoon} // Accessibility for disabled links
        tabIndex={comingSoon ? -1 : 0} // Make link not tabbable if coming soon
      >
        📚 فهرس
      </Link>
    </motion.div>
  );
}