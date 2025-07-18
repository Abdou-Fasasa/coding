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
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false); // State for info dropdown
  const pathname = usePathname();
  const infoDropdownRef = useRef<HTMLDivElement>(null); // Ref for click outside

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (infoDropdownRef.current && !infoDropdownRef.current.contains(event.target as Node)) {
        setInfoDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoDropdownRef]);

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

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.2 } },
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
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-lg shadow-blue-900/10 border-b border-blue-900/20"
    >
      <div className="w-full px-4 sm:px-6 py-3 flex items-center justify-between max-w-7xl mx-auto"> {/* Reduced py-4 to py-3 */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text tracking-tight" // Adjusted text size
            onClick={() => setMenuOpen(false)}
          >
            Coding
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 text-base font-semibold"> {/* Reduced space-x-4 to space-x-3 and text-lg to text-base */}
          <Link
            href="/"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/")
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
                  : "hover:bg-white/10 hover:text-blue-300 transform hover:scale-105"
              }`}
          >
            <FaHome className="text-lg" /> <span className="mr-1">الرئيسية</span> {/* Adjusted icon size */}
          </Link>

          <Link
            href="/lessons"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300 ${
              isActiveLink("/lessons")
                ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg scale-105"
                : "hover:bg-white/10 hover:text-purple-300 transform hover:scale-105"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <FaGraduationCap className="text-lg" /> <span className="mr-1">الكورسات</span>
          </Link>

          <Link
            href="/language"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/language")
                  ? "bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-lg scale-105"
                  : "hover:bg-white/10 hover:text-yellow-300 transform hover:scale-105"
              }`}
          >
            <FaLaptopCode className="text-lg" /> <span className="mr-1">اللغة</span>
          </Link>

          {/* Desktop Information Dropdown - now clickable */}
          <div className="relative" ref={infoDropdownRef}>
            <button
              onClick={() => setInfoDropdownOpen(!infoDropdownOpen)}
              className={`flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
                ${
                  isActiveLink("/faq") || isActiveLink("/developer") || isActiveLink("/apply-test") || infoDropdownOpen
                    ? "bg-gradient-to-r from-cyan-600 to-cyan-800 text-white shadow-lg scale-105"
                    : "hover:bg-white/10 hover:text-cyan-300 transform hover:scale-105"
                }`}
            >
              <FaQuestionCircle className="text-lg" /> <span className="mr-1">معلومات</span>
            </button>
            <AnimatePresence>
              {infoDropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full mt-2 right-0 w-56 bg-[#1e293b] border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <Link
                    href="/faq"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                    onClick={() => { setMenuOpen(false); setInfoDropdownOpen(false); }}
                  >
                    <FaInfoCircle className="text-lg text-cyan-400" /> الأسئلة الشائعة
                  </Link>
                  <Link
                    href="/developer"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200 border-b border-gray-700/50"
                    onClick={() => { setMenuOpen(false); setInfoDropdownOpen(false); }}
                  >
                    <FaUserTie className="text-lg text-orange-400" /> المطور
                  </Link>
                  <Link
                    href="/apply-test"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => { setMenuOpen(false); setInfoDropdownOpen(false); }}
                  >
                    <FaFileAlt className="text-lg text-blue-400" /> تقديم لاختبار
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/subscribe"
            className={`group relative flex items-center gap-2 text-white px-3 py-2 rounded-full transition-all duration-300
              ${
                isActiveLink("/subscribe")
                  ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg scale-105"
                  : "hover:bg-white/10 hover:text-green-300 transform hover:scale-105"
              }`}
          >
            <FaMoneyBillWave className="text-lg" /> <span className="mr-1">الاشتراك</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200" // Adjusted size
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
            className="md:hidden bg-[#0f172a]/90 text-white px-6 py-4 space-y-2 text-lg font-medium border-t border-gray-700/50 overflow-hidden"
          >
            <motion.div variants={menuItemVariants}>
              <Link
                href="/"
                className="flex items-center gap-3 hover:text-pink-400 py-2"
                onClick={() => setMenuOpen(false)}
              >
                <FaHome className="text-xl" />الرئيسية
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