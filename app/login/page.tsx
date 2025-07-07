"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  FaSpinner // أيقونة التحميل
} from 'react-icons/fa';

// بيانات المستخدمين (يمكنك الاحتفاظ بها في '@/utils/auth' إذا أردت)
const users = [
  { username: 'Abdou', password: 'Abdou' },
  { username: 'Admin', password: 'Admin' },
  { username: 'Salah', password: 'Salah' },
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل

  // معالجة إرسال نموذج تسجيل الدخول
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // منع سلوك الإرسال الافتراضي
    setError(''); // مسح الأخطاء السابقة
    setIsLoading(true); // **تفعيل علامة التحميل**

    // محاكاة تأخير بسيط للشبكة (لإظهار علامة التحميل)
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // التحقق الأساسي: فحص الحقول الفارغة
    if (!trimmedUsername || !trimmedPassword) {
      setError('⚠️ من فضلك أدخل اسم المستخدم وكلمة السر.');
      setIsLoading(false); // **إلغاء علامة التحميل**
      return;
    }

    // التحقق الأساسي: فحص وجود مسافات داخل بيانات الاعتماد
    if (/\s/.test(trimmedUsername) || /\s/.test(trimmedPassword)) {
      setError('⚠️ من فضلك لا تستخدم مسافات داخل اسم المستخدم أو كلمة السر.');
      setIsLoading(false); // **إلغاء علامة التحميل**
      return;
    }

    // مصادقة المستخدم
    const user = users.find(
      (u) =>
        u.username.toLowerCase() === trimmedUsername.toLowerCase() &&
        u.password === trimmedPassword
    );

    if (user) {
      // **هام جداً**: تعيين كوكي 'loggedIn' ليكون كوكي جلسة فقط.
      // بدون 'max-age' أو 'expires' سيتم حذف الكوكي عند إغلاق المتصفح.
      document.cookie = 'loggedIn=true; path=/'; 

      // إعادة التوجيه لصفحة الاشتراكات
      router.replace('/subscribe'); 
      // لا حاجة لـ setIsLoading(false) هنا لأننا نغادر الصفحة
    } else {
      // إظهار خطأ لبيانات الاعتماد غير الصحيحة
      setError('❌ اسم المستخدم أو كلمة السر غير صحيحة.');
      setIsLoading(false); // **إلغاء علامة التحميل**
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center relative overflow-hidden p-4">

      {/* خلفية بسيطة بدلاً من الثلج المتحرك المعقد */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-400" />
      </div>

      {/* شعار العروض الحصرية في الأعلى */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900 font-bold text-center py-4 px-6 rounded-t-2xl shadow-xl relative z-10"
        dir="rtl"
      >
        <p className="text-lg flex items-center justify-center gap-2">
          <FaGift className="text-2xl" />
          <span>عروض حصرية! خصومات كبرى على جميع الكورسات.</span>
        </p>
        <Link
          href="/subscribe"
          className="block mt-2 text-sm text-blue-800 hover:text-blue-900 underline font-semibold transition-colors"
        >
          اغتنم الفرصة الآن! وسجل دخول
        </Link>
      </motion.div>

      {/* صندوق تسجيل الدخول الرئيسي */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-lg rounded-b-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white relative z-10"
        dir="rtl"
      >
        {/* قسم الشعار */}
        <motion.div className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <Image
            src="/images/Logo.jpg" // تأكد أن هذا المسار صحيح
            alt="شعار المنصة"
            width={100}
            height={100}
            className="rounded-full shadow-lg border-2 border-indigo-400"
          />
          {/* علامة VIP Premium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-6"
          >
            <FaCrown className="inline-block text-sm mr-1" /> VIP PREMIUM
          </motion.div>
        </motion.div>

        {/* اسم المنصة والشعار */}
        <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          Coding
        </motion.h1>
        <motion.p className="text-center text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          أدخل بياناتك لتسجيل الدخول
        </motion.p>

        {/* نموذج تسجيل الدخول */}
        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          {/* حقل اسم المستخدم */}
          <motion.input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            disabled={isLoading} // تعطيل الحقل أثناء التحميل
          />

          {/* حقل كلمة السر مع زر الإظهار/الإخفاء */}
          <motion.div className="relative"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              disabled={isLoading} // تعطيل الحقل أثناء التحميل
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-indigo-300 transition-colors duration-200"
              disabled={isLoading} // تعطيل الزر أثناء التحميل
            >
              {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
            </button>
          </motion.div>

          {/* زر تسجيل الدخول مع علامة التحميل */}
          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading} // **تعطيل الزر أثناء التحميل**
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

        {/* عرض رسالة الخطأ */}
        <AnimatePresence>
          {error && (
            <motion.p className="text-red-400 text-center font-semibold mt-4"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* رابط التسجيل / التواصل مع المطور */}
        <motion.p className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          ليس لديك حساب؟{" "}
          <a href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-1 mt-2 transition-colors duration-200"
          >
            <FaUserPlus /> تواصل مع المطور للتسجيل
          </a>
        </motion.p>
      </motion.div>

      {/* زر واتساب العائم لاختصار التواصل */}
      <motion.a
        href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-xl z-20 hover:bg-green-600"
        title="التواصل مع المطور عبر واتساب"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }} whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}
