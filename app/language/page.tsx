"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function LanguagePage() {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex flex-col justify-between">
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-14">
        {/* عنوان رئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400"
        >
          المنهج الحالي في Codeing
        </motion.h1>

        {/* وصف */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          حالياً بنشرح <span className="text-pink-400 font-bold">مقدمة في علوم الحاسوب</span>، وهنمشي بعدها بـ
          <span className="text-cyan-400 font-bold"> HTML</span> →
          <span className="text-blue-400 font-bold"> CSS</span> →
          <span className="text-yellow-400 font-bold"> JavaScript</span>… لحد أول مشروع ويب كامل مع بعض 🚀
        </motion.p>

        {/* كروت اللغات */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"
        >
          {/* Computer Science */}
          <Card
            title="مقدمة علوم الحاسوب"
            color="yellow"
            description="نفهم يعني إيه برمجة، كمبيوتر، بيانات، أوامر، كومبايلر، إنترپريتر... بلُغة بسيطة وسهلة."
            href="/language/computer-science"
          />

          {/* HTML */}
          <Card
            title="HTML"
            color="pink"
            description="نتعلم الهيكل الأساسي لأي موقع: العناوين، الفقرات، الصور، الروابط، والجداول."
            href="/language/html"
          />

          {/* CSS */}
          <Card
            title="CSS"
            color="blue"
            description="نلون، ننسق، نجمّل! 💅 هنتعلم ندي ستايل لكل جزء في الصفحة بخيالنا."
            href="/language/css"
          />

          {/* JavaScript */}
          <Card
            title="JavaScript"
            color="amber"
            description="نخلي الموقع يتفاعل! نبرمج الزراير، النماذج، الرسائل، وكل اللي بيحصل لما المستخدم يتفاعل."
            href="/language/javascript"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center text-sm text-gray-400 mt-10"
        >
          🚧 المنصة دايمًا بتتطور، وكل فترة بنضيف محتوى جديد ✨
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

type CardProps = {
  title: string;
  description: string;
  href: string;
  color: "yellow" | "pink" | "blue" | "amber";
};

function Card({ title, description, href, color }: CardProps) {
  const colors = {
    yellow: {
      border: "border-yellow-400/40",
      text: "text-yellow-300",
      bg: "bg-yellow-500 hover:bg-yellow-600",
    },
    pink: {
      border: "border-pink-400/40",
      text: "text-pink-400",
      bg: "bg-pink-500 hover:bg-pink-600",
    },
    blue: {
      border: "border-blue-400/40",
      text: "text-blue-400",
      bg: "bg-blue-500 hover:bg-blue-600",
    },
    amber: {
      border: "border-yellow-300/40",
      text: "text-yellow-300",
      bg: "bg-yellow-500 hover:bg-yellow-600",
    },
  };

  const { border, text, bg } = colors[color];

  return (
    <div
      className={`bg-[#1e293b] rounded-2xl p-6 shadow-xl border ${border} flex flex-col justify-between hover:scale-[1.03] transition-all duration-300`}
    >
      <div>
        <h2 className={`text-xl font-bold ${text} mb-2`}>{title}</h2>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
      </div>
      <Link
        href={href}
        className={`text-sm ${bg} text-white font-bold py-1.5 px-4 rounded-xl transition w-fit mx-auto`}
      >
        📚 فهرس
      </Link>
    </div>
  );
}
