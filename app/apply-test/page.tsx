// app/apply-test/page.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaUser, FaIdCard, FaBook, FaEdit, FaCheckCircle, FaRocket, FaPaperPlane, FaSpinner, FaEnvelope, FaChevronDown } from 'react-icons/fa';

export default function ApplyTestPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(''); // New state for email
  const [nationalId, setNationalId] = useState('');
  const [courseCompleted, setCourseCompleted] = useState('');
  const [courseFeedback, setCourseFeedback] = useState('');
  const [isReadyForTest, setIsReadyForTest] = useState(false);
  const [whyWorkNow, setWhyWorkNow] = useState('');
  const [formMessage, setFormMessage] = useState({ type: '', text: '' }); // 'success' or 'error'
  const [isLoading, setIsLoading] = useState(false);

  const availableCourses = [
    { value: '', label: 'اختر الكورس الذي أتممته' },
    { value: 'web_track', label: 'تراك الويب المتكامل - Web Track' },
    { value: 'front_end', label: 'كورس Front-End منفصل' },
    { value: 'back_end', label: 'كورس Back-End منفصل' },
    { value: 'cyber_security', label: 'كورس الأمن السيبراني - Cyber Security' },
    // يمكنك إضافة المزيد من الكورسات هنا
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage({ type: '', text: '' });
    setIsLoading(true);

    // Basic validation for all required fields
    if (!fullName || !email || !nationalId || !courseCompleted || !courseFeedback || !whyWorkNow) {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك املأ جميع الحقول المطلوبة.' });
      setIsLoading(false);
      return;
    }
    if (!isReadyForTest) {
      setFormMessage({ type: 'error', text: '⚠️ يجب أن تؤكد أنك جاهز للاختبارات.' });
      setIsLoading(false);
      return;
    }

    // Email format validation (simple regex)
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormMessage({ type: 'error', text: '⚠️ من فضلك أدخل بريد إلكتروني صحيح.' });
      setIsLoading(false);
      return;
    }

    // Generate a simple request ID (for display purposes only)
    const requestId = Math.random().toString(36).substring(2, 10).toUpperCase();

    const formData = {
      fullName,
      email,
      nationalId,
      courseCompletedLabel: availableCourses.find(c => c.value === courseCompleted)?.label || courseCompleted, // Send the label, not just the value
      courseFeedback,
      isReadyForTest,
      whyWorkNow,
      requestId, // Include generated ID
    };

    try {
      const response = await fetch('/api/telegram', { // Sending to our new API Route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormMessage({
          type: 'success',
          text: `✅ تم إرسال طلبك بنجاح! رقم الطلب هو: ${requestId}، واسم المتقدم: ${fullName}. يرجى الاحتفاظ برقم الطلب.`
        });
        // Clear form fields
        setFullName('');
        setEmail('');
        setNationalId('');
        setCourseCompleted('');
        setCourseFeedback('');
        setIsReadyForTest(false);
        setWhyWorkNow('');
      } else {
        const errorData = await response.json();
        setFormMessage({ type: 'error', text: `❌ حدث خطأ أثناء إرسال الطلب: ${errorData.message || 'خطأ غير معروف.'}` });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormMessage({ type: 'error', text: '❌ حدث خطأ في الاتصال بالخادم. حاول مرة أخرى.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Cinematic Blobs and Stars - Consistent with FAQ */}
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

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto space-y-12 relative z-10" dir="rtl">
        {/* Main Title - Application */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 leading-tight drop-shadow-lg [text-shadow:_0_0_20px_var(--tw-shadow-color)] shadow-green-400/50"
        >
          <FaRocket className="inline-block text-3xl sm:text-4xl align-middle mb-1 ml-3" />
          طلب تقديم لاختبار التأهيل
          <span className="block text-xl sm:text-2xl font-medium text-gray-300 mt-2">انطلق نحو مسيرتك المهنية مع ProCodeHub</span>
        </motion.h1>

        {/* Application Form Container - Glassmorphism style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(100,255,100,0.1)] rounded-3xl p-6 sm:p-10 space-y-8"
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
                placeholder="أدخل اسمك الكامل هنا..."
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
                placeholder="أدخل بريدك الإلكتروني هنا..."
                disabled={isLoading}
                required
              />
            </motion.div>

            {/* National ID */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <label htmlFor="nationalId" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaIdCard className="text-green-400" /> الرقم القومي
              </label>
              <input
                type="text"
                id="nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 text-lg"
                placeholder="أدخل رقمك القومي (14 رقم)"
                disabled={isLoading}
                required
              />
            </motion.div>

            {/* Course Completed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <label htmlFor="courseCompleted" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaBook className="text-purple-400" /> الكورس الذي أتممته
              </label>
              <div className="relative">
                <select
                  id="courseCompleted"
                  value={courseCompleted}
                  onChange={(e) => setCourseCompleted(e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-lg custom-select"
                  disabled={isLoading}
                  required
                >
                  {availableCourses.map((course) => (
                    <option key={course.value} value={course.value} className="bg-[#121B31] text-white">
                      {course.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-400">
                  <FaChevronDown className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            {/* Course Feedback */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <label htmlFor="courseFeedback" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaEdit className="text-yellow-400" /> تقييمك للمنهج والكورس
              </label>
              <textarea
                id="courseFeedback"
                value={courseFeedback}
                onChange={(e) => setCourseFeedback(e.target.value)}
                rows={5}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 text-lg resize-y"
                placeholder="شاركنا رأيك في المنهج، ما أعجبك وما يمكن تحسينه..."
                disabled={isLoading}
                required
              ></textarea>
            </motion.div>

            {/* Ready for Test Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 shadow-inner"
            >
              <label htmlFor="isReadyForTest" className="text-gray-300 text-lg font-medium flex items-center gap-2 cursor-pointer flex-grow">
                <FaCheckCircle className="text-teal-400" /> هل أنت جاهز للاختبارات؟
              </label>
              <div
                className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isReadyForTest ? 'bg-teal-500' : 'bg-gray-600'}`}
                onClick={() => !isLoading && setIsReadyForTest(!isReadyForTest)}
              >
                <input
                  type="checkbox"
                  id="isReadyForTest"
                  checked={isReadyForTest}
                  onChange={() => {}} // Controlled by onClick on parent div
                  className="sr-only"
                  disabled={isLoading}
                />
                <motion.div
                  className="bg-white w-6 h-6 rounded-full shadow-md transform"
                  initial={false}
                  animate={{ x: isReadyForTest ? 'calc(100% + 8px)' : '0px' }}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
              </div>
            </motion.div>

            {/* Why Work Now */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="relative"
            >
              <label htmlFor="whyWorkNow" className="block text-gray-300 text-lg font-medium mb-2 flex items-center gap-2">
                <FaRocket className="text-orange-400" /> لماذا تريد دخول سوق العمل حالياً؟
              </label>
              <textarea
                id="whyWorkNow"
                value={whyWorkNow}
                onChange={(e) => setWhyWorkNow(e.target.value)}
                rows={5}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-lg resize-y"
                placeholder="شاركنا دوافعك وأهدافك من دخول سوق العمل الآن..."
                disabled={isLoading}
                required
              ></textarea>
            </motion.div>

            {/* Form Message (Success/Error) */}
            <AnimatePresence>
              {formMessage.text && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`text-center font-semibold text-lg mt-4 p-3 rounded-lg ${
                    formMessage.type === 'success' ? 'bg-green-600/20 text-green-300 border border-green-500' : 'bg-red-600/20 text-red-300 border border-red-500'
                  }`}
                >
                  {formMessage.text}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed glow-on-hover"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin text-2xl" /> جاري الإرسال...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-2xl" /> إرسال طلب التقديم
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}