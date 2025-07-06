'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/utils/auth'; // Assuming this path is correct for user data
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import Image from 'next/image';
import Link from 'next/link'; // Keep Link for potential future use or if you want to link to a different page later
import { FaEye, FaEyeSlash, FaWhatsapp, FaSignInAlt, FaUserPlus, FaCrown } from 'react-icons/fa'; // Added FaCrown for VIP

// Extend the Window interface to include Tone
declare global {
  interface Window {
    Tone?: any;
  }
}

// Dynamically load Tone.js (important for web audio within React)
const loadToneJs = () => {
  return new Promise((resolve, reject) => {
    if (window.Tone) {
      resolve(window.Tone);
      return;
    }
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js";
    script.onload = () => resolve(window.Tone);
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

  // Refs for Tone.js synths
  const successSynthRef = useRef<any>(null);
  const errorSynthRef = useRef<any>(null);
  const clickSynthRef = useRef<any>(null);
  const messageSynthRef = useRef<any>(null); // New synth for general messages/errors

  // Initialize Tone.js synths on component mount
  useEffect(() => {
    const initTone = async () => {
      try {
        const Tone: any = await loadToneJs();
        if (Tone) {
          // Start Tone.js audio context (required for playback)
          await Tone.start();
          console.log("Tone.js audio context started.");

          // Success sound: simple ascending chime
          successSynthRef.current = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "sine" },
            envelope: { attack: 0.02, decay: 0.1, sustain: 0.1, release: 0.2 }
          }).toDestination();

          // Error sound: short, slightly dissonant tone
          errorSynthRef.current = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "sawtooth" },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0.05, release: 0.3 }
          }).toDestination();

          // Click sound: short, percussive
          clickSynthRef.current = new Tone.MembraneSynth().toDestination();

          // General message/validation error sound: softer, quick tone
          messageSynthRef.current = new Tone.Synth({
            oscillator: { type: "triangle" },
            envelope: { attack: 0.01, decay: 0.1, sustain: 0.05, release: 0.15 }
          }).toDestination();
        }
      } catch (e) {
        console.error("Failed to load or initialize Tone.js:", e);
      }
    };

    initTone();

    // Cleanup synths on unmount
    return () => {
      if (successSynthRef.current) successSynthRef.current.dispose();
      if (errorSynthRef.current) errorSynthRef.current.dispose();
      if (clickSynthRef.current) clickSynthRef.current.dispose();
      if (messageSynthRef.current) messageSynthRef.current.dispose();
    };
  }, []);

  // Functions to play sounds
  const playSuccessSound = () => {
    if (successSynthRef.current) {
      successSynthRef.current.triggerAttackRelease(["C5", "E5", "G5"], "8n");
    }
  };

  const playErrorSound = () => {
    if (errorSynthRef.current) {
      errorSynthRef.current.triggerAttackRelease(["C3", "B2"], "8n");
    }
  };

  const playClickSound = () => {
    if (clickSynthRef.current) {
      clickSynthRef.current.triggerAttackRelease("C2", "16n");
    }
  };

  const playMessageSound = () => { // New function for general messages
    if (messageSynthRef.current) {
      messageSynthRef.current.triggerAttackRelease("G4", "32n");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound(); // Play click sound on form submission attempt
    setError(''); // Clear previous errors

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === '' || trimmedPassword === '') {
      setError('⚠️ من فضلك أدخل اسم المستخدم وكلمة السر.');
      playMessageSound(); // Play message sound for validation error
      return;
    }

    if (/\s/.test(trimmedUsername) || /\s/.test(trimmedPassword)) {
      setError('⚠️ من فضلك لا تستخدم مسافات داخل اسم المستخدم أو كلمة السر.');
      playMessageSound(); // Play message sound for validation error
      return;
    }

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === trimmedUsername.toLowerCase() &&
        u.password === trimmedPassword
    );

    if (user) {
      document.cookie = 'loggedIn=true; path=/';
      playSuccessSound();
      router.push('/');
    } else {
      setError('❌ اسم المستخدم أو كلمة السر غير صحيحة.');
      playErrorSound(); // Play distinct error sound for incorrect credentials
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white relative z-10"
      >
        {/* Platform Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center relative"
        >
          <Image
            src="/images/Logo.jpg"
            alt="شعار المنصة"
            width={100}
            height={100}
            className="rounded-full shadow-lg border-2 border-indigo-400"
          />
          {/* VIP Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 150 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-6"
          >
            <FaCrown className="inline-block text-sm mr-1" /> VIP Premium
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
        >
          Coding
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-300 text-lg"
        >
          أدخل بياناتك لتسجيل الدخول
        </motion.p>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300 shadow-inner"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative"
          >
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300 pr-12 shadow-inner"
            />
            <button
              type="button"
              onClick={() => { playClickSound(); setShowPassword(!showPassword); }} // Play sound on toggle
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-indigo-300 transition-colors duration-200"
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform active:scale-95 border border-transparent hover:border-white/30 flex items-center justify-center gap-2"
          >
            <FaSignInAlt className="text-xl" /> دخول
          </motion.button>
        </form>

        {/* Error message with AnimatePresence for smooth entry/exit */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-400 text-center font-semibold mt-4 text-sm sm:text-base"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* WhatsApp for Registration Link */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center text-gray-400 text-sm sm:text-base"
        >
          ليس لديك حساب؟{" "}
          <a
            href="https://wa.me/201128606959" // Direct link to WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound} // Play sound on WhatsApp link click
            className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center justify-center gap-1 mt-2"
          >
            <FaUserPlus /> تواصل مع المطور للتسجيل
          </a>
        </motion.p>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/201128606959"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 left-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-xl hover:shadow-2xl transition-all duration-300 z-20"
        title="التواصل مع المطور عبر واتساب"
        onClick={playClickSound} // Play sound on WhatsApp button click
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
}
