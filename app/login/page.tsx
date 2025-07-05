'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/utils/auth';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/intro.mp3');
    audioRef.current.volume = 0.3;
    audioRef.current.play();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (/\s/.test(trimmedUsername) || /\s/.test(trimmedPassword)) {
      setError('⚠️ من فضلك لا تستخدم مسافات داخل اسم المستخدم أو كلمة السر');
      return;
    }

    const user = users.find(
      (u) =>
        u.username.toLowerCase() === trimmedUsername.toLowerCase() &&
        u.password === trimmedPassword
    );

    if (user) {
      document.cookie = 'loggedIn=true; path=/';
      router.push('/');
    } else {
      setError('❌ اسم المستخدم أو كلمة السر غلط');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 py-10 relative overflow-hidden">
      {/* خلفية حية مثل فيديو */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40"
        src="/videos/space-loop.mp4"
        autoPlay
        loop
        muted
      />

      {/* الفورم */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white"
      >
        {/* لوجو */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="شعار المنصة"
            width={90}
            height={90}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-3xl sm:text-4xl font-extrabold text-center"
        >
          Coding
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-300"
        >
          أدخل بياناتك لتسجيل الدخول
        </motion.p>

        <motion.form
          onSubmit={handleLogin}
          className="space-y-4 sm:space-y-5"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {/* اسم المستخدم */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </motion.div>

          {/* كلمة السر */}
          <motion.div
            className="relative"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </motion.div>

          {/* زر الدخول */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              دخول
            </button>
          </motion.div>
        </motion.form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center font-semibold mt-2"
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      {/* واتساب */}
      <a
        href="https://wa.me/201128606959"
        target="_blank"
        className="fixed bottom-5 left-5 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform"
        title="التواصل مع المطور"
      >
        💬
      </a>
    </div>
  );
}
