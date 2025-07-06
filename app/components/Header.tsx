"use client";

import Link from "next/link";
import {
  FaHome,
  FaGraduationCap,
  FaLaptopCode,
  FaUserTie,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { easeIn, easeOut } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Animation states for the mobile menu (slide down/up)
  // We define the full state objects here, which will be directly used

  const mobileMenuStates = {
    hidden: { 
      opacity: 0, 
      y: -50, 
      transition: { duration: 0.2, ease: easeIn } 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: easeOut } 
    },
  };

  // Function to determine if a link is active
  const isActiveLink = (href: string) => {
    // Check if the current path starts with the link's href for nested routes
    if (href === "/" && pathname === "/") return true; // Exact match for home
    if (href !== "/" && pathname.startsWith(href)) return true; // Starts with href for others
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl border-b border-gray-700/50"
    >
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="origin-left"
        >
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text tracking-tight"
            onClick={() => setMenuOpen(false)} // Close menu if logo is clicked
          >
            Coding
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xl font-semibold">
          {/* Home Link */}
          <Link
            href="/"
            className={`group relative flex items-center gap-2 text-white transition-colors duration-200 py-2 px-3 rounded-lg
              ${isActiveLink("/") ? "bg-white/10 text-pink-400 shadow-inner" : "hover:text-pink-400"}
            `}
          >
            <FaHome /> الرئيسية
            {/* Active indicator without layoutId */}
            <AnimatePresence>
              {isActiveLink("/") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {/* Hover effect for non-active links */}
            {!isActiveLink("/") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Lessons Link */}
          <Link
            href="/lessons"
            className={`group relative flex items-center gap-2 text-white transition-colors duration-200 py-2 px-3 rounded-lg
              ${isActiveLink("/lessons") ? "bg-white/10 text-purple-400 shadow-inner" : "hover:text-purple-400"}
            `}
          >
            <FaGraduationCap /> الدروس
            <AnimatePresence>
              {isActiveLink("/lessons") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {!isActiveLink("/lessons") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Current Language/Course Link */}
          <Link
            href="/language"
            className={`group relative flex items-center gap-2 text-white transition-colors duration-200 py-2 px-3 rounded-lg
              ${isActiveLink("/language") ? "bg-white/10 text-yellow-400 shadow-inner" : "hover:text-yellow-400"}
            `}
          >
            <FaLaptopCode /> المنهج الحالي
            <AnimatePresence>
              {isActiveLink("/language") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {!isActiveLink("/language") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Developer Link */}
          <Link
            href="/developer"
            className={`group relative flex items-center gap-2 text-white transition-colors duration-200 py-2 px-3 rounded-lg
              ${isActiveLink("/developer") ? "bg-white/10 text-cyan-400 shadow-inner" : "hover:text-cyan-400"}
            `}
          >
            <FaUserTie /> المطور
            <AnimatePresence>
              {isActiveLink("/developer") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {!isActiveLink("/developer") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={mobileMenuStates.hidden} // Direct initial state
            animate={mobileMenuStates.visible} // Direct animate state
            exit={mobileMenuStates.hidden}   // Direct exit state
            className="md:hidden bg-[#0f172a] text-white px-6 py-4 space-y-4 text-lg font-medium border-t border-gray-700/50"
          >
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome /> الرئيسية
            </Link>
            <Link
              href="/lessons"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaGraduationCap /> الدروس
            </Link>
            <Link
              href="/language"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaLaptopCode /> المنهج الحالي
            </Link>
            <Link
              href="/developer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserTie /> المطور
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
