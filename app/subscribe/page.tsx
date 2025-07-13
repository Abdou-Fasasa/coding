"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {easeInOut} from "framer-motion";
import Header from "@/app/components/Header"; // Assuming Header is in "@/app/components/Header"
import Footer from "@/app/components/Footer"; // Assuming Footer is in "@/app/components/Footer"
import Link from "next/link";
import { FaCrown, FaCheckCircle, FaWhatsapp, FaCreditCard, FaGift, FaCalendarAlt, FaPlayCircle, FaStar } from 'react-icons/fa'; // Added FaStar for extra flair

// Component for individual course cards
type CourseCardProps = {
  title: string;
  price: string;
  originalPrice?: string; // New prop for original price
  currency: string;
  description: string;
  features: string[];
  isVIP?: boolean;
  installmentAvailable?: boolean;
  whatsappNumber: string; // WhatsApp number for purchase
  discountPercentage?: string; // New prop for discount percentage text
  isFree?: boolean; // New prop to indicate if the course is free
  freeCourseLink?: string; // New prop for the direct link to the free course
};

function CourseCard({
  title,
  price,
  originalPrice,
  currency,
  description,
  features,
  isVIP = false,
  installmentAvailable = false,
  whatsappNumber,
  discountPercentage,
  isFree = false,
  freeCourseLink = "#",
}: CourseCardProps) {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=أرغب في الاشتراك في كورس: ${encodeURIComponent(title)}`;

  // Conditional classes for card and title based on VIP or Free status
  const cardClasses = isVIP
    ? "bg-gradient-to-br from-purple-800 to-indigo-800 border-2 border-yellow-500 shadow-yellow-500/30"
    : isFree // Special styling for free courses - More vibrant and unique
    ? "bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 border border-yellow-300 shadow-lg shadow-purple-500/40"
    : "bg-[#1e293b] border border-gray-700/50 shadow-lg";

  const titleClasses = isVIP
    ? "text-yellow-300 drop-shadow-lg"
    : isFree // Special styling for free courses
    ? "text-white text-4xl drop-shadow-lg" // Larger title for free course
    : "text-cyan-300";

  // Check if there's a discount and a discount percentage text provided
  const hasDiscount = originalPrice && originalPrice !== price && discountPercentage;

  // Determine if the price is a string like "قريباً" or "تواصل معنا"
  const isSpecialPriceText = price === "قريباً" || price === "تواصل معنا";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      viewport={{ once: true, amount: 0.3 }}
      // Increased pt-20 to ensure enough space for the badge at the top,
      // as the badge itself won't have -translate-y-1/2 anymore.
      className={`relative p-6 pt-20 rounded-2xl space-y-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-[1.02] ${cardClasses} overflow-hidden`}
    >
      {/* Golden Discount Badge (Top Right - Modern Label Style) */}
      {hasDiscount && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-yellow-500 text-gray-900 text-base font-bold px-4 py-2 rounded-tr-2xl rounded-bl-lg shadow-xl flex items-center gap-1 z-20 border border-yellow-300"
        >
          <FaGift className="inline-block text-lg ml-1" />
          {discountPercentage}
        </motion.div>
      )}

      {/* VIP Premium Badge (Top Right - Positioned below discount if present) */}
      {isVIP && (
        <div className={`absolute ${hasDiscount ? 'top-10' : 'top-0'} right-0 bg-yellow-500 text-gray-900 text-xs font-bold py-1 px-3 rounded-tr-2xl rounded-bl-lg flex items-center gap-1 z-10`}>
          <FaCrown className="text-sm" /> VIP Premium
        </div>
      )}

      {/* FREE Badge - Modern & Prominent Style (No -translate-y-1/2 on badge itself) */}
      {isFree && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
          // Removed -translate-y-1/2 here
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 py-2 bg-gradient-to-r from-cyan-400 to-green-500 text-gray-900 text-lg font-extrabold shadow-xl rounded-full transform rotate-3 z-30
                     flex items-center justify-center gap-2 border-2 border-white`}
        >
          <FaStar className="text-yellow-900 text-xl" />
          <span>مجاني بالكامل!</span>
          <FaStar className="text-yellow-900 text-xl" />
        </motion.div>
      )}


      {/* Removed pt-10 from h3. Title will naturally sit below the badge due to card's increased overall padding. */}
      <h3 className={`text-3xl font-extrabold ${titleClasses}`}>
        {title}
      </h3>
      <p className={`text-lg leading-relaxed ${isFree ? 'text-white/90' : 'text-gray-300'}`}>{description}</p>

      <div className="text-4xl font-bold flex items-baseline gap-2 justify-center">
        {hasDiscount && !isSpecialPriceText && !isFree && (
          <span className="text-gray-500 line-through text-2xl mr-2">
            {originalPrice}
          </span>
        )}
        <span className={isSpecialPriceText || isFree ? "text-white text-5xl" : "text-yellow-300"}>
          {price}
        </span>
        {!isSpecialPriceText && !isFree && <span className="text-xl font-semibold text-gray-400">{currency}</span>}
      </div>

      <ul className="list-none space-y-2 text-gray-200 text-base text-right w-full px-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheckCircle className={`${isFree ? "text-yellow-300" : "text-green-400"} mt-1 flex-shrink-0`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {installmentAvailable && !isFree && (
        <p className="text-sm text-yellow-400 flex items-center gap-2 mt-4">
          <FaCreditCard /> متاح تقسيط (تواصل معنا للمزيد)
        </p>
      )}

      <Link
        href={isFree ? freeCourseLink : whatsappLink}
        target={isFree ? "_self" : "_blank"}
        rel={isFree ? "" : "noopener noreferrer"}
        className={`mt-6 w-full py-4 rounded-full text-white font-bold text-xl transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center justify-center gap-2
          ${isVIP ? "bg-yellow-600 hover:bg-yellow-700" : isFree ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700" : "bg-blue-600 hover:bg-blue-700"}
        `}
      >
        {isFree ? (
          <>
            <FaPlayCircle className="text-2xl" /> ابدأ الكورس مجاناً
          </>
        ) : (
          <>
            <FaWhatsapp className="text-xl" /> {isSpecialPriceText ? "استفسر الآن" : "اشترك الآن"}
          </>
        )}
      </Link>
    </motion.div>
  );
}

