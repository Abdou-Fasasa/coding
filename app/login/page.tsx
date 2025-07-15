"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaEye,
  FaEyeSlash,
  FaWhatsapp,
  FaSignInAlt,
  FaUserPlus,
  FaCrown,
  FaGift,
  FaSpinner
} from 'react-icons/fa';

// **ملاحظة هامة**: هذه القائمة يجب أن يتم استبدالها بـ API call في الإنتاج
const users = [
  { username: 'Abdou', password: 'Abdou' },
  { username: 'Admin', password: 'Admin' },
  { username: 'Salah', password: 'Salah' },
];

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // تم إزالة setTimeout المتعمد هنا لجعل العملية فورية قدر الإمكان
    // await new Promise(resolve => setTimeout(resolve, 1000));

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('⚠️ من فضلك أدخل اسم المستخدم وكلمة السر.');
      setIsLoading(false);
      return;
    }

    if (/\s/.test(trimmedUsername) || /\s/.test(trimmedPassword)) {
      setError('⚠️ من فضلك لا تستخدم مسافات داخل اسم المستخدم أو كلمة السر.');
      setIsLoading(false);
      return;
    }

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === trimmedUsername.toLowerCase() &&
        u.password === trimmedPassword
    );

    if (user) {
      document.cookie = 'loggedIn=true; path=/';
      window.location.href = '/subscribe';
    } else {
      setError('❌ اسم المستخدم أو كلمة السر غير صحيحة.');
      setIsLoading(false);
    }
  };

  // Variants for initial animations - optimized for less work and smoother appearance
  const contentContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren", // Animate parent first, then children
        staggerChildren: 0.08 // Slightly faster stagger
      }
    }
  };

  const childItemVariants = {
    hidden: { opacity: 0, y: 15 }, // Less aggressive y for children
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } // Slightly faster duration
  };

  const whatsappButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* عناصر خلفية متوهجة (لخلق جمالية عصرية مع الحفاظ على الأداء) */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-[30%] right-[20%] w-56 h-56 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* العروض - Header section with updated style */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-gradient-to-r from-emerald-500 to-sky-600 text-gray-900 font-bold text-center py-4 px-6 rounded-t-2xl shadow-2xl relative z-10 transform skew-y-1 hover:skew-y-0 transition-transform duration-300"
        dir="rtl"
      >
        <p className="text-lg flex items-center justify-center gap-2 text-white drop-shadow-md">
          <FaGift className="text-2xl" />
          <span>عروض حصرية! خصومات كبرى على جميع الكورسات.</span>
        </p>
        <Link
          href="/subscribe"
          className="block mt-2 text-sm text-blue-900 hover:text-white underline font-semibold transition-colors drop-shadow-sm"
        >
          اغتنم الفرصة الآن! وسجل دخول
        </Link>
      </motion.div>

      {/* صندوق تسجيل الدخول - Main content container with enhanced glassmorphism */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentContainerVariants}
        className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-b-2xl shadow-3xl p-6 sm:p-8 space-y-6 text-white relative z-10"
        dir="rtl"
      >
        {/* الشعار */}
        <motion.div className="flex justify-center relative"
          variants={childItemVariants}
        >
          <Image
            src="/images/Logo.jpg"
            alt="شعار المنصة"
            width={120}
            height={120}
            priority
            className="rounded-full shadow-lg border-4 border-indigo-500 transform hover:scale-105 transition-transform duration-300"
          />
          <motion.div
            initial={{ opacity: 0, y: -10, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform"
          >
            <FaCrown className="inline-block text-sm mr-1" /> VIP PREMIUM
          </motion.div>
        </motion.div>

        <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
          variants={childItemVariants}>
          Coding
        </motion.h1>
        <motion.p className="text-center text-gray-200 text-lg"
          variants={childItemVariants}>
          أدخل بياناتك لتسجيل الدخول
        </motion.p>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <motion.input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
            disabled={isLoading}
            variants={childItemVariants}
          />

          <motion.div className="relative"
            variants={childItemVariants}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/15 placeholder-gray-300 text-white pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
              disabled={isLoading}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              disabled={isLoading}
            >
              {showPassword ? <FaEyeSlash className="w-6 h-6" /> : <FaEye className="w-6 h-6" />}
            </button>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
            disabled={isLoading}
            variants={childItemVariants}
          >
            {isLoading ? (
              <>
                <FaSpinner className="animate-spin text-xl" /> جاري التحقق...
              </>
            ) : (
              <>
                <FaSignInAlt className="text-xl" /> دخول
              </>
            )}
          </motion.button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p className="text-red-400 text-center font-semibold mt-4"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.p className="text-center text-gray-300 text-sm"
          variants={childItemVariants}>
          ليس لديك حساب؟{" "}
          <a href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
            className="text-indigo-400 hover:text-blue-300 font-semibold flex items-center justify-center gap-1 mt-2 transition-colors duration-200"
          >
            <FaUserPlus className="text-lg" /> تواصل مع المطور للتسجيل
          </a>
        </motion.p>
      </motion.div>

      {/* زر واتساب العائم */}
      <motion.a
        href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-xl z-20 hover:bg-green-600 transition-colors duration-200"
        title="التواصل مع المطور عبر واتساب"
        initial="hidden"
        animate="visible"
        variants={whatsappButtonVariants}
        whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </motion.a>

      {/* تعريف keyframes لـ animate-blob (يجب أن تكون في ملف CSS عام أو في style tag) */}
      <style jsx>{`
        @keyframes animate-blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: animate-blob 7s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}