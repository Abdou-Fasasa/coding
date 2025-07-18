"use client";

import Link from "next/link";
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaBars,
  FaTimes,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaFileAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/lessons" && pathname.startsWith("/lessons")) return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      // Updated header style: subtle gradient, stronger shadow, refined backdrop
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0d131f]/85 to-[#1a2333]/85 backdrop-blur-xl shadow-2xl shadow-blue-900/30 border-b border-blue-900/40"
    >
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            Coding
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-lg font-semibold">
          <Link
            href="/"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/")
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
                  : "hover:bg-blue-800/50 hover:text-blue-300 transform hover:scale-105"
              }`}
          >
            <FaHome className="text-xl" /> <span className="mr-1">الصفحة الرئيسية</span>
          </Link>

          {/* الكورسات - Now a direct link */}
          <Link
            href="/lessons"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300 ${
              isActiveLink("/lessons")
                ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg scale-105"
                : "hover:bg-purple-800/50 hover:text-purple-300 transform hover:scale-105"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <FaGraduationCap className="text-xl" /> <span className="mr-1">الكورسات</span>
          </Link>

          <Link
            href="/language"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/language")
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-lg scale-105"
                  : "hover:bg-yellow-800/50 hover:text-yellow-300 transform hover:scale-105"
              }`}
          >
            <FaLaptopCode className="text-xl" /> <span className="mr-1">اللغة</span>
          </Link>

          {/* Dropdown: معلومات (kept as dropdown for utility links) */}
          <div className="relative group">
            <button
              className={`flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
                ${
                  isActiveLink("/faq") || isActiveLink("/developer") || isActiveLink("/apply-test")
                    ? "bg-gradient-to-r from-cyan-600 to-cyan-800 text-white shadow-lg scale-105"
                    : "hover:bg-cyan-800/50 hover:text-cyan-300 transform hover:scale-105"
                }`}
            >
              <FaQuestionCircle className="text-xl" /> <span className="mr-1">معلومات</span>
            </button>
            <div className="absolute top-full mt-2 right-0 w-56 bg-[#1e293b] border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <Link
                href="/faq"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaInfoCircle className="text-lg text-cyan-400" /> الأسئلة الشائعة
              </Link>
              <Link
                href="/developer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaUserTie className="text-lg text-orange-400" /> المطور
              </Link>
              <Link
                href="/apply-test"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <FaFileAlt className="text-lg text-blue-400" /> تقديم لاختبار
              </Link>
            </div>
          </div>

          <Link
            href="/subscribe"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/subscribe")
                  ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg scale-105"
                  : "hover:bg-green-800/50 hover:text-green-300 transform hover:scale-105"
              }`}
          >
            <FaMoneyBillWave className="text-xl" /> <span className="mr-1">الاشتراك</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-[#0f172a] text-white px-6 py-4 space-y-2 text-lg font-medium border-t border-gray-700/50 overflow-hidden"
          >
            <motion.div variants={menuItemVariants}>
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-pink-400 py-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaHome className="text-xl" /> الصفحة الرئيسية
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                href="/lessons"
                className="flex items-center gap-3 hover:text-purple-400 py-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaGraduationCap className="text-xl" /> الكورسات
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                href="/language"
                className="flex items-center gap-3 hover:text-yellow-400 py-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaLaptopCode className="text-xl" /> اللغة
              </Link>
            </motion.div>

            {/* Mobile Dropdown for معلومات */}
            <motion.div variants={menuItemVariants} className="border-t border-gray-800 pt-2 mt-2">
              <h3 className="text-gray-400 text-sm mb-1">معلومات:</h3>
              <Link
                href="/developer"
                className="flex items-center gap-3 hover:text-cyan-400 py-1.5 pr-4"
                onClick={() => setMenuOpen(false)}
              >
                <FaUserTie className="text-xl" /> المطور
              </Link>
              <Link
                href="/faq"
                className="flex items-center gap-3 hover:text-orange-400 py-1.5 pr-4"
                onClick={() => setMenuOpen(false)}
              >
                <FaQuestionCircle className="text-xl" /> الأسئلة الشائعة
              </Link>
              <Link
                href="/apply-test"
                className="flex items-center gap-3 hover:text-blue-400 py-1.5 pr-4"
                onClick={() => setMenuOpen(false)}
              >
                <FaFileAlt className="text-xl" /> تقديم لاختبار
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link
                href="/subscribe"
                className="flex items-center gap-3 hover:text-green-400 py-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaMoneyBillWave className="text-xl" /> الاشتراك
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}