"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/utils/auth'; // ✅ تم إعادة استيراد هذا الملف

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for internal navigation
import { FaEye, FaEyeSlash, FaWhatsapp, FaSignInAlt, FaUserPlus, FaCrown, FaGift } from 'react-icons/fa';

declare global {
  interface Window {
    Tone?: typeof import('tone');
  }
}

const loadToneJs = (): Promise<typeof import('tone')> => {
  return new Promise((resolve, reject) => {
    if (window.Tone) {
      resolve(window.Tone);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js';
    script.onload = () => resolve(window.Tone as typeof import('tone'));
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // ✅ تم إزالة تعريف قائمة المستخدمين هنا، وسيتم استيرادها من '@/utils/auth'

  const successSynthRef = useRef<import('tone').PolySynth | null>(null);
  const errorSynthRef = useRef<import('tone').PolySynth | null>(null);
  const clickSynthRef = useRef<import('tone').MembraneSynth | null>(null);
  const messageSynthRef = useRef<import('tone').Synth | null>(null);

  useEffect(() => {
    const initTone = async () => {
      try {
        const Tone = await loadToneJs();
        await Tone.start();

        successSynthRef.current = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'sine' },
          envelope: { attack: 0.02, decay: 0.1, sustain: 0.1, release: 0.2 },
        }).toDestination();

        errorSynthRef.current = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'sawtooth' },
          envelope: { attack: 0.01, decay: 0.2, sustain: 0.05, release: 0.3 },
        }).toDestination();

        clickSynthRef.current = new Tone.MembraneSynth().toDestination();

        messageSynthRef.current = new Tone.Synth({
          oscillator: { type: 'triangle' },
          envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.15 },
        }).toDestination();
      } catch (e) {
        console.error('Tone.js failed to load:', e);
      }
    };

    initTone();

    return () => {
      successSynthRef.current?.dispose();
      errorSynthRef.current?.dispose();
      clickSynthRef.current?.dispose();
      messageSynthRef.current?.dispose();
    };
  }, []);

  const playSuccessSound = () => successSynthRef.current?.triggerAttackRelease(['C5', 'E5', 'G5'], '8n');
  const playErrorSound = () => errorSynthRef.current?.triggerAttackRelease(['C3', 'B2'], '8n');
  const playClickSound = () => clickSynthRef.current?.triggerAttackRelease('C2', '16n');
  const playMessageSound = () => messageSynthRef.current?.triggerAttackRelease('G4', '32n');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playClickSound();
    setError('');

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('⚠️ من فضلك أدخل اسم المستخدم وكلمة السر.');
      playMessageSound();
      return;
    }

    if (/\s/.test(trimmedUsername) || /\s/.test(trimmedPassword)) {
      setError('⚠️ من فضلك لا تستخدم مسافات داخل اسم المستخدم أو كلمة السر.');
      playMessageSound();
      return;
    }

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === trimmedUsername.toLowerCase() &&
        u.password === trimmedPassword
    );

    if (user) {
      // Set the cookie with a max-age for persistence
      document.cookie = 'loggedIn=true; path=/; max-age=' + (60 * 60 * 24 * 7); // 7 days
      playSuccessSound();
      router.push('/subscribe'); // Redirect to subscribe page
    } else {
      setError('❌ اسم المستخدم أو كلمة السر غير صحيحة.');
      playErrorSound();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Discount Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-md bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 font-bold text-center py-4 px-6 rounded-t-2xl shadow-xl mb-0 relative z-10"
        dir="rtl"
      >
        <p className="text-lg flex items-center justify-center gap-2">
          <FaGift className="text-2xl" />
          <span>عروض حصرية! خصومات كبرى على جميع الكورسات.</span>
        </p>
        {/* Changed button back to Link for direct navigation */}
        <Link
          href="/subscribe"
          className="block mt-2 text-sm text-blue-800 hover:text-blue-900 underline font-semibold transition-colors"
          onClick={playClickSound}
        >
          اغتنم الفرصة الآن! وسجل دخول
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-lg rounded-b-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white relative z-10"
        dir="rtl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <Image src="/images/Logo.jpg" alt="شعار المنصة" width={100} height={100} className="rounded-full shadow-lg border-2 border-indigo-400" />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-6"
          >
            <FaCrown className="inline-block text-sm mr-1" /> VIP Premium
          </motion.div>
        </motion.div>

        <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
        >
          Coding
        </motion.h1>
        <motion.p className="text-center text-gray-300 text-lg"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
        >
          أدخل بياناتك لتسجيل الدخول
        </motion.p>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <motion.input
            type="text" placeholder="اسم المستخدم" value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
          />

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}
          >
            <input
              type={showPassword ? 'text' : 'password'} placeholder="كلمة السر" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none pr-12"
            />
            <button
              type="button" onClick={() => { playClickSound(); setShowPassword(!showPassword); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-indigo-300"
            >
              {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
            </button>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaSignInAlt className="text-xl" /> دخول
          </motion.button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p className="text-red-400 text-center font-semibold mt-4"
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.p
          className="text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
        >
          ليس لديك حساب؟{" "}
          <a href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center justify-center gap-1 mt-2"
            onClick={playClickSound}
          >
            <FaUserPlus /> تواصل مع المطور للتسجيل
          </a>
        </motion.p>
      </motion.div>

      <motion.a
        href="https://wa.me/201128606959" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-xl z-20"
        title="التواصل مع المطور عبر واتساب" onClick={playClickSound}
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }} whileHover={{ scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}
