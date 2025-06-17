"use client";

import Link from "next/link";
import {
  FaHome,
  FaBookOpen,
  FaCode,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md shadow-md">
      {/* العرض بقى 100% عشان يحل المشكلة في الموبايل */}
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* اللوجو */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text tracking-tight"
        >
          Coding
        </Link>

        {/* نافيجيتور الديسكتوب */}
        <nav className="hidden md:flex space-x-8 text-xl font-semibold">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-pink-400 transition"
          >
            <FaHome /> الرئيسية
          </Link>
          <Link
            href="/lessons"
            className="flex items-center gap-2 text-white hover:text-purple-400 transition"
          >
            <FaBookOpen /> الدروس
          </Link>
          <Link
            href="/language"
            className="flex items-center gap-2 text-white hover:text-yellow-400 transition"
          >
            <FaCode /> اللغة الحالية
          </Link>
          <Link
            href="/developer"
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition"
          >
            <FaUser /> المطور
          </Link>
        </nav>

        {/* زر القائمة للموبايل */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* قائمة الموبايل المنسدلة */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] text-white px-6 py-4 space-y-4 text-lg font-medium transition-all animate-fade-in">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-pink-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome /> الرئيسية
          </Link>
          <Link
            href="/lessons"
            className="flex items-center gap-2 hover:text-purple-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaBookOpen /> الدروس
          </Link>
          <Link
            href="/language"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaCode /> اللغة الحالية
          </Link>
          <Link
            href="/developer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser /> المطور
          </Link>
        </div>
      )}
    </header>
  );
}
