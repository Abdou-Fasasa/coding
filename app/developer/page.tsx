"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaInstagram
} from "react-icons/fa";

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"
        >
          عن المطور
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 leading-loose"
        >
          👋 أنا <span className="font-bold text-white">عبدالرحمن</span>، مطور ومهتم بتعليم البرمجة للمبتدئين بطريقة
          <span className="text-pink-400 font-semibold"> سهلة وعصرية</span>.
          أنشأت منصة <span className="text-cyan-400 font-semibold">Codeing</span> علشان أوصل المعلومة لأي حد حابب يبدأ
          مشواره في البرمجة، بأسلوب <span className="text-purple-400 font-semibold">مبسط وعملي</span> 🚀.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-xl space-y-4 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-pink-400 mb-4">وسائل التواصل</h2>
          <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap gap-4 text-gray-300 text-lg">
  <a href="mailto:abdelrahmanabdelsalam@gmail.com" className="flex items-center gap-2 hover:text-pink-400 transition">
    <FaEnvelope /> Email
  </a>
  <a href="https://www.facebook.com/Prof.AbdouCEH" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaFacebook /> facebook
  </a>
  <a href="https://wa.me/201128606959" target="_blank" className="flex items-center gap-2 hover:text-green-400 transition">
    <FaWhatsapp /> WhatsApp
  </a>
  <a href="https://t.me/prof_abdou1" target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition">
    <FaTelegram /> Telegram
  </a>
  <a href="https://www.instagram.com/prof_abdou200?igsh=MXdkOWdyeXdsdXhseg==" target="_blank" className="flex items-center gap-2 hover:text-pink-500 transition">
    <FaInstagram /> Instagram
  </a>
</div>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
