"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBook, FaPaperPlane, FaSpinner, FaEnvelope, FaWhatsapp, FaChevronDown, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function CertificateRequestPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  // IMPORTANT SECURITY WARNING:
  // Placing BOT_TOKEN and CHAT_ID directly in frontend code is INSECURE.
  // Anyone inspecting your page's source code can see and misuse these credentials.
  // For production environments, always send data to a secure backend API route
  // which then forwards the message to Telegram using tokens stored securely on the server.
  const BOT_TOKEN = "7713008024:AAErsMj7qHoDFHMBGTSgzf8nzqvVW9qwlVI";
  const CHAT_ID = "1213902845";

  const availableCourses = [
    { value: '', label: 'اختر الكورس الذي أتممته' },
    { value: 'web_track', label: 'تراك الويب المتكامل - Web Track' },
    { value: 'front_end', label: 'كورس Front-End منفصل' },
    { value: 'back_end', label: 'كورس Back-End منفصل' },
    { value: 'cyber_security', label: 'كورس الأمن السيبراني - Cyber Security' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage({ type: '', text: '' });

    // Basic validation
    if (!fullName || !email || !course) {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك املأ جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، الكورس).' });
      setIsLoading(false);
      return;
    }
    if (course === '') {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك اختر الكورس الذي أتممته.' });
      setIsLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك أدخل بريد إلكتروني صحيح.' });
      setIsLoading(false);
      return;
    }
    if (whatsapp && !/^\+?[0-9]{7,15}$/.test(whatsapp)) {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك أدخل رقم واتساب صحيح (أرقام فقط).' });
      setIsLoading(false);
      return;
    }

    // Prepare message for Telegram
    const messageText = `
      *طلب شهادة جديد:*
      *الاسم الكامل:* \`${fullName}\`
      *البريد الإلكتروني:* \`${email}\`
      *رقم واتساب:* \`${whatsapp || 'لم يذكر'}\`
      *الكورس المطلوب شهادته:* \`${availableCourses.find((c) => c.value === course)?.label || course}\`
    `;

    const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: 'MarkdownV2', // Use MarkdownV2 for better formatting
        }),
      });

      if (response.ok) {
        setFormMessage({ type: 'success', text: `✅ تم إرسال طلب الشهادة بنجاح. سنتواصل معك قريباً.` });
        // Clear form fields on success
        setFullName('');
        setEmail('');
        setWhatsapp('');
        setCourse('');
      } else {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        setFormMessage({ type: 'error', text: `❌ حدث خطأ أثناء الإرسال: ${errorData.message || 'خطأ غير معروف.'}` });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setFormMessage({ type: 'error', text: '❌ تعذر الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت والمحاولة مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Cinematic Blobs and Stars - Consistent with other pages */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
          animate={{ scale: 1.2, opacity: 0.2, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: 0 }}
          animate={{ scale: 1.1, opacity: 0.15, rotate: -360 }}
          transition={{ duration: 25, delay: 5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.1, rotate: 180 }}
          transition={{ duration: 18, delay: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute top-1/4 right-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        ></motion.div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
          backgroundSize: '10px 10px, 20px 20px',
          animation: 'star-fade 30s infinite alternate'
        }}></div>
      </div>

      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-3xl mx-auto space-y-10 relative z-10" dir="rtl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 leading-tight drop-shadow-lg [text-shadow:_0_0_20px_var(--tw-shadow-color)] shadow-green-400/50"
        >
          <FaBook className="inline-block text-3xl sm:text-4xl align-middle mb-1 ml-3" />
          طلب شهادة إتمام الكورس
          <span className="block text-xl sm:text-2xl font-medium text-gray-300 mt-2">احصل على شهادتك من ProCodeHub</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 space-y-8 shadow-[0_0_40px_rgba(100,255,100,0.1)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <label htmlFor="fullName" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaUser className="text-blue-400" /> الاسم الكامل
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-lg"
                placeholder="اكتب اسمك بالكامل هنا..."
                disabled={isLoading}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaEnvelope className="text-pink-400" /> البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300 text-lg"
                placeholder="your@example.com"
                disabled={isLoading}
                required
              />
            </motion.div>

            {/* WhatsApp Number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <label htmlFor="whatsapp" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaWhatsapp className="text-green-400" /> رقم واتساب (اختياري)
              </label>
              <input
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-lg"
                placeholder="مثال: 01xxxxxxxx"
                disabled={isLoading}
              />
            </motion.div>

            {/* Course Selection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <label htmlFor="course" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaBook className="text-purple-400" /> الكورس الذي أتممته
              </label>
              <div className="relative">
                <select
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-lg custom-select"
                  disabled={isLoading}
                  required
                >
                  {availableCourses.map((c) => (
                    <option key={c.value} value={c.value} className="bg-[#121B31] text-white">
                      {c.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-400">
                  <FaChevronDown className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            {/* Form Message (Success/Error) */}
            <AnimatePresence>
              {formMessage.text && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`text-center font-semibold text-lg mt-4 p-3 rounded-lg flex items-center justify-center gap-2 ${
                    formMessage.type === 'success' ? 'bg-green-600/20 text-green-300 border border-green-500' : 'bg-red-600/20 text-red-300 border border-red-500'
                  }`}
                >
                  {formMessage.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  {formMessage.text}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white text-xl font-bold flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed glow-on-hover"
            >
              {isLoading ? <><FaSpinner className="animate-spin text-2xl" /> جاري الإرسال...</> : <><FaPaperPlane className="text-2xl" /> إرسال طلب الشهادة</>}
            </motion.button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
