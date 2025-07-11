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
  FaSignOutAlt,
  FaFileAlt,
  FaInfoCircle,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaWifi,
  FaGem,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // أنيميشن محسّن لقائمة الموبايل
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring" as const, // <-- Fix applied here
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
        type: "spring" as const, // <-- Fix applied here
        stiffness: 150,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // أنيميشن لعناصر القائمة داخل قائمة الموبايل
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

  const handleLogout = () => {
    document.cookie = "loggedIn=; path=/; max-age=0";
    router.push("/login");
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
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
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/") ? "bg-white/10 text-pink-400 shadow-inner" : "hover:text-pink-400"}`}
          >
            <FaHome className="text-xl" /> الصفحة الرئيسية
          </Link>

          {/* دروس Dropdown */}
          <div className="relative group">
            <Link
              href="/lessons"
              className={`flex items-center gap-1 text-white py-1 px-2 rounded-lg transition-colors duration-200 ${
                isActiveLink("/lessons") ? "bg-white/10 text-purple-400 shadow-inner" : "hover:text-purple-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              <FaGraduationCap className="text-xl" />
              الكورسات
            </Link>

            <div className="absolute top-full mt-2 right-0 w-64 bg-[#1e293b] border border-gray-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaCode className="text-lg text-blue-400" /> Front-End
              </Link>
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaServer className="text-lg text-green-400" /> Back-End
              </Link>
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaShieldAlt className="text-lg text-red-400" /> الأمن السيبراني
              </Link>
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-700/50"
                onClick={() => setMenuOpen(false)}
              >
                <FaWifi className="text-lg text-yellow-400" /> اختراق السوشيال ميديا
              </Link>
              <Link
                href="/lessons"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                <FaGem className="text-lg text-purple-400" /> تراك VIP Premium
              </Link>
            </div>
          </div>

          <Link
            href="/language"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/language") ? "bg-white/10 text-yellow-400 shadow-inner" : "hover:text-yellow-400"}`}
          >
            <FaLaptopCode className="text-xl" /> اللغة
          </Link>

          {/* Dropdown: معلومات */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-white py-1 px-2 rounded-lg hover:text-blue-400 transition-colors duration-200"
            >
              <FaQuestionCircle className="text-xl" />
              معلومات
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
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/subscribe") ? "bg-white/10 text-green-400 shadow-inner" : "hover:text-green-400"}`}
          >
            <FaMoneyBillWave className="text-xl" /> الأسعار
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg shadow-md transition-all duration-200 hover:scale-110"
            title="تسجيل خروج"
          >
            <FaSignOutAlt />
          </button>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
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
              <Link href="/" className="flex items-center gap-3 hover:text-pink-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaHome className="text-xl" /> الصفحة الرئيسية
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/lessons" className="flex items-center gap-3 hover:text-purple-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaGraduationCap className="text-xl" /> الكورسات
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/language" className="flex items-center gap-3 hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaLaptopCode className="text-xl" /> اللغة
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/developer" className="flex items-center gap-3 hover:text-cyan-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaUserTie className="text-xl" /> المطور
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/faq" className="flex items-center gap-3 hover:text-orange-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaQuestionCircle className="text-xl" /> الأسئلة الشائعة
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/apply-test" className="flex items-center gap-3 hover:text-blue-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaFileAlt className="text-xl" /> تقديم لاختبار
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <Link href="/subscribe" className="flex items-center gap-3 hover:text-green-400 py-2" onClick={() => setMenuOpen(false)}>
                <FaMoneyBillWave className="text-xl" /> الأسعار
              </Link>
            </motion.div>

            <motion.div variants={menuItemVariants}>
              <button
                onClick={handleLogout}
                className="flex items-center justify-end gap-3 text-red-400 hover:text-red-300 transition-colors duration-200 py-2 w-full"
              >
                <FaSignOutAlt className="text-xl" /> تسجيل خروج
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}