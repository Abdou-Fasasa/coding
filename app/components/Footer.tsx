"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaFacebookF, // Changed to FaFacebookF for a cleaner look
  FaWhatsapp,
  FaTelegramPlane, // Changed to FaTelegramPlane for a cleaner look
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt, // New icon for address/location if applicable
  FaPhone, // New icon for phone if applicable
} from "react-icons/fa";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effect to show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) { // Show button after scrolling 400px for a slightly larger page
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-[#111827] to-[#0a0f18] border-t border-purple-600/30 py-10 text-gray-400 relative overflow-hidden" // Increased padding, darker gradient end
    >
      {/* Subtle background overlay for texture */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-start text-right relative z-10">
        {/* Section 1: Brand & Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-4">
          <Link href="/" className="text-3xl font-extrabold text-white">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Coding
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-300">
            منصة تعليمية متكاملة لتبسيط علوم الحاسوب والبرمجة للمبتدئين،
            بأسلوب عصري وعملي يفتح آفاقاً جديدة للمستقبل الرقمي.
          </p>
          <p className="text-xs mt-4 text-gray-500">
            © {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-4">
          <h3 className="text-xl font-bold text-yellow-300 border-b-2 border-yellow-500/50 pb-2 mb-2 w-fit">
            روابط سريعة
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="flex items-center gap-3 text-white hover:text-pink-400 transition-colors duration-200 text-base"
              >
                <FaHome className="text-lg" /> الرئيسية
              </Link>
            </li>
            <li>
              <Link
                href="/lessons"
                className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors duration-200 text-base"
              >
                <FaGraduationCap className="text-lg" /> الدروس
              </Link>
            </li>
            <li>
              <Link
                href="/language"
                className="flex items-center gap-3 text-white hover:text-yellow-400 transition-colors duration-200 text-base"
              >
                <FaLaptopCode className="text-lg" /> المنهج الحالي
              </Link>
            </li>
            <li>
              <Link
                href="/developer"
                className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors duration-200 text-base"
              >
                <FaUserTie className="text-lg" /> المطور
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info (Placeholder for more details) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-4">
          <h3 className="text-xl font-bold text-green-300 border-b-2 border-green-500/50 pb-2 mb-2 w-fit">
            معلومات الاتصال
          </h3>
          <ul className="space-y-2 text-base">
            {/* Example: Add real contact details if available */}
            {/* <li>
              <a href="tel:+201128606959" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <FaPhone className="text-lg text-green-400" /> +20 112 860 6959
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 hover:text-white transition-colors duration-200">
                <FaMapMarkerAlt className="text-lg text-red-400" /> القاهرة، مصر
              </a>
            </li> */}
            <li>
              <a
                href="mailto:abdelrahmanabdelsalam@gmail.com"
                className="flex items-center gap-3 hover:text-pink-400 transition-colors duration-200"
              >
                <FaEnvelope className="text-lg text-pink-400" /> Coding@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Social Media Icons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right space-y-4">
          <h3 className="text-xl font-bold text-cyan-300 border-b-2 border-cyan-500/50 pb-2 mb-2 w-fit">
            تابعنا
          </h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-5 text-3xl">
            <li>
              <a
                href="https://www.facebook.com/Prof.AbdouCEH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-transform duration-200 transform hover:scale-110"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/201128606959"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-500 transition-transform duration-200 transform hover:scale-110"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/prof_abdou1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-500 transition-transform duration-200 transform hover:scale-110"
                title="Telegram"
              >
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/prof_abdou200?igsh=MXdkOWdyeXdsdXhseg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition-transform duration-200 transform hover:scale-110"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg text-2xl z-40 transition-all duration-200 transform hover:scale-110 active:scale-95"
            title="العودة لأعلى الصفحة"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
