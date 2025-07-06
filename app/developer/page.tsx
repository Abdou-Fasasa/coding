"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaCode,
  FaHeart,
  FaLaptopCode, // General development icon
  FaShieldAlt, // Cybersecurity / Ethical Hacking
  FaDatabase, // Backend / Databases
  FaMobileAlt, // Mobile Development
  FaCloud,     // Cloud / DevOps
  FaBrain,     // AI / Machine Learning
  FaGamepad,   // Game Development
  FaTools,     // Other tools/concepts
} from "react-icons/fa"; // Removed FaChartBar import

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center space-y-12 relative overflow-hidden" dir="rtl">
        {/* Decorative background elements (subtle animations) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
        ></motion.div>

        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mb-6 relative z-10"
        >
          عن المطور
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 leading-loose relative z-10 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5"
        >
          👋 أنا <span className="font-bold text-white">عبدالرحمن</span>، مطور ومهتم بتعليم البرمجة للمبتدئين بطريقة
          <span className="text-pink-400 font-semibold"> سهلة وعصرية</span>.
          أنشأت منصة <span className="text-cyan-400 font-semibold">Coding</span> علشان أوصل المعلومة لأي حد حابب يبدأ
          مشواره في البرمجة، بأسلوب <span className="text-purple-400 font-semibold">مبسط وعملي</span> 🚀.
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="block mt-4 text-sm text-gray-400 italic"
          >
            الشغف بتبسيط المعلومة هو دافعي الأساسي.
            <FaHeart className="inline-block text-red-400 mx-1" />
          </motion.span>
        </motion.p>

        {/* Skills/Focus Section - Expanded */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-xl space-y-8 border border-blue-500/20 relative z-10"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center justify-center gap-3">
            <FaLaptopCode className="text-purple-400 text-4xl" /> مجالات اهتمامي وخبراتي
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Development */}
            <SkillCard
              title="Frontend Development"
              icon={FaCode}
              color="blue"
              skills={[
                "React.js", "Next.js", "Vue.js", "Angular", "Svelte",
                "Tailwind CSS", "Bootstrap", "Material-UI",
                "JavaScript", "TypeScript", "HTML5", "CSS3", "WebAssembly"
              ]}
            />

            {/* Backend Development */}
            <SkillCard
              title="Backend Development"
              icon={FaDatabase}
              color="green"
              skills={[
                "Node.js (Express)", "Python (Django, Flask)", "Go", "Rust",
                "C# (.NET)", "Java (Spring Boot)", "PHP (Laravel)", "Ruby (Rails)",
                "REST APIs", "GraphQL", "Microservices"
              ]}
            />

            {/* Mobile Development */}
            <SkillCard
              title="Mobile Development"
              icon={FaMobileAlt}
              color="indigo"
              skills={[
                "Flutter", "Dart", "React Native", "Swift (iOS)", "Kotlin (Android)",
                "Native Android", "Native iOS", "Hybrid Apps"
              ]}
            />

            {/* Data Science & AI/ML */}
            <SkillCard
              title="Data Science & AI/ML"
              icon={FaBrain}
              color="red"
              skills={[
                "Python (Pandas, NumPy, Scikit-learn)", "R", "SQL",
                "Machine Learning", "Deep Learning", "NLP", "Computer Vision",
                "TensorFlow", "PyTorch", "Data Visualization (Matplotlib, Seaborn)"
              ]}
            />

            {/* DevOps & Cloud */}
            <SkillCard
              title="DevOps & Cloud"
              icon={FaCloud}
              color="orange"
              skills={[
                "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud Platform (GCP)",
                "CI/CD (Jenkins, GitLab CI/CD)", "Terraform", "Ansible", "Git", "GitHub/GitLab"
              ]}
            />

            {/* Cybersecurity & Ethical Hacking */}
            <SkillCard
              title="Cybersecurity & Ethical Hacking"
              icon={FaShieldAlt}
              color="purple"
              skills={[
                "Penetration Testing", "Vulnerability Assessment", "Network Security",
                "Web Application Security", "Cryptography", "Incident Response",
                "Malware Analysis", "OSINT", "Security Auditing"
              ]}
            />

            {/* Databases */}
            <SkillCard
              title="Databases"
              icon={FaDatabase} // Re-using database icon for specific DB section
              color="teal"
              skills={[
                "SQL (PostgreSQL, MySQL, SQLite)", "NoSQL (MongoDB, Cassandra, Redis)",
                "Firebase Firestore", "Elasticsearch", "Data Modeling"
              ]}
            />

            {/* Game Development */}
            <SkillCard
              title="Game Development"
              icon={FaGamepad}
              color="yellow"
              skills={[
                "Unity (C#)", "Unreal Engine (C++)", "Pygame (Python)",
                "Phaser (JavaScript)", "Game Design", "3D Modeling Basics"
              ]}
            />

            {/* Other Technologies & Concepts */}
            <SkillCard
              title="Other Technologies"
              icon={FaTools}
              color="gray"
              skills={[
                "Blockchain Basics", "IoT (Internet of Things)", "C", "C++",
                "Assembly Language Basics", "System Design", "Problem Solving"
              ]}
            />
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-[#1e293b] p-6 rounded-2xl shadow-xl space-y-4 border border-white/10 relative z-10"
        >
          <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center justify-center gap-2">
            <FaEnvelope /> وسائل التواصل
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-center flex-wrap gap-4 text-gray-300 text-lg">
            {/* Email Link */}
            <motion.a
              href="mailto:abdelrahmanabdelsalam@gmail.com"
              className="flex items-center gap-2 hover:text-pink-400 transition transform hover:scale-105 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Email
            </motion.a>
            {/* Facebook Link */}
            <motion.a
              href="https://www.facebook.com/Prof.AbdouCEH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition transform hover:scale-105 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF /> Facebook
            </motion.a>
            {/* WhatsApp Link */}
            <motion.a
              href="https://wa.me/201128606959"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition transform hover:scale-105 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> WhatsApp
            </motion.a>
            {/* Telegram Link */}
            <motion.a
              href="https://t.me/prof_abdou1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition transform hover:scale-105 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegramPlane /> Telegram
            </motion.a>
            {/* Instagram Link */}
            <motion.a
              href="https://www.instagram.com/prof_abdou200?igsh=MXdkOWdyeXdsdXhseg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500 transition transform hover:scale-105 px-4 py-2 rounded-lg bg-black/30 hover:bg-black/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram /> Instagram
            </motion.a>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

// Helper component for skill cards
type SkillCardProps = {
  title: string;
  icon: React.ElementType;
  color: string; // Tailwind color prefix (e.g., "blue", "green")
  skills: string[];
};

function SkillCard({ title, icon: Icon, color, skills }: SkillCardProps) {
  const colorClasses: { [key: string]: { text: string; bg: string; border: string } } = {
    blue: { text: "text-blue-300", bg: "bg-blue-700/30", border: "border-blue-500/20" },
    green: { text: "text-green-300", bg: "bg-green-700/30", border: "border-green-500/20" },
    indigo: { text: "text-indigo-300", bg: "bg-indigo-700/30", border: "border-indigo-500/20" },
    red: { text: "text-red-300", bg: "bg-red-700/30", border: "border-red-500/20" },
    orange: { text: "text-orange-300", bg: "bg-orange-700/30", border: "border-orange-500/20" },
    purple: { text: "text-purple-300", bg: "bg-purple-700/30", border: "border-purple-500/20" },
    teal: { text: "text-teal-300", bg: "bg-teal-700/30", border: "border-teal-500/20" },
    yellow: { text: "text-yellow-300", bg: "bg-yellow-700/30", border: "border-yellow-500/20" },
    gray: { text: "text-gray-300", bg: "bg-gray-700/30", border: "border-gray-500/20" },
  };

  const { text, bg, border } = colorClasses[color] || colorClasses.gray; // Fallback to gray

  const customStyle: React.CSSProperties & { [key: string]: string } = {
  [`--tw-shadow-color-rgb`]: `var(--${color}-500-rgb)`
};
return (
  <div style={customStyle}>
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: `0 0 20px -5px rgba(var(--${color}-500-rgb), 0.5)`
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`bg-gray-800/50 p-6 rounded-2xl shadow-lg space-y-4 border ${border} transform transition-all duration-300`}
    >
      <h3 className={`text-xl md:text-2xl font-bold ${text} flex items-center justify-center gap-3`}>
        <Icon className={`text-3xl ${text}`} /> {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-2 text-sm font-medium">
        {skills.map((skill, index) => (
          <span key={index} className={`px-3 py-1 ${bg} rounded-full ${text} shadow-sm`}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
);
}