export default function SubscribePage() {
  const whatsappContact = "201128606959"; // Replace with your actual WhatsApp number

  // Calculate end date for the discount (7 days from now)
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7); // Add 7 days
  const formattedEndDate = endDate.toLocaleDateString('ar-EG', { // Format for Arabic, Egyptian locale
    weekday: 'long', // Full weekday name
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: easeInOut }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: easeInOut }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"
      ></motion.div>

      <Header />

      <main className="flex-grow pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto space-y-14 relative z-10" dir="rtl">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 leading-tight"
        >
          خطط الاشتراك والدورات 🚀
        </motion.h1>

        {/* Discount End Date Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#1e293b]/70 backdrop-blur-sm shadow-xl rounded-2xl p-4 sm:p-6 border border-yellow-500/30 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
        >
          <div className="flex items-center gap-2 text-yellow-400 text-xl sm:text-2xl font-bold">
            <FaGift className="text-3xl sm:text-4xl" />
            <span>عرض خاص ينتهي خلال 7 أيام!</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300 text-lg sm:text-xl font-medium">
            <FaCalendarAlt className="text-2xl" />
            <span>ينتهي في: {formattedEndDate}</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-center text-gray-300 max-w-3xl mx-auto leading-relaxed p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-lg"
        >
          اختر الخطة التي تناسبك وابدأ رحلتك في عالم البرمجة! نقدم لك أفضل الدورات بأسعار تنافسية وخيارات دفع مرنة.
        </motion.p>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FREE Course - Programming Fundamentals (NOW FIRST AND DISTINGUISHED) */}
          <CourseCard
            title="كورس أساسيات البرمجة"
            price="مجاناً"
            currency="" // No currency for free courses
            description="بوابة دخولك لعالم البرمجة من الصفر: تعلم التفكير البرمجي وأول خطوات كتابة الكود."
            features={[
              "مقدمة في علوم الحاسب والبرمجة",
              "تجهيز بيئة العمل",
              "المتغيرات وأنواع البيانات",
              "العمليات الحسابية والمنطقية",
              "جمل اتخاذ القرار والحلقات التكرارية",
              "الدوال والقوائم والمصفوفات",
              "مشروع بسيط لربط المفاهيم"
            ]}
            whatsappNumber={whatsappContact} // Still pass whatsapp for consistency, though not used by free course button
            isFree={true} // Mark as free
            freeCourseLink="/lessons" // **IMPORTANT: Update this to the actual path of your free course lesson page**
          />

          {/* Existing Courses (order remains the same after the free one) */}
          <CourseCard
            title="تراك الويب المتكامل"
            price="500"
            originalPrice="1000"
            currency="جنيه مصري"
            description="مسار شامل للمبتدئين لبناء مواقع الويب من الصفر حتى الاحتراف."
            features={[
              "مقدمة في علوم الحاسب والبرمجة",
              "HTML: بناء هيكل الويب",
              "CSS: تنسيق وتصميم الويب",
              "JavaScript: التفاعل والديناميكية",
              "مشروع نهائي متكامل",
              "دعم فني مستمر"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس Front-End منفصل"
            price="600"
            originalPrice="1200"
            currency="جنيه مصري"
            description="تعمق في تطوير الواجهات الأمامية باستخدام أحدث التقنيات."
            features={[
              "HTML, CSS, JavaScript متقدم",
              "React.js: بناء واجهات المستخدم",
              "تدريب عملي مكثف",
              "اختبار نهائي لتقييم المهارات",
              "فرصة للعمل على مشروع حقيقي من ProCodeHub"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس Back-End منفصل"
            price="600"
            originalPrice="1200"
            currency="جنيه مصري"
            description="تعلم بناء تطبيقات الويب من جانب الخادم والتعامل مع قواعد البيانات."
            features={[
              "Node.js و Express.js",
              "MongoDB: قواعد بيانات NoSQL",
              "بناء RESTful APIs",
              "تدريب عملي مكثف",
              "اختبار نهائي لتقييم المهارات",
              "فرصة للعمل على مشروع حقيقي من ProCodeHub"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس HTML الأساسي"
            price="250"
            originalPrice="500"
            currency="جنيه مصري"
            description="تعلم أساسيات بناء هيكل صفحات الويب والتحكم في المحتوى."
            features={[
              "مقدمة في HTML",
              "العناصر والسمات الأساسية",
              "التعامل مع النصوص والصور والروابط",
              "إنشاء القوائم والجداول والنماذج",
              "مشروع عملي لبناء صفحة ويب"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس CSS الأساسي"
            price="250"
            originalPrice="500"
            currency="جنيه مصري"
            description="أضف لمسة جمالية وتصميم احترافي لصفحات الويب الخاصة بك."
            features={[
              "مقدمة في CSS وكيفية ربطها بـ HTML",
              "المحددات (Selectors) والخصائص (Properties)",
              "صناديق النموذج (Box Model) والتخطيط (Layout)",
              "الاستجابة (Responsive Design) للشاشات المختلفة",
              "تطبيق تأثيرات الألوان والخطوط والخلفيات"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس JavaScript الأساسي"
            price="300"
            originalPrice="600"
            currency="جنيه مصري"
            description="اجعل صفحات الويب تفاعلية وديناميكية باستخدام لغة JavaScript."
            features={[
              "مقدمة في JavaScript والمتغيرات وأنواع البيانات",
              "الجمل الشرطية والحلقات (Loops)",
              "الدوال (Functions) والكائنات (Objects)",
              "التعامل مع DOM وتغيير محتوى الصفحة",
              "مشروع تفاعلي بسيط"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس React.js الأساسي"
            price="400"
            originalPrice="800"
            currency="جنيه مصري"
            description="ابدأ رحلتك في بناء واجهات مستخدم حديثة وتفاعلية باستخدام React.js."
            features={[
              "مقدمة في React والمكونات (Components)",
              "الحالة (State) والخصائص (Props)",
              "إدارة الأحداث (Event Handling)",
              "التعامل مع القوائم (Lists) والمفاتيح (Keys)",
              "مشروع تطبيق React بسيط"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس الأمن السيبراني"
            price="1200"
            originalPrice="2400"
            currency="جنيه مصري"
            description="احترف حماية الأنظمة والشبكات من التهديدات السيبرانية."
            features={[
              "مقدمة في الشبكات وأساسياتها",
              "أنواع الاختراقات وأساليبها",
              "أساليب الحماية المتقدمة",
              "أدوات اختبار الاختراق (Penetration Testing)",
              "مشروع اختراق قانوني (Ethical Hacking)",
              "تأهيل للعمل في مجال الأمن السيبراني"
            ]}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
            discountPercentage="خصم 50%"
          />

          <CourseCard
            title="كورس اختراق السوشيال ميديا"
            price="قريباً"
            currency=""
            description="كورس متقدم ضمن الأمن السيبراني لتعلم الجوانب القانونية والأخلاقية لاختراق حسابات التواصل الاجتماعي."
            features={[
              "تقنيات جمع المعلومات (OSINT)",
              "فهم الثغرات الشائعة",
              "أساليب الحماية المتقدمة للحسابات",
              "مشروع عملي في بيئة آمنة",
              "جزء من تراك الحماية السيبرانية"
            ]}
            whatsappNumber={whatsappContact}
          />

          <CourseCard
            title="تراك VIP Premium"
            price="تواصل معنا"
            currency=""
            description="تجربة تعليمية فريدة وشاملة مع دعم شخصي وفرص حصرية."
            features={[
              "جميع كورسات الويب (Front-End & Back-End)",
              "كورس الأمن السيبراني بالكامل",
              "دعم فني وشخصي 1-on-1 (جلسات خاصة)",
              "أولوية في الحصول على مشاريع ProCodeHub",
              "إرشاد مهني وتوجيه مستمر",
              "وصول مبكر للكورسات الجديدة"
            ]}
            isVIP={true}
            whatsappNumber={whatsappContact}
            installmentAvailable={true}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-center text-sm sm:text-base text-gray-400 mt-10 p-4 bg-[#1e293b]/50 rounded-xl border border-gray-700/50 shadow-inner"
        >
          <p className="text-lg font-semibold text-white mb-2">
            للاستفسار عن أي كورس أو خيارات التقسيط، تواصل معنا عبر واتساب:
          </p>
          <Link
            href={`https://wa.me/${whatsappContact}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200 text-base sm:text-lg font-medium bg-green-900/30 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" /> تواصل معنا عبر واتساب
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}