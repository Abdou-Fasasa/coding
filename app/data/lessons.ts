// data/lessons.ts

// Lesson Type Definition - description removed
export type Lesson = {
  id: string;
  title: string;
};

// Course Section Type Definition - description for CourseSection remains as it's a course-level description
export type CourseSection = {
  id: string;
  title: string;
  description: string; // وصف الكورس يظل موجودًا
  lessons: Lesson[];
  // *** علامة حمراء هنا: لا يجب أن تكون 'icon: JSX.Element;' هنا في ملف البيانات هذا ***
  iconColor: string; // يمكن أن يظل لون الأيقونة كـ string
};

// Course Unlock Codes
export const COURSE_UNLOCK_CODES: { [key: string]: string } = {
  "html-course": "HTML2024",
  "css-course": "CSS2024",
  "javascript-course": "JS2024",
  "react-course": "REACT2024",
};

// --- Lesson Data (description properties removed from individual lessons) ---
export const htmlLessons: Lesson[] = [
  {
    id: "Computer-science",
    title: "مقدمة في علوم الحاسوب والبرمجة",
  },
  {
    id: "Work-environment",
    title: "تجهيز بيئة العمل",
  },
  {
    id: "Html-lesson3",
    title: "بناء هيكل صفحة الويب (HTML)",
  },
  {
    id: "Html-lesson4",
    title: "عناصر HTML ومكوناتها",
  },
  {
    id: "Html-lesson5",
    title: "التعامل مع النصوص في HTML",
  },
  {
    id: "Html-lesson6",
    title: "التعامل مع الروابط في HTML",
  },
  {
    id: "Html-lesson7",
    title: "التعامل مع الصور في HTML",
  },
  {
    id: "Html-lesson8",
    title: "التعامل مع القوائم في HTML – Lists",
  },
  {
    id: "Html-lesson9",
    title: "الجداول في HTML – Tables",
  },
  {
    id: "Html-lesson10",
    title: "النماذج في HTML – Forms",
  },
  {
    id: "Html-lesson11",
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
  },
  {
    id: "Html-lesson12",
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
  },
  {
    id: "Html-lesson13",
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
  },
  {
    id: "Html-lesson14",
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
  },
];

export const cssLessons: Lesson[] = [
  {
    id: "Css-lesson1",
    title: "مقدمة في CSS",
  },
];

export const jsLessons: Lesson[] = [
  {
    id: "Js-lesson1",
    title: "1. Environment Setup",
  },
  {
    id: "Js-lesson2",
    title: "2. Adding JavaScript Scripts into the HTML",
  },
  {
    id: "Js-lesson3",
    title: "3. Leveraging the Console's Features",
  },
  {
    id: "Js-lesson4",
    title: "4. Introduction to the Variables",
  },
  {
    id: "Js-lesson5",
    title: "5. Primitive Data Types vs Reference Data Types",
  },
  {
    id: "Js-lesson6",
    title: "6. Example of Primitive and Reference Data Types",
  },
  {
    id: "Js-lesson7",
    title: "7. Data Type Conversion",
  },
  {
    id: "Js-lesson8",
    title: "8. Numbers in JavaScript",
  },
  {
    id: "Js-lesson9",
    title: "9. Strings and their Methods",
  },
  {
    id: "Js-lesson10",
    title: "10. Template Literals",
  },
  {
    id: "Js-lesson11",
    title: "11. Arrays and their Methods",
  },
  {
    id: "Js-lesson12",
    title: "12. Object Literals",
  },
  {
    id: "Js-lesson13",
    title: "13. Dates and Times",
  },
  {
    id: "Js-lesson14",
    title: "14. if Statement",
  },
  {
    id: "Js-lesson15",
    title: "15. switch Statement",
  },
  {
    id: "Js-lesson16",
    title: "16. Functions: Declaration and Expressions",
  },
  {
    id: "Js-lesson17",
    title: "17. Loops in JavaScript",
  },
  {
    id: "Js-lesson18",
    title: "18. (let) and (const): The Block Scope",
  },
  {
    id: "Js-lesson19",
    title: "19. The (Window) Object",
  },
  {
    id: "Js-lesson20",
    title: "20. What is the DOM?",
  },
  {
    id: "Js-lesson21",
    title: "21. The (Document) Objects",
  },
  {
    id: "Js-lesson22",
    title: "22. DOM Selector for Single Elements",
  },
  {
    id: "Js-lesson23",
    title: "23. DOM Selector for Multiple Elements",
  },
  {
    id: "Js-lesson24",
    title: "24. DOM Traversing",
  },
  {
    id: "Js-lesson25",
    title: "25. Creating DOM Elements",
  },
  {
    id: "Js-lesson26",
    title: "26. Replacing and Removing DOM Elements",
  },
  {
    id: "Js-lesson27",
    title: "27. The (Event) Object and the Event Listeners",
  },
  {
    id: "Js-lesson28",
    title: "28. Mouse Events",
  },
  {
    id: "Js-lesson29",
    title: "29. Keyboard Events",
  },
  {
    id: "Js-lesson30",
    title: "30. Event Bubbling and Event Delegation",
  },
  {
    id: "Js-lesson31",
    title: "31. Local Storage and Session Storage",
  },
  {
    id: "Js-lesson32",
    title: "32. Adding Projects",
  },
  {
    id: "Js-lesson33",
    title: "33. Deleting and Filtering Projects",
  },
  {
    id: "Js-lesson34",
    title: "34. Persist to Local Storage",
  },

];

