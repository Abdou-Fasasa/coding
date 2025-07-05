'use client';

import { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-white"
      >
        {/* شعار المنصة */}
        <div className="flex justify-center">
          <Image
            src="/images/Logo.jpg"
            alt="شعار المنصة"
            width={90}
            height={90}
            className="rounded-full shadow-md"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">Coding</h1>
        <p className="text-center text-gray-300">أدخل بياناتك لتسجيل الدخول</p>

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          <input
            type="text"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-white/20 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />

          <div className="relative">
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
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            دخول
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-center font-semibold mt-2">{error}</p>
        )}
      </motion.div>

      {/* زر واتساب */}
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
