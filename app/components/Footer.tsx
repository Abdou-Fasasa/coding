"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#111827] border-t border-pink-500/20 py-6 text-center text-sm text-gray-400 mt-auto"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} جميع الحقوق محفوظة لـ{" "}
          <span className="text-pink-400 font-bold">Codeing</span>
        </p>
      </div>
    </motion.footer>
  );
}
