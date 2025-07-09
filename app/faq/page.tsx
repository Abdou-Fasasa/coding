"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {easeInOut} from "framer-motion";
import Header from "@/app/components/Header"; // تأكد أن المسار ده صحيح
import Footer from "@/app/components/Footer"; // تأكد أن المسار ده صحيح
import { FaChevronDown, FaChevronUp, FaWhatsapp, FaEnvelope, FaInfoCircle } from 'react-icons/fa';

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Background Animated Blobs - Consistent with other pages */}
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
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 leading-tight"
        >
          الاسئلة الشائعة؟
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-[#1e293b]/70 backdrop-blur-sm shadow-2xl rounded-2xl p-6 sm:p-8 space-y-6 border border-gray-700/50"
        >
          <div className="space-y-4">
            <Question
              q=" التعاون بين المنصة و ProCodeHub؟"
              a="أيوه، إحنا بنتعاون رسميًا مع شركة ProCodeHub. بعد ما تخلص التراك بتاعك، بيتم اختبارك ولو نجحت، بتبدأ تشتغل معاهم على مشاريع حقيقية بنظام العمل عن بعد (Remote) كمطور مستقل (Freelancer). ده بيضمنلك تطبيق عملي للي اتعلمته وفرصة تبدأ مسيرتك المهنية فوراً."
            />

            <Question
              q="فين مكان شركة ProCodeHub؟"
              a="المقر الرئيسي لشركة ProCodeHub يقع في المغرب، بمدينة الرباط، وتحديداً في شارع محمد الخامس. الشركة تعمل بنظام العمل عن بعد بشكل أساسي، مما يتيح لك الفرصة للعمل معهم من أي مكان."
            />

            <Question
              q="إزاي أقدر أتواصل مع الدعم؟"
              a="الدعم الفني مخصص حالياً للمصريين فقط، ويمكنك التواصل معنا بسهولة عن طريق واتساب أو البريد الإلكتروني. فريق الدعم متاح لمساعدتك في أي استفسارات أو مشاكل تواجهك خلال رحلتك التعليمية."
            />

            <Question
              q="هل في شروط علشان أشتغل بعد التراك؟"
              a="نعم، هناك شروط لضمان جودة المخرجات وتأهيلك لسوق العمل. يجب أن تكون مؤهلاً بالكامل للتراك الذي تدرسه، وأن تجتاز اختباراً نهائياً يتم من خلاله تقييم مستواك العملي والتقني. بعد اجتياز الاختبار بنجاح، ستبدأ العمل الفعلي مع ProCodeHub على مشاريع حقيقية، مما يمنحك خبرة قيمة جداً."
            />

            <Question
              q="هل في صفحة دعم فنية؟"
              a="لا، لا توجد صفحة دعم فنية مخصصة داخل المنصة حالياً. ولكن، يمكنك التواصل معنا مباشرةً وبسهولة عبر واتساب أو البريد الإلكتروني. نحن نفضل التواصل المباشر لتقديم دعم شخصي وفعال لطلابنا."
            />

            <Question
              q="إيه الكورسات المتاحة حاليًا؟"
              a={
                <ul className="list-disc list-inside space-y-4 mt-2 text-gray-300">
                  <li>
                    <h4 className="text-lg font-bold text-teal-300">تراك الويب المتكامل - Web Track:</h4>
                    <p className="text-sm leading-relaxed">
                      <strong>السعر:</strong> <span className="text-green-400 font-bold">500 جنيه مصري</span><br />
                      <strong>المحتوى:</strong> هذا التراك مصمم للمبتدئين تماماً ويشمل:
                      <ul className="list-disc list-inside pr-4 mt-1">
                        <li>مقدمة في علوم الحاسب والبرمجة (أساسيات الكمبيوتر واللوغاريتمات).</li>
                        <li>HTML (بناء هيكل صفحات الويب).</li>
                        <li>CSS (تنسيق وتصميم صفحات الويب).</li>
                        <li>JavaScript (إضافة التفاعل والديناميكية للمواقع).</li>
                        <li>مشروع نهائي متكامل لتطبيق كل ما تعلمته.</li>
                      </ul>
                      <strong>المدة:</strong> تتراوح من 3 إلى 4 أسابيع، حسب سرعة استيعاب الطالب ومجهوده.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-lg font-bold text-blue-300">كورس Front-End أو Back-End منفصل:</h4>
                    <p className="text-sm leading-relaxed">
                      <strong>السعر:</strong> <span className="text-green-400 font-bold">600 جنيه مصري</span><br />
                      <strong>الخيارات:</strong> يمكنك اختيار أحد المسارين التاليين بشكل منفصل:
                      <ul className="list-disc list-inside pr-4 mt-1">
                        <li>
                          <strong>Front-End Development:</strong> يشمل HTML, CSS, JavaScript، بالإضافة إلى إطار عمل React.js لبناء واجهات مستخدم حديثة ومعقدة.
                        </li>
                        <li>
                          <strong>Back-End Development:</strong> يشمل Node.js، إطار عمل Express.js، وقواعد البيانات NoSQL مثل MongoDB لبناء تطبيقات ويب قوية من جانب الخادم.
                        </li>
                      </ul>
                      <strong>المميزات:</strong> يشمل تدريباً عملياً مكثفاً، واختباراً نهائياً لتقييم مهاراتك، بالإضافة إلى فرصة العمل على مشروع حقيقي من ProCodeHub.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-lg font-bold text-purple-300">كورس الأمن السيبراني - Cyber Security:</h4>
                    <p className="text-sm leading-relaxed">
                      <strong>السعر:</strong> <span className="text-green-400 font-bold">1200 جنيه مصري</span><br />
                      <strong>المحتوى:</strong> هذا الكورس الشامل يغطي جوانب متعددة من الأمن السيبراني:
                      <ul className="list-disc list-inside pr-4 mt-1">
                        <li>مقدمة في الشبكات وأساسياتها.</li>
                        <li>أنواع الاختراقات الشائعة وطرق عملها.</li>
                        <li>أساليب الحماية المتقدمة للمنظمات والأفراد.</li>
                        <li>أدوات اختبار الاختراق (Penetration Testing Tools) وكيفية استخدامها بشكل قانوني.</li>
                        <li>مشروع اختراق قانوني (Ethical Hacking Project) لتطبيق المهارات عملياً.</li>
                      </ul>
                      <strong>التقييم:</strong> الاختبار النهائي يتم بعده تحديد مستواك في بيئة عملية فعلية، مما يؤهلك للعمل في مجال الأمن السيبراني.
                    </p>
                  </li>

                  <li>
                    <h4 className="text-lg font-bold text-pink-300">كورس اختراق حسابات السوشيال ميديا (قريباً):</h4>
                    <p className="text-sm leading-relaxed">
                      هذا الكورس سيكون جزءاً من تراك الحماية السيبرانية، وهو مصمم لتعليمك الجوانب القانونية والأخلاقية لاختراق حسابات السوشيال ميديا لأغراض الحماية والتحقيق. سيكون متاحاً قريباً جداً ضمن محتوانا المتميز.
                    </p>
                  </li>
                </ul>
              }
            />

            <Question
              q="هل الكورسات أونلاين؟"
              a="نعم، جميع الكورسات لدينا متاحة أونلاين بالكامل. نقدم فيديوهات تعليمية بجودة عالية، شروحات تفصيلية باللهجة المصرية المبسطة، واختبارات عملية بعد كل درس لضمان فهمك وتطبيقك للمفاهيم بشكل صحيح. يمكنك التعلم من أي مكان وفي أي وقت يناسبك."
            />

            {/* **التعديل هنا: تحديث السؤال وتفاصيله** */}
            <Question
              q="كيف يتم اختبار الطلاب بعد الكورس وماذا عن العمل والشهادات؟"
              a={
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>بعد انتهاء الطالب من دراسة التراك الخاص به (سواء Front-End، Back-End، أو Cyber Security)، يخضع لاختبار عملي شامل مصمم خصيصاً ليناسب مستوى الكورس الذي أتم دراسته. هذا الاختبار لا يعتمد على الحفظ، بل يركز على قدرته على تطبيق المفاهيم والمهارات التي تعلمها بشكل عملي.</p>
                  <p>للتأهل للعمل مع شركة <strong className="text-teal-300">ProCodeHub</strong> واستلام أول مشروع، يجب على الطالب تحقيق نسبة نجاح تتراوح بين <strong className="text-green-400">70% إلى 100%</strong> في هذا الاختبار. هذا يضمن أن الطالب يمتلك المهارات المطلوبة للتعامل مع تحديات سوق العمل الحقيقي.</p>
                  <p>في حال نجاح الطالب، يتم تكليفه بأول مشروع عملي بقيمة <strong className="text-orange-400">1300 درهم مغربي</strong> (ما يعادل تقريباً 130 دولار أمريكي، قيمة تقريبية متغيرة حسب سعر الصرف). إذا تم تسليم المشروع بجودة جيدة وفي الوقت المحدد، يستمر الطالب في العمل مع ProCodeHub بنظام العمل الحر (Freelancer) لمدة تصل إلى ثلاثة أشهر.</p>
                  <p>خلال هذه الفترة (الثلاثة أشهر)، يكتسب الطالب خبرة عملية قيمة جداً بالعمل على مشاريع حقيقية. بعد إتمام هذه الفترة بنجاح، يصبح الطالب مؤهلاً للحصول على <strong className="text-purple-400">شهادة خبرة مميزة ومعتمدة من شركة ProCodeHub</strong>، تؤكد خبرته في العمل مع شركات حقيقية في المجال.</p>
                  <p className="text-gray-300 mt-2 flex items-center gap-2">
                    <FaInfoCircle className="text-lg text-blue-400" /> هذه الشهادة تضيف قيمة كبيرة لملفك الشخصي وتزيد من فرصك في سوق العمل.
                  </p>
                </div>
              }
            />
          </div>

          <div className="pt-6 border-t border-gray-700/50 text-center text-sm text-gray-400 space-y-3">
            <p className="text-lg font-semibold text-white">لأي استفسار إضافي، يمكنك التواصل معنا:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/201128606959"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200 text-base sm:text-lg font-medium bg-green-900/30 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" /> واتساب: 01128606959
              </a>
              <a
                href="mailto:abdelrahmanabdelsalam0@gmail.com"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 text-base sm:text-lg font-medium bg-blue-900/30 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
              >
                <FaEnvelope className="text-xl" /> الإيميل: info@coding.com
              </a>
            </div>
            <p className="mt-4 text-red-400 font-bold text-base flex items-center justify-center gap-2">
              <FaInfoCircle className="text-xl" /> الدعم الفني متاح للمصريين من خلال ايميل واتساب فيسبوك انستجرام تلجرام
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

// Question Component for Accordion
function Question({ q, a }: { q: string; a: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700/60 rounded-xl overflow-hidden shadow-md bg-[#0f172a]/50">
      <motion.button
        className="flex justify-between items-center w-full p-4 text-right text-lg sm:text-xl font-semibold text-white bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{q}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaChevronUp className="text-purple-400" /> : <FaChevronDown className="text-gray-400" />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="p-4 bg-[#1e293b]/70 text-gray-200 text-base sm:text-lg leading-relaxed border-t border-gray-700/50"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}