export const reactLessons: Lesson[] = []; // Placeholder for React lessons

export const programmingFundamentalsLessons: Lesson[] = [
  {
    id: "prog-fund-1",
    title: "1. إيه هي البرمجة وليه بنتعلمها؟",
  },
  {
    id: "prog-fund-2",
    title: "2. الأدوات الأساسية للمبرمج",
  },
  {
    id: "prog-fund-3",
    title: "3. المتغيرات وأنواع البيانات",
  },
  {
    id: "prog-fund-4",
    title: "4. العمليات الحسابية والمنطقية",
  },
  {
    id: "prog-fund-5",
    title: "5. جمل اتخاذ القرار (If/Else)",
  },
  {
    id: "prog-fund-6",
    title: "6. الحلقات التكرارية (Loops)",
  },
  {
    id: "prog-fund-7",
    title: "7. الدوال (Functions)",
  },
  {
    id: "prog-fund-8",
    title: "8. التعامل مع القوائم والمصفوفات",
  },
  {
    id: "prog-fund-9",
    title: "9. المدخلات والمخرجات (Input/Output)",
  },
  {
    id: "prog-fund-10",
    title: "10. مشروع بسيط: تطبيق الآلة الحاسبة",
  },
];

// --- All Lessons Data (for LessonPage) ---
// Note: video paths are relative to the 'public' directory
export const allLessonsData: {
  [key: string]: { title: string; video: string; courseId: string; poster?: string };
} = {
  // دروس أساسيات البرمجة (مجانية - لا تتطلب كود)
  "prog-fund-1": {
    title: "1. إيه هي البرمجة وليه بنتعلمها؟",
    video: "/videos/programming-fundamentals/prog-fund-1.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-2": {
    title: "2. الأدوات الأساسية للمبرمج",
    video: "/videos/programming-fundamentals/prog-fund-2.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-3": {
    title: "3. المتغيرات وأنواع البيانات",
    video: "/videos/programming-fundamentals/prog-fund-3.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-4": {
    title: "4. العمليات الحسابية والمنطقية",
    video: "/videos/programming-fundamentals/prog-fund-4.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-5": {
    title: "5. جمل اتخاذ القرار (If/Else)",
    video: "/videos/programming-fundamentals/prog-fund-5.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-6": {
    title: "6. الحلقات التكرارية (Loops)",
    video: "/videos/programming-fundamentals/prog-fund-6.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-7": {
    title: "7. الدوال (Functions)",
    video: "/videos/programming-fundamentals/prog-fund-7.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-8": {
    title: "8. التعامل مع القوائم والمصفوفات",
    video: "/videos/programming-fundamentals/prog-fund-8.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-9": {
    title: "9. المدخلات والمخرجات (Input/Output)",
    video: "/videos/programming-fundamentals/prog-fund-9.mp4",
    courseId: "programming-fundamentals-course",
  },
  "prog-fund-10": {
    title: "10. مشروع بسيط: تطبيق الآلة الحاسبة",
    video: "/videos/programming-fundamentals/prog-fund-10.mp4",
    courseId: "programming-fundamentals-course",
  },

  // دروس علوم الحاسوب (تتبع كورس HTML الآن)
  "Computer-science": {
    title: "مقدمة في علوم الحاسوب والبرمجة",
    video: "/videos/Computer-science.mp4",
    courseId: "html-course", // يتبع كورس HTML
  },
  "Work-environment": {
    title: "تجهيز بيئة العمل",
    video: "/videos/Work-environment.mp4",
    courseId: "html-course", // يتبع كورس HTML
  },
  // دروس HTML (تتطلب كود)
  "Html-lesson3": {
    title: "بناء هيكل صفحة الويب (HTML)",
    video: "/videos/html/html-lesson3.mp4",
    courseId: "html-course",
  },
  "Html-lesson4": {
    title: "عناصر HTML ومكوناتها",
    video: "/videos/html/html-lesson4.mp4",
    courseId: "html-course",
  },
  "Html-lesson5": {
    title: "التعامل مع النصوص في HTML",
    video: "/videos/html/html-lesson5.mp4",
    courseId: "html-course",
  },
  "Html-lesson6": {
    title: "التعامل مع الروابط في HTML",
    video: "/videos/html/html-lesson6.mp4",
    courseId: "html-course",
  },
  "Html-lesson7": {
    title: "التعامل مع الصور في HTML",
    video: "/videos/html/html-lesson7.mp4",
    courseId: "html-course",
  },
  "Html-lesson8": {
    title: "التعامل مع القوائم في HTML – Lists",
    video: "/videos/html/html-lesson8.mp4",
    courseId: "html-course",
  },
  "Html-lesson9": {
    title: "الجداول في HTML – Tables",
    video: "/videos/html/html-lesson9.mp4",
    courseId: "html-course",
  },
  "Html-lesson10": {
    title: "النماذج في HTML – Forms",
    video: "/videos/html/html-lesson10.mp4",
    courseId: "html-course",
  },
  "Html-lesson11": {
    title: "تنظيم الصفحة في HTML – باستخدام الأقسام والعناصر البنائية",
    video: "/videos/html/html-lesson11.mp4",
    courseId: "html-course",
  },
  "Html-lesson12": {
    title: "إدراج عناصر خارجية في HTML – الفيديوهات، الخرائط والمواقع التانية",
    video: "/videos/html/html-lesson12.mp4",
    courseId: "html-course",
  },
  "Html-lesson13": {
    title: "أفضل الممارسات في HTML – خليك محترف من أول سطر",
    video: "/videos/html/html-lesson13.mp4",
    courseId: "html-course",
  },
  "Html-lesson14": {
    title: "مشروع نهائي باستخدام HTML فقط – ختامها مسك",
    video: "/videos/html/html-lesson14.mp4",
    courseId: "html-course",
  },
  "Css-lesson1": {
    title: "مقدمة في CSS",
    video: "/videos/css/css-lesson1.mp4",
    courseId: "css-course",
  },
  // دروس JavaScript المضافة
  "Js-lesson1": {
    title: "1. Environment Setup",
    video: "/videos/js/js-lesson1.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson2": {
    title: "2. Adding JavaScript Scripts into the HTML",
    video: "/videos/js/js-lesson2.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson3": {
    title: "3. Leveraging the Console's Features",
    video: "/videos/js/js-lesson3.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson4": {
    title: "4. Introduction to the Variables",
    video: "/videos/js/js-lesson4.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson5": {
    title: "5. Primitive Data Types vs Reference Data Types",
    video: "/videos/js/js-lesson5.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson6": {
    title: "6. Example of Primitive and Reference Data Types",
    video: "/videos/js/js-lesson6.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson7": {
    title: "7. Data Type Conversion",
    video: "/videos/js/js-lesson7.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson8": {
    title: "8. Numbers in JavaScript",
    video: "/videos/js/js-lesson8.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson9": {
    title: "9. Strings and their Methods",
    video: "/videos/js/js-lesson9.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson10": {
    title: "10. Template Literals",
    video: "/videos/js/js-lesson10.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson11": {
    title: "11. Arrays and their Methods",
    video: "/videos/js/js-lesson11.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson12": {
    title: "12. Object Literals",
    video: "/videos/js/js-lesson12.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson13": {
    title: "13. Dates and Times",
    video: "/videos/js/js-lesson13.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson14": {
    title: "14. if Statement",
    video: "/videos/js/js-lesson14.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson15": {
    title: "15. switch Statement",
    video: "/videos/js/js-lesson15.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson16": {
    title: "16. Functions: Declaration and Expressions",
    video: "/videos/js/js-lesson16.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson17": {
    title: "17. Loops in JavaScript",
    video: "/videos/js/js-lesson17.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson18": {
    title: "18. (let) and (const): The Block Scope",
    video: "/videos/js/js-lesson18.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson19": {
    title: "19. The (Window) Object",
    video: "/videos/js/js-lesson19.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson20": {
    title: "20. What is the DOM?",
    video: "/videos/js/js-lesson20.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson21": {
    title: "21. The (Document) Objects",
    video: "/videos/js/js-lesson21.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson22": {
    title: "22. DOM Selector for Single Elements",
    video: "/videos/js/js-lesson22.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson23": {
    title: "23. DOM Selector for Multiple Elements",
    video: "/videos/js/js-lesson23.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson24": {
    title: "24. DOM Traversing",
    video: "/videos/js/js-lesson24.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson25": {
    title: "25. Creating DOM Elements",
    video: "/videos/js/js-lesson25.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson26": {
    title: "26. Replacing and Removing DOM Elements",
    video: "/videos/js/js-lesson26.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson27": {
    title: "27. The (Event) Object and the Event Listeners",
    video: "/videos/js/js-lesson27.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson28": {
    title: "28. Mouse Events",
    video: "/videos/js/js-lesson28.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson29": {
    title: "29. Keyboard Events",
    video: "/videos/js/js-lesson29.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson30": {
    title: "30. Event Bubbling and Event Delegation",
    video: "/videos/js/js-lesson30.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson31": {
    title: "31. Local Storage and Session Storage",
    video: "/videos/js/js-lesson31.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson32": {
    title: "32. Adding Projects",
    video: "/videos/js/js-lesson32.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson33": {
    title: "33. Deleting and Filtering Projects",
    video: "/videos/js/js-lesson33.mp4",
    courseId: "javascript-course",
  },
  "Js-lesson34": {
    title: "34. Persist to Local Storage",
    video: "/videos/js/js-lesson34.mp4",
    courseId: "javascript-course",
  },
};