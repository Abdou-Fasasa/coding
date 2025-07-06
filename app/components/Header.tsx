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
  FaSignOutAlt, // Added for Logout icon
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
// تم إزالة 'easeIn' و 'easeOut' من هنا، لأنهما يستخدمان كسلاسل نصية مباشرة في خصائص الانتقال

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Animation states for the mobile menu (slide down/up)
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
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  // Handle Logout function
  const handleLogout = () => {
    document.cookie = 'loggedIn=; path=/; max-age=0'; // Clear the loggedIn cookie
    router.push('/login'); // Redirect to the login page
    setMenuOpen(false); // Close mobile menu if open
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
            onClick={() => setMenuOpen(false)}
          >
            Coding
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-lg font-semibold"> {/* Changed space-x-6 to space-x-4, text-xl to text-lg */}
          {/* Home Link */}
          <Link
            href="/"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg {/* Changed gap-2 to gap-1, py-2 px-3 to py-1 px-2 */}
              ${isActiveLink("/") ? "bg-white/10 text-pink-400 shadow-inner" : "hover:text-pink-400"}
            `}
          >
            <FaHome className="text-xl" /> Home {/* Ensured icon size is consistent */}
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
            {!isActiveLink("/") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Lessons Link */}
          <Link
            href="/lessons"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/lessons") ? "bg-white/10 text-purple-400 shadow-inner" : "hover:text-purple-400"}
            `}
          >
            <FaGraduationCap className="text-xl" /> Lessons
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

          {/* Current Curriculum Link */}
          <Link
            href="/language"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/language") ? "bg-white/10 text-yellow-400 shadow-inner" : "hover:text-yellow-400"}
            `}
          >
            <FaLaptopCode className="text-xl" /> language
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
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/developer") ? "bg-white/10 text-cyan-400 shadow-inner" : "hover:text-cyan-400"}
            `}
          >
            <FaUserTie className="text-xl" /> Developer
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

          {/* FAQ Link */}
          <Link
            href="/faq"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/faq") ? "bg-white/10 text-orange-400 shadow-inner" : "hover:text-orange-400"}
            `}
          >
            <FaQuestionCircle className="text-xl" /> FAQ
            <AnimatePresence>
              {isActiveLink("/faq") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {!isActiveLink("/faq") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Subscribe/Pricing Link */}
          <Link
            href="/subscribe"
            className={`group relative flex items-center gap-1 text-white transition-colors duration-200 py-1 px-2 rounded-lg
              ${isActiveLink("/subscribe") ? "bg-white/10 text-green-400 shadow-inner" : "hover:text-green-400"}
            `}
          >
            <FaMoneyBillWave className="text-xl" /> Pricing
            <AnimatePresence>
              {isActiveLink("/subscribe") && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 rounded-full"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
            {!isActiveLink("/subscribe") && (
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></span>
            )}
          </Link>

          {/* Logout Button - Desktop (Icon Only) */}
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg shadow-md transition-all duration-200 hover:scale-110"
            title="تسجيل خروج"
          >
            <FaSignOutAlt />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden" // Changed to string literal
            animate="visible" // Changed to string literal
            exit="hidden"    // Changed to string literal
            variants={mobileMenuStates} // Added variants prop
            className="md:hidden bg-[#0f172a] text-white px-6 py-4 space-y-4 text-lg font-medium border-t border-gray-700/50"
          >
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaHome /> Home
            </Link>
            <Link
              href="/lessons"
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaGraduationCap /> Lessons
            </Link>
            <Link
              href="/language"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaLaptopCode /> Current Curriculum
            </Link>
            <Link
              href="/developer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserTie /> Developer
            </Link>
            {/* FAQ Link in Mobile Menu */}
            <Link
              href="/faq"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaQuestionCircle /> FAQ
            </Link>
            {/* Subscribe/Pricing Link in Mobile Menu */}
            <Link
              href="/subscribe"
              className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200 py-2"
              onClick={() => setMenuOpen(false)}
            >
              <FaMoneyBillWave /> Pricing
            </Link>
            {/* Logout Button in Mobile Menu (Icon Only) */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-end gap-2 text-red-400 hover:text-red-300 transition-colors duration-200 py-2 w-full"
            >
              <FaSignOutAlt className="text-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
