// app/data/questions.ts

export const lessonQuestions: {
  [key: string]: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
} = {
  "Computer-science": [
    {
      "question": "إيه هي البرمجة؟",
      "options": [
        "طريقة للكلام مع البشر",
        "طريقة لكتابة أوامر للكمبيوتر عشان يعمل حاجات معينة",
        "تصميم الرسومات على الكمبيوتر",
        "إصلاح أعطال الكمبيوتر"
      ],
      "correctAnswer": "طريقة لكتابة أوامر للكمبيوتر عشان يعمل حاجات معينة"
    },
    {
      "question": "الروبوت (أو الكمبيوتر) بيفهم كلامنا العادي زي الإنسان؟",
      "options": [
        "آه طبعًا",
        "لأ، بيفهم لغة خاصة بيه اسمها البرمجة",
        "أحيانًا بيفهم",
        "الروبوتات بس اللي بتفهم"
      ],
      "correctAnswer": "لأ، بيفهم لغة خاصة بيه اسمها البرمجة"
    },
    {
      "question": "لما بندي أوامر للروبوت، لازم تكون الأوامر دي إزاي؟",
      "options": [
        "غامضة وعامة",
        "خطوة بخطوة وبالتفصيل الممل",
        "كلام عادي زي ما بنتكلم",
        "في شكل صور بس"
      ],
      "correctAnswer": "خطوة بخطوة وبالتفصيل الممل"
    },
    {
      "question": "إيه هو 'مخ' الكمبيوتر اللي بيفكر وينفذ الأوامر؟",
      "options": [
        "الذاكرة (RAM)",
        "الشاشة (Screen)",
        "المعالج (CPU)",
        "الكيبورد (Keyboard)"
      ],
      "correctAnswer": "المعالج (CPU)"
    },
    {
      "question": "إيه وظيفة 'الذاكرة (RAM)' في الكمبيوتر؟",
      "options": [
        "عرض الصور",
        "تخزين الملفات بشكل دائم",
        "كشكول بيسجل فيه الكمبيوتر المعلومات اللي بيحتاجها مؤقتًا وهو شغال",
        "إصدار الأصوات"
      ],
      "correctAnswer": "كشكول بيسجل فيه الكمبيوتر المعلومات اللي بيحتاجها مؤقتًا وهو شغال"
    },
    {
      "question": "ليه بنقول إن الكمبيوتر 'غبي' بطبعه؟",
      "options": [
        "عشان ميعرفش يتكلم",
        "عشان لازم نديله أوامر تفصيلية وميعرفش يفكر من نفسه",
        "عشان بيعمل أخطاء كتير",
        "عشان بيشتغل ببطء"
      ],
      "correctAnswer": "عشان لازم نديله أوامر تفصيلية وميعرفش يفكر من نفسه"
    },
    {
      "question": "إيه هي اللغة الوحيدة اللي الكمبيوتر بيفهمها بشكل مباشر؟",
      "options": [
        "اللغة الإنجليزية",
        "لغة الأصفار والوحايد (Binary Language)",
        "اللغة العربية",
        "لغات البرمجة الحديثة"
      ],
      "correctAnswer": "لغة الأصفار والوحايد (Binary Language)"
    },
    {
      "question": "إيه سبب ظهور لغات البرمجة زي Python؟",
      "options": [
        "عشان الكمبيوتر يبقى أذكى",
        "عشان نصعب عملية البرمجة",
        "عشان تسهل علينا كتابة الأوامر بدل الأصفار والوحايد",
        "عشان نلون شاشة الكمبيوتر"
      ],
      "correctAnswer": "عشان تسهل علينا كتابة الأوامر بدل الأصفار والوحايد"
    },
    {
      "question": "أول لغة برمجة ظهرت كانت قريبة من لغة الآلة، اسمها إيه؟",
      "options": [
        "Python",
        "Java",
        "Assembly",
        "C++"
      ],
      "correctAnswer": "Assembly"
    },
    {
      "question": "إيه الفرق الرئيسي بين Compiler (المُجمّع) و Interpreter (المفسّر)؟",
      "options": [
        "المُجمّع بيترجم سطر بسطر، والمفسّر بيترجم كله مرة واحدة",
        "المُجمّع بيترجم كله مرة واحدة، والمفسّر بيترجم سطر بسطر",
        "المُجمّع بيترجم الأوامر الصوتية، والمفسّر بيترجم الأوامر المكتوبة",
        "مفيش فرق بينهم"
      ],
      "correctAnswer": "المُجمّع بيترجم كله مرة واحدة، والمفسّر بيترجم سطر بسطر"
    },
    {
      "question": "لغة Python بتستخدم Compiler ولا Interpreter؟",
      "options": [
        "Compiler",
        "Interpreter",
        "الاثنين معًا",
        "ولا واحد منهم"
      ],
      "correctAnswer": "Interpreter"
    },
    {
      "question": "لغة C بتستخدم Compiler ولا Interpreter؟",
      "options": [
        "Compiler",
        "Interpreter",
        "الاثنين معًا",
        "ولا واحد منهم"
      ],
      "correctAnswer": "Compiler"
    },
    {
      "question": "إيه نوع لغات البرمجة اللي بتستخدمها عشان تعمل بيها أي حاجة (ألعاب، مواقع، تطبيقات)؟",
      "options": [
        "لغات متخصصة (Specialized)",
        "لغات وصفية (Descriptive)",
        "لغات عامة (General-Purpose)",
        "لغات الآلة (Machine Languages)"
      ],
      "correctAnswer": "لغات عامة (General-Purpose)"
    },
    {
      "question": "لغة SQL متخصصة في إيه؟",
      "options": [
        "تصميم الألعاب",
        "تحليل البيانات الإحصائية",
        "التعامل مع قواعد البيانات",
        "بناء تطبيقات الموبايل"
      ],
      "correctAnswer": "التعامل مع قواعد البيانات"
    },
    {
      "question": "هل HTML و CSS يعتبروا لغات برمجة حقيقية؟",
      "options": [
        "آه، طبعًا",
        "لأ، دول لغات وصفية لتصميم شكل المواقع",
        "آه، بس للألعاب بس",
        "لأ، دول بيستخدموا في تحليل البيانات بس"
      ],
      "correctAnswer": "لأ، دول لغات وصفية لتصميم شكل المواقع"
    },
    {
      "question": "إيه هي 'المكتبات (Libraries)' في البرمجة؟",
      "options": [
        "أماكن بنحط فيها الكتب",
        "أكواد جاهزة مكتوبة نقدر نستخدمها عشان ننجز شغلنا أسرع",
        "أجهزة كمبيوتر إضافية",
        "أماكن لتخزين البيانات"
      ],
      "correctAnswer": "أكواد جاهزة مكتوبة نقدر نستخدمها عشان ننجز شغلنا أسرع"
    },
    {
      "question": "ليه بنستخدم المكتبات في البرمجة؟",
      "options": [
        "عشان نصعب الشغل",
        "عشان نخلي الكود أطول",
        "عشان نوفر وقت ومجهود ومكتبش الكود من الصفر",
        "عشان نخلي الكمبيوتر أبطأ"
      ],
      "correctAnswer": "عشان نوفر وقت ومجهود ومكتبش الكود من الصفر"
    },
    {
      "question": "لو عايز أحسب الجذر التربيعي لرقم في Python، إيه المكتبة اللي ممكن أستخدمها؟",
      "options": [
        "مكتبة الألعاب",
        "مكتبة الرسومات (Graphics)",
        "مكتبة الرياضيات (math)",
        "مكتبة الصوتيات"
      ],
      "correctAnswer": "مكتبة الرياضيات (math)"
    },
    {
      "question": "الكيبورد والماوس يعتبروا من إيه في الكمبيوتر؟",
      "options": [
        "أعضاء الإخراج (Output Devices)",
        "المخ (CPU)",
        "حواس الإدخال (Input Devices)",
        "الذاكرة (RAM)"
      ],
      "correctAnswer": "حواس الإدخال (Input Devices)"
    },
    {
      "question": "إيه الهدف الأساسي من كورس 'أساسيات البرمجة'؟",
      "options": [
        "تعليم الرسم",
        "فهم أساسيات التعامل مع الكمبيوتر وكتابة الأوامر ليه",
        "إصلاح الموبايلات",
        "تعلم اللغات الأجنبية"
      ],
      "correctAnswer": "فهم أساسيات التعامل مع الكمبيوتر وكتابة الأوامر ليه"
    }
  ],
  "Work-environment": [
  {
    "question": "إيه هي 'بيئة العمل' في البرمجة؟",
    "options": [
      "المكان اللي بنكتب فيه الأكواد يدويًا",
      "مجموعة الأدوات والبرامج اللي بتساعد المبرمج يكتب الكود ويشوف نتايجه",
      "جهاز كمبيوتر واحد بس",
      "مكان لتخزين الملفات القديمة"
    ],
    "correctAnswer": "مجموعة الأدوات والبرامج اللي بتساعد المبرمج يكتب الكود ويشوف نتايجه"
  },
  {
    "question": "ليه بنحتاج 'بيئة عمل' في البرمجة؟",
    "options": [
      "عشان نصعب على المبرمجين",
      "عشان نكتب الكود في ملفات المفكرة (Notepad)",
      "عشان الكود يطلع مظبوط وتكتشف الأخطاء وتشوف النتايج بسهولة",
      "عشان نقلل استخدام الكمبيوتر"
    ],
    "correctAnswer": "عشان الكود يطلع مظبوط وتكتشف الأخطاء وتشوف النتايج بسهولة"
  },
  {
    "question": "إيه هي أهم أداة في بيئة عمل المبرمج؟",
    "options": [
      "برنامج الرسام",
      "محرر الأكواد (Code Editor)",
      "متصفح الإنترنت فقط",
      "برنامج الألعاب"
    ],
    "correctAnswer": "محرر الأكواد (Code Editor)"
  },
  {
    "question": "إيه هو محرر الأكواد اللي رشحناه كأفضل خيار للمبتدئين؟",
    "options": [
      "Notepad",
      "Microsoft Word",
      "Visual Studio Code (VS Code)",
      "Paint"
    ],
    "correctAnswer": "Visual Studio Code (VS Code)"
  },
  {
    "question": "إيه الميزة اللي بيقدمها محرر الأكواد الذكي زي VS Code؟",
    "options": [
      "إصلاح جهاز الكمبيوتر بالكامل",
      "تلوين الكود وإكمال الأكواد تلقائيًا واكتشاف الأخطاء",
      "تشغيل الألعاب أسرع",
      "تحويل الصور إلى فيديو"
    ],
    "correctAnswer": "تلوين الكود وإكمال الأكواد تلقائيًا واكتشاف الأخطاء"
  },
  {
    "question": "منين بنقدر ننزّل برنامج Visual Studio Code؟",
    "options": [
      "من متجر التطبيقات على الموبايل",
      "من موقع google.com مباشرة",
      "من الموقع الرسمي code.visualstudio.com",
      "من أي موقع لتحميل البرامج المجانية"
    ],
    "correctAnswer": "من الموقع الرسمي code.visualstudio.com"
  },
  {
    "question": "إيه أهم خيارات لازم تعلم عليها صح أثناء تثبيت VS Code عشان تسهل عليك الشغل؟",
    "options": [
      "تغيير لون واجهة البرنامج",
      "إضافة خيار 'Open with Code' للقائمة لما تدوس كليك يمين على ملف أو فولدر",
      "تغيير اسم البرنامج بعد التثبيت",
      "إضافة لغات برمجة جديدة أثناء التثبيت"
    ],
    "correctAnswer": "إضافة خيار 'Open with Code' للقائمة لما تدوس كليك يمين على ملف أو فولدر"
  },
  {
    "question": "الجزء اللي بيعرض كل ملفات مشروعك في VS Code اسمه إيه؟",
    "options": [
      "Editor Area",
      "Status Bar",
      "Explorer",
      "Run and Debug"
    ],
    "correctAnswer": "Explorer"
  },
  {
    "question": "المساحة الكبيرة اللي بتكتب فيها الكود في VS Code اسمها إيه؟",
    "options": [
      "Sidebar",
      "Editor Area",
      "Extensions",
      "Search"
    ],
    "correctAnswer": "Editor Area"
  },
  {
    "question": "إيه هي 'الإضافات (Extensions)' في VS Code؟",
    "options": [
      "ملفات نظام التشغيل",
      "برامج منفصلة تمامًا عن VS Code",
      "تطبيقات أو أدوات بتضيف مميزات ووظائف جديدة لـ VS Code",
      "مشاكل في البرنامج لازم تصلحها"
    ],
    "correctAnswer": "تطبيقات أو أدوات بتضيف مميزات ووظائف جديدة لـ VS Code"
  },
  {
    "question": "ليه 'الإضافات' مهمة للمبرمجين؟",
    "options": [
      "عشان تزيد من حجم البرنامج",
      "عشان تخلي الكمبيوتر أبطأ",
      "عشان تخلي عملية البرمجة أسهل وأسرع وأكثر متعة",
      "عشان تغير شكل الأيقونات بس"
    ],
    "correctAnswer": "عشان تخلي عملية البرمجة أسهل وأسرع وأكثر متعة"
  },
  {
    "question": "اسم الإضافة اللي بتخليك تشوف شغل الـ HTML و CSS بتاعك في المتصفح أول بأول من غير تحديث يدوي هو:",
    "options": [
      "Code Formatter",
      "Material Icon Theme",
      "Live Server",
      "Python Debugger"
    ],
    "correctAnswer": "Live Server"
  },
  {
    "question": "بعد ما تثبت إضافة Live Server، إيه الزرار اللي بيظهر تحت خالص في شريط الحالة عشان تشغلها؟",
    "options": [
      "Start",
      "Run",
      "Go Live",
      "Preview"
    ],
    "correctAnswer": "Go Live"
  },
  {
    "question": "إضافة Prettier - Code formatter وظيفتها إيه؟",
    "options": [
      "تشغيل الألعاب",
      "تلوين الكود",
      "تظبيط تنسيق الكود تلقائيًا عشان يبقى شكله نضيف وسهل القراءة",
      "عرض الصور"
    ],
    "correctAnswer": "تظبيط تنسيق الكود تلقائيًا عشان يبقى شكله نضيف وسهل القراءة"
  },
  {
    "question": "إضافة Material Icon Theme بتستخدم في إيه؟",
    "options": [
      "إضافة خطوط جديدة للنص",
      "تغيير شكل أيقونات الملفات في VS Code عشان تبقى أوضح وأجمل",
      "تشغيل ملفات الفيديو",
      "تسجيل الصوت"
    ],
    "correctAnswer": "تغيير شكل أيقونات الملفات في VS Code عشان تبقى أوضح وأجمل"
  }
],
  "Html-lesson3": [
  {
    "question": "إيه هو النوع الصحيح للغة HTML؟",
    "options": [
      "لغة برمجة (Programming Language)",
      "لغة تصميم (Design Language)",
      "لغة وصفية (Markup Language)",
      "لغة استعلام (Query Language)"
    ],
    "correctAnswer": "لغة وصفية (Markup Language)"
  },
  {
    "question": "ليه HTML مش بنعتبرها لغة برمجة؟",
    "options": [
      "لأنها بتتعامل مع الصور بس",
      "لأنها مبتديش أوامر للكمبيوتر عشان يفكر أو يعمل حسابات",
      "لأنها صعبة التعلم",
      "لأنها بتستخدم في الألعاب فقط"
    ],
    "correctAnswer": "لأنها مبتديش أوامر للكمبيوتر عشان يفكر أو يعمل حسابات"
  },
  {
    "question": "إيه هو الاسم المتعارف عليه لأي صفحة رئيسية لأي موقع ويب؟",
    "options": [
      "main.html",
      "home.html",
      "index.html",
      "start.html"
    ],
    "correctAnswer": "index.html"
  },
  {
    "question": "إيه هو الامتداد الصحيح لملف HTML؟",
    "options": [
      ".htm",
      ".html",
      ".web",
      ".doc"
    ],
    "correctAnswer": ".html"
  },
  {
    "question": "إيه هو الاختصار في VS Code اللي بيعمل الهيكل الأساسي لـ HTML5 لما تكتب '!' وتدوس Enter؟",
    "options": [
      "html:3",
      "html:full",
      "!",
      "doc:html"
    ],
    "correctAnswer": "!"
  },
  {
    "question": "الوسم `<!DOCTYPE html>` وظيفته إيه في صفحة HTML؟",
    "options": [
      "بيحدد نوع الخط",
      "بيعلن للمتصفح إن ده مستند HTML5",
      "بيحط عنوان للصفحة",
      "بيعمل تعليق"
    ],
    "correctAnswer": "بيعلن للمتصفح إن ده مستند HTML5"
  },
  {
    "question": "الوسم الأساسي اللي بيحتوي على كل محتوى صفحة HTML هو:",
    "options": [
      "```<head>```",
      "```<body>```",
      "```<html>```",
      "```<meta>```"
    ],
    "correctAnswer": "```<html>```"
  },
  {
    "question": "الوسم اللي بيحتوي على معلومات عن الصفحة ومش بتظهر للمستخدم مباشرة هو:",
    "options": [
      "```<body>```",
      "```<head>```",
      "```<footer>```",
      "```<main>```"
    ],
    "correctAnswer": "```<head>```"
  },
  {
    "question": "إيه هو الوسم اللي بيحدد العنوان اللي بيظهر في تبويبة المتصفح من فوق؟",
    "options": [
      "```<header>```",
      "```<h1>```",
      "```<title>```",
      "```<nav>```"
    ],
    "correctAnswer": "```<title>```"
  },
  {
    "question": "ليه بنستخدم وسم ```<meta charset=\"UTF-8\">``` في HTML؟",
    "options": [
      "لتغيير لون خلفية الصفحة",
      "لدعم عرض كل اللغات زي العربي بشكل صحيح",
      "لإضافة صور للصفحة",
      "لتحديد حجم الخط"
    ],
    "correctAnswer": "لدعم عرض كل اللغات زي العربي بشكل صحيح"
  },
  {
    "question": "الوسم اللي بيحتوي على كل المحتوى المرئي اللي بيظهر للمستخدم في الصفحة هو:",
    "options": [
      "```<head>```",
      "```<body>```",
      "```<style>```",
      "```<script>```"
    ],
    "correctAnswer": "```<body>```"
  },
  {
    "question": "إيه هي وظيفة إضافة Live Server اللي ثبتناها في VS Code؟",
    "options": [
      "بتكتب الكود بدالنا",
      "بتشغل ألعاب الفيديو",
      "بتخلي المتصفح يعمل تحديث تلقائي للصفحة لما نعمل حفظ للكود",
      "بتغير ألوان واجهة VS Code"
    ],
    "correctAnswer": "بتخلي المتصفح يعمل تحديث تلقائي للصفحة لما نعمل حفظ للكود"
  },
  {
    "question": "بعد ما تكتب كود HTML وتعمل حفظ، إزاي بتشغل Live Server من VS Code؟",
    "options": [
      "بتدوس زرار التشغيل في قائمة Start",
      "بتدوس كليك يمين في الكود وتختار 'Open with Live Server'",
      "بتكتب 'run server' في المتصفح",
      "بتعمل ريستارت للكمبيوتر"
    ],
    "correctAnswer": "بتدوس كليك يمين في الكود وتختار 'Open with Live Server'"
  },
  {
    "question": "الوسم `<html>` بيحتوي على سمة `lang=\"en\"`، دي وظيفتها إيه؟",
    "options": [
      "بتحدد اتجاه الكتابة من اليمين للشمال",
      "بتحدد حجم الصفحة",
      "بتحدد لغة محتوى الصفحة (هنا الإنجليزية)",
      "بتغير نوع الخط"
    ],
    "correctAnswer": "بتحدد لغة محتوى الصفحة (هنا الإنجليزية)"
  },
  {
    "question": "أنهي وسم من دول مش بيظهر محتواه بشكل مباشر للمستخدم في المتصفح؟",
    "options": [
      "```<body>```",
      "```<p>```",
      "```<h1>```",
      "```<head>```"
    ],
    "correctAnswer": "```<head>```"
  },
],
  "Html-lesson4": [
  {
    "question": "يعني إيه عنصر (Element) في HTML؟",
    "options": [
      "تاج بس",
      "محتوى بس",
      "تاج فتح + محتوى + تاج قفل",
      "Attribute بس"
    ],
    "correctAnswer": "تاج فتح + محتوى + تاج قفل"
  },
  {
    "question": "إيه هو التاج (Tag) في HTML؟",
    "options": [
      "كود CSS",
      "تعليمات JavaScript",
      "وسم محطوط بين <>",
      "أمر بيتنفذ في الباك اند"
    ],
    "correctAnswer": "وسم محطوط بين <>"
  },
  {
    "question": "أنهي واحد من دول يعتبر تاج مزدوج (Paired Tag)؟",
    "options": [
      "<br>",
      "<img>",
      "<hr>",
      "<p>"
    ],
    "correctAnswer": "<p>"
  },
  {
    "question": "أنهي عنصر من دول Self-Closing؟",
    "options": [
      "<h1>",
      "<p>",
      "<img>",
      "<div>"
    ],
    "correctAnswer": "<img>"
  },
  {
    "question": "فين بيتكتب الـ Attribute؟",
    "options": [
      "في تاج القفل",
      "جوا التاج المفتوح",
      "بعد الـ DOCTYPE",
      "برا الوسوم خالص"
    ],
    "correctAnswer": "جوا التاج المفتوح"
  },
  {
    "question": "شكل الـ Attribute الصحيح؟",
    "options": [
      "name-value",
      "key=value",
      "اسم=قيمة",
      'attribute="value"'
    ],
    "correctAnswer": 'attribute="value"'
  },
  {
    "question": "ليه بنستخدم الـ alt في عنصر الصورة؟",
    "options": [
      "عشان نغير لون الصورة",
      "عشان نضيف رابط",
      "عشان نكتب وصف بديل للصورة",
      "عشان نتحكم في حجمها"
    ],
    "correctAnswer": "عشان نكتب وصف بديل للصورة"
  },
  {
    "question": "أنهي عنصر بيستخدم عشان نعمل خط أفقي؟",
    "options": [
      "<br>",
      "<line>",
      "<hr>",
      "<border>"
    ],
    "correctAnswer": "<hr>"
  },
  {
    "question": "عنصر <br> بيستخدم في إيه؟",
    "options": [
      "إضافة صورة",
      "كتابة عنوان",
      "إضافة سطر جديد",
      "تلوين الخلفية"
    ],
    "correctAnswer": "إضافة سطر جديد"
  },
  {
    "question": "أنهي واحدة من دول تعتبر عنصر Heading؟",
    "options": [
      "<div>",
      "<p>",
      "<h3>",
      "<img>"
    ],
    "correctAnswer": "<h3>"
  },
  {
    "question": "كام مستوى لعناصر العنوان (Heading)؟",
    "options": [
      "3 مستويات",
      "5 مستويات",
      "6 مستويات",
      "10 مستويات"
    ],
    "correctAnswer": "6 مستويات"
  },
  {
    "question": "إيه هو الغرض من عنصر <p>؟",
    "options": [
      "كتابة أكواد",
      "عرض صور",
      "إضافة روابط",
      "كتابة فقرة نصية"
    ],
    "correctAnswer": "كتابة فقرة نصية"
  },
  {
    "question": "هل لازم نقفل العناصر المزدوجة؟",
    "options": [
      "آه طبعًا",
      "مش شرط",
      "حسب العنصر",
      "لأ ممنوع نقفلها"
    ],
    "correctAnswer": "آه طبعًا"
  },
  {
    "question": "أنهي واحدة من دول مش Attribute؟",
    "options": [
      "class",
      "id",
      "src",
      "print"
    ],
    "correctAnswer": "print"
  },
  {
    "question": "عنصر <img> بيحتاج على الأقل إيه؟",
    "options": [
      "alt بس",
      "src بس",
      "src و alt",
      "id و class"
    ],
    "correctAnswer": "src و alt"
  }
],
"Html-lesson5": [
  {
    "question": "إيه التاج اللي بنستخدمه علشان نكتب عنوان كبير في الصفحة؟",
    "options": ["<h1>", "<p>", "<br>", "<div>"],
    "correctAnswer": "<h1>"
  },
  {
    "question": "أنهي تاج بنستخدمه لكتابة فقرة نصية؟",
    "options": ["<p>", "<h2>", "<span>", "<hr>"],
    "correctAnswer": "<p>"
  },
  {
    "question": "لو عايز تنزل سطر جديد، تستخدم؟",
    "options": ["<br>", "<hr>", "<h6>", "<p>"],
    "correctAnswer": "<br>"
  },
  {
    "question": "لو عايز تفصل بين قسمين في الصفحة بخط أفقي، تستخدم؟",
    "options": ["<hr>", "<br>", "<p>", "<h3>"],
    "correctAnswer": "<hr>"
  },
  {
    "question": "كام تاج لعناوين النصوص موجودين في HTML؟",
    "options": ["3", "5", "6", "7"],
    "correctAnswer": "6"
  },
  {
    "question": "إيه الفرق بين <h1> و <h6>؟",
    "options": [
      "<h1> أكبر وأوضح، <h6> أصغر",
      "<h6> أكبر، <h1> أصغر",
      "الاتنين نفس الحجم",
      "مفيش فرق"
    ],
    "correctAnswer": "<h1> أكبر وأوضح، <h6> أصغر"
  },
  {
    "question": "هل التاج <br> ليه وسم إغلاق؟",
    "options": ["لأ، Self-Closing", "آه لازم يتقفل", "بس في بعض المتصفحات", "لوحده بيقفل نفسه بعد <p>"],
    "correctAnswer": "لأ، Self-Closing"
  },
  {
    "question": "أنهي تاج من دول بيعتبر Self-Closing؟",
    "options": ["<hr>", "<p>", "<h3>", "<div>"],
    "correctAnswer": "<hr>"
  },
  {
    "question": "ليه بنستخدم <p> بدل ما نكتب الكلام كده وخلاص؟",
    "options": [
      "عشان ينظم الفقرة ويديها مساحة",
      "عشان يخلي الكلام ملوّن",
      "عشان يظهر في عنوان المتصفح",
      "عشان يضيف صورة"
    ],
    "correctAnswer": "عشان ينظم الفقرة ويديها مساحة"
  },
  {
    "question": "هل ممكن تستخدم أكتر من <h1> في نفس الصفحة؟",
    "options": ["آه، بس يفضل مرة واحدة", "لأ، مش هتشتغل الصفحة", "آه، ويفضل تكررها", "ينفع بس لازم جوه <p>"],
    "correctAnswer": "آه، بس يفضل مرة واحدة"
  },
  {
    "question": "فين بنكتب العناصر زي <h1> و <p>؟",
    "options": ["جوا <body>", "جوا <head>", "جوا <meta>", "قبل <!DOCTYPE>"],
    "correctAnswer": "جوا <body>"
  },
  {
    "question": "إيه اللي بيحصل لو استخدمت <br> جوه <p>؟",
    "options": ["بينزل الكلام لسطر جديد", "بيحذف الفقرة", "يخلي النص bold", "ميأثرش خالص"],
    "correctAnswer": "بينزل الكلام لسطر جديد"
  },
  {
    "question": "التاج <hr> بيستخدم في؟",
    "options": [
      "فصل المحتوى بخط أفقي",
      "تغيير لون النص",
      "عرض صورة",
      "رسم جدول"
    ],
    "correctAnswer": "فصل المحتوى بخط أفقي"
  },
  {
    "question": "لو عايز تعمل عنوان فرعي، أنهي تاج تستخدمه؟",
    "options": ["<h3>", "<p>", "<br>", "<title>"],
    "correctAnswer": "<h3>"
  },
  {
    "question": "ليه مهم نستخدم التاجات الصح للنصوص؟",
    "options": [
      "عشان تنظيم الصفحة وسهولة القراءة",
      "عشان نحمي الموقع",
      "عشان نستخدم CSS",
      "عشان نمنع الاختراق"
    ],
    "correctAnswer": "عشان تنظيم الصفحة وسهولة القراءة"
  }
],
  "Html-lesson6": [
  {
    "question": "إيه التاج اللي بنستخدمه علشان نعمل رابط؟",
    "options": ["<a>", "<link>", "<href>", "<url>"],
    "correctAnswer": "<a>"
  },
  {
    "question": "خاصية href في تاج <a> بنستخدمها علشان؟",
    "options": [
      "نكتب عنوان الرابط",
      "نغير لون النص",
      "نضيف صورة",
      "نكتب عنوان الصفحة"
    ],
    "correctAnswer": "نكتب عنوان الرابط"
  },
  {
    "question": "إيه اللي بيحصل لما نستخدم target=\"_blank\"؟",
    "options": [
      "الرابط يفتح في تاب جديد",
      "الرابط مايفتحش",
      "يظهر تنبيه للمستخدم",
      "يغير لون الخلفية"
    ],
    "correctAnswer": "الرابط يفتح في تاب جديد"
  },
  {
    "question": "أنهي واحد يعتبر رابط لموقع خارجي؟",
    "options": [
      "<a href=\"https://www.google.com\">جوجل</a>",
      "<a href=\"about.html\">عنّا</a>",
      "<a href=\"tel:0123456789\">اتصل بينا</a>",
      "<a href=\"cv.pdf\" download>حمّل CV</a>"
    ],
    "correctAnswer": "<a href=\"https://www.google.com\">جوجل</a>"
  },
  {
    "question": "إزاي تعمل رابط لملف PDF؟",
    "options": [
      "<a href=\"file.pdf\">افتح الملف</a>",
      "<a pdf=\"file.pdf\">افتح الملف</a>",
      "<file link=\"file.pdf\">افتح الملف</file>",
      "<a src=\"file.pdf\">افتح الملف</a>"
    ],
    "correctAnswer": "<a href=\"file.pdf\">افتح الملف</a>"
  },
  {
    "question": "إزاي تخلي الرابط يحمل الملف مش يفتحه؟",
    "options": [
      "تزود attribute اسمه download",
      "تستخدم <download>",
      "تكتب type=\"download\"",
      "تغير الامتداد"
    ],
    "correctAnswer": "تزود attribute اسمه download"
  },
  {
    "question": "إيه الاختيار الصح لعمل رابط لمكالمة هاتف؟",
    "options": [
      "<a href=\"tel:0123456789\">كلمنا</a>",
      "<a phone=\"0123456789\">كلمنا</a>",
      "<phone href=\"0123456789\">كلمنا</phone>",
      "<a href=\"call:0123456789\">كلمنا</a>"
    ],
    "correctAnswer": "<a href=\"tel:0123456789\">كلمنا</a>"
  },
  {
    "question": "لو عايز تعمل رابط لواتساب، تكتب إيه؟",
    "options": [
      "<a href=\"https://wa.me/201234567890\">واتساب</a>",
      "<a href=\"wa:201234567890\">واتساب</a>",
      "<a href=\"whatsapp.com/user/201234567890\">واتساب</a>",
      "<a href=\"tel:+201234567890\">واتساب</a>"
    ],
    "correctAnswer": "<a href=\"https://wa.me/201234567890\">واتساب</a>"
  },
  {
    "question": "هل لازم أستخدم / أقفل تاج <a>؟",
    "options": [
      "آه لازم أقفله",
      "لا التاج ده Self-Closing",
      "ينفع تسيبه مفتوح",
      "لازم تقفله بس بـ <link>"
    ],
    "correctAnswer": "آه لازم أقفله"
  },
  {
    "question": "لو الرابط داخلي يعني؟",
    "options": [
      "صفحة تانية في نفس الموقع",
      "رابط على فيسبوك",
      "ملف PDF",
      "رابط لرقم تليفون"
    ],
    "correctAnswer": "صفحة تانية في نفس الموقع"
  },
  {
    "question": "رابط داخلي صح يكون شكله؟",
    "options": [
      "<a href=\"about.html\">عنّا</a>",
      "<a href=\"https://about.html\">عنّا</a>",
      "<a page=\"about.html\">عنّا</a>",
      "<a src=\"about.html\">عنّا</a>"
    ],
    "correctAnswer": "<a href=\"about.html\">عنّا</a>"
  },
  {
    "question": "target=\"_blank\" معناه؟",
    "options": [
      "يفتح الرابط في تاب جديد",
      "يقفل التاب اللي المستخدم فيها",
      "يحفظ الرابط",
      "يرجع المستخدم لأول الصفحة"
    ],
    "correctAnswer": "يفتح الرابط في تاب جديد"
  },
  {
    "question": "هل ينفع تستخدم <a> بدون href؟",
    "options": [
      "آه، بس مش هيشتغل كرابط",
      "لأ، هيحصل خطأ",
      "آه وهيشتغل عادي",
      "لازم تكتب src مش href"
    ],
    "correctAnswer": "آه، بس مش هيشتغل كرابط"
  },
  {
    "question": "إيه الصح في التالي؟",
    "options": [
      "<a href=\"mailto:email@example.com\">ابعتلنا إيميل</a>",
      "<a href=\"mail:email@example.com\">ابعتلنا إيميل</a>",
      "<a src=\"email@example.com\">ابعتلنا إيميل</a>",
      "<mail href=\"email@example.com\">ابعتلنا إيميل</mail>"
    ],
    "correctAnswer": "<a href=\"mailto:email@example.com\">ابعتلنا إيميل</a>"
  },
  {
    "question": "لو عايز تستخدم <a> علشان الرابط يظهر كزرار، تعمل إيه؟",
    "options": [
      "تستخدم CSS مع التاج",
      "تغير التاج لـ <button>",
      "تستخدم href في <div>",
      "تضيف download تلقائيًا"
    ],
    "correctAnswer": "تستخدم CSS مع التاج"
  }
],
"Html-lesson7": [
  {
    "question": "إيه التاج اللي بنستخدمه علشان نعرض صورة في HTML؟",
    "options": ["<img>", "<image>", "<src>", "<pic>"],
    "correctAnswer": "<img>"
  },
  {
    "question": "الخاصية `src` في تاج `<img>` معناها إيه؟",
    "options": [
      "نكتب فيها نص بديل",
      "نختار حجم الصورة",
      "نحدد عنوان أو مسار الصورة",
      "نغير لون الصورة"
    ],
    "correctAnswer": "نحدد عنوان أو مسار الصورة"
  },
  {
    "question": "الخاصية `alt` في `<img>` بتستخدم في إيه؟",
    "options": [
      "تحديد عنوان الصورة",
      "كتابة وصف بديل للصورة لو مظهرتش",
      "تغيير حجم الصورة",
      "تحريك الصورة"
    ],
    "correctAnswer": "كتابة وصف بديل للصورة لو مظهرتش"
  },
  {
    "question": "إيه هو الشكل الصحيح لتاج صورة؟",
    "options": [
      "<img src=\"cat.jpg\" alt=\"قطة\">",
      "<img>cat.jpg</img>",
      "<image src=\"cat.jpg\">",
      "<pic href=\"cat.jpg\">"
    ],
    "correctAnswer": "<img src=\"cat.jpg\" alt=\"قطة\">"
  },
  {
    "question": "هل تاج `<img>` بيتقفل؟",
    "options": [
      "آه، لازم أكتب </img>",
      "لا، هو Self-closing",
      "لازم يتقفل بـ <close>",
      "مينفعش يتقفل"
    ],
    "correctAnswer": "لا، هو Self-closing"
  },
  {
    "question": "إيه الفرق بين `<img src=\"a.jpg\">` و `<img src=\"a.jpg\" alt=\"صورة\">`؟",
    "options": [
      "الأول أسرع",
      "التاني بيوفر وصف بديل لو الصورة مظهرتش",
      "مفيش فرق",
      "الأول بيشتغل على المتصفح بس"
    ],
    "correctAnswer": "التاني بيوفر وصف بديل لو الصورة مظهرتش"
  },
  {
    "question": "لو الصورة مش موجودة في نفس مجلد المشروع، تعمل إيه؟",
    "options": [
      "تحط المسار الكامل للصورة أو اللينك",
      "تغير امتدادها",
      "تغير اسم المشروع",
      "تحطها في ملف CSS"
    ],
    "correctAnswer": "تحط المسار الكامل للصورة أو اللينك"
  },
  {
    "question": "إيه الخاصية اللي بتحدد عرض الصورة؟",
    "options": ["alt", "height", "size", "width"],
    "correctAnswer": "width"
  },
  {
    "question": "علشان تخلي الصورة تظهر بحجم معين يدويًا، تعمل إيه؟",
    "options": [
      "تستخدم CSS أو الخصائص width و height",
      "تحطها في ملف Word",
      "تغير نوع المتصفح",
      "تكتب حجمها داخل alt"
    ],
    "correctAnswer": "تستخدم CSS أو الخصائص width و height"
  },
  {
    "question": "هل ينفع الصورة تكون داخل رابط؟",
    "options": [
      "آه، عادي جدًا",
      "لأ، الصورة مش بتشتغل داخل روابط",
      "لازم تستخدم تاج مختلف",
      "ممكن بس على الموبايل"
    ],
    "correctAnswer": "آه، عادي جدًا"
  },
  {
    "question": "إيه الشكل الصحيح لصورة جوا لينك؟",
    "options": [
      "<a href=\"x.html\"><img src=\"y.jpg\"></a>",
      "<img><a href=\"x.html\">y.jpg</a></img>",
      "<link><img src=\"x\"></link>",
      "<img src=\"y.jpg\"> <a href=\"x.html\">رابط</a>"
    ],
    "correctAnswer": "<a href=\"x.html\"><img src=\"y.jpg\"></a>"
  },
  {
    "question": "ليه بنستخدم alt مع الصور؟",
    "options": [
      "لتجميل الكود",
      "لتحسين الوصول لذوي الاحتياجات",
      "لتشغيل الصورة أسرع",
      "لتحديد مكان ظهورها"
    ],
    "correctAnswer": "لتحسين الوصول لذوي الاحتياجات"
  },
  {
    "question": "هل ينفع تعرض صورة من الإنترنت مباشرة؟",
    "options": [
      "آه باستخدام لينك مباشر في src",
      "لأ لازم تنزلها الأول",
      "بس في متصفحات معينة",
      "لازم تحولها PDF"
    ],
    "correctAnswer": "آه باستخدام لينك مباشر في src"
  },
  {
    "question": "لو كتبت alt غلط، إيه اللي هيحصل؟",
    "options": [
      "الصورة مش هتظهر",
      "الكود هيقف",
      "هيظهر نص غلط بدل الصورة",
      "الصورة تتقلب"
    ],
    "correctAnswer": "هيظهر نص غلط بدل الصورة"
  },
  {
    "question": "إيه اللي يحصل لو نسيت src في `<img>`؟",
    "options": [
      "الصورة مش هتظهر",
      "يظهر مربع فاضي أو كسر",
      "alt يظهر بدل الصورة",
      "كل ما سبق"
    ],
    "correctAnswer": "كل ما سبق"
  }
],
"Html-lesson8": [
  {
    "question": "إيه التاج اللي بنستخدمه علشان نعمل قائمة غير مرتبة؟",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "correctAnswer": "<ul>"
  },
  {
    "question": "إيه التاج اللي بيستخدم لعنصر داخل أي قائمة؟",
    "options": ["<li>", "<ol>", "<ul>", "<item>"],
    "correctAnswer": "<li>"
  },
  {
    "question": "إيه الفرق بين <ul> و <ol>؟",
    "options": [
      "<ul> للقوائم المرتبة و<ol> لغير المرتبة",
      "اللي اتنين واحد",
      "<ul> لغير المرتبة و<ol> للمرتبة",
      "<ol> للقوائم العمودية بس"
    ],
    "correctAnswer": "<ul> لغير المرتبة و<ol> للمرتبة"
  },
  {
    "question": "علشان تعمل قائمة مرتبة فيها 3 عناصر، تبدأ بإيه؟",
    "options": [
      "<ol><li>...</li><li>...</li><li>...</li></ol>",
      "<ul><item>...</item></ul>",
      "<list><li>...</li></list>",
      "<ol><ol>...</ol></ol>"
    ],
    "correctAnswer": "<ol><li>...</li><li>...</li><li>...</li></ol>"
  },
  {
    "question": "هل ينفع تحط قائمة داخل قائمة؟",
    "options": [
      "آه، باستخدام قائمة متداخلة",
      "لأ، HTML مش بيدعم ده",
      "آه بس لازم باستخدام CSS",
      "ينفع بس جوه جدول"
    ],
    "correctAnswer": "آه، باستخدام قائمة متداخلة"
  },
  {
    "question": "إيه التاج اللي مش بيستخدم في القوائم؟",
    "options": ["<ul>", "<ol>", "<li>", "<div>"],
    "correctAnswer": "<div>"
  },
  {
    "question": "يعني إيه قائمة غير مرتبة؟",
    "options": [
      "قائمة بدون أرقام أو ترتيب محدد",
      "قائمة فيها أرقام",
      "قائمة جوه جدول",
      "قائمة مرتبة بالعكس"
    ],
    "correctAnswer": "قائمة بدون أرقام أو ترتيب محدد"
  },
  {
    "question": "لو عايز تبدأ قائمة مرتبة بالأحرف بدل الأرقام، تستخدم إيه؟",
    "options": [
      "type=\"a\" في <ol>",
      "alt=\"a\" في <ol>",
      "style=\"a\" في <li>",
      "id=\"a\" في <ol>"
    ],
    "correctAnswer": "type=\"a\" في <ol>"
  },
  {
    "question": "إيه اللي بيحصل لو نسيت تغلق تاج <li>؟",
    "options": [
      "العنصر يظهر بس ممكن يعمل مشاكل",
      "الكود مش يشتغل خالص",
      "القائمة تبقى رأسية",
      "يتحول لـ <ul>"
    ],
    "correctAnswer": "العنصر يظهر بس ممكن يعمل مشاكل"
  },
  {
    "question": "هل ممكن أستخدم CSS لتغيير شكل النقطة في <ul>؟",
    "options": [
      "آه، باستخدام list-style-type",
      "لأ، لازم JavaScript",
      "آه، باستخدام font-weight",
      "ينفع بس في <ol> مش <ul>"
    ],
    "correctAnswer": "آه، باستخدام list-style-type"
  },
  {
    "question": "إيه الشكل الصحيح لقائمة غير مرتبة فيها عنصرين؟",
    "options": [
      "<ul><li>أول</li><li>تاني</li></ul>",
      "<ul><item>أول</item><item>تاني</item></ul>",
      "<ol><li>أول</li><li>تاني</li></ol>",
      "<list><li>أول</li><li>تاني</li></list>"
    ],
    "correctAnswer": "<ul><li>أول</li><li>تاني</li></ul>"
  },
  {
    "question": "لو عايز تبدأ الترقيم في <ol> من رقم 5 تعمل إيه؟",
    "options": [
      "تستخدم start=\"5\"",
      "تستخدم value=\"5\" في كل <li>",
      "تستخدم type=\"5\"",
      "تبدأ بـ <li>5</li>"
    ],
    "correctAnswer": "تستخدم start=\"5\""
  },
  {
    "question": "هل ممكن أحط صور أو روابط جوا <li>؟",
    "options": [
      "آه، مفيش مشكلة",
      "لأ، <li> لازم يكون نص بس",
      "آه بس بشرط تستخدم <ul> مش <ol>",
      "ممكن بس في HTML5"
    ],
    "correctAnswer": "آه، مفيش مشكلة"
  },
  {
    "question": "يعني إيه list-style-type: none؟",
    "options": [
      "بتشيل النقط أو الأرقام من القائمة",
      "بتحول <ul> لـ <ol>",
      "بتخلي القائمة تشتغل على الموبايل",
      "بتخفي القائمة تمامًا"
    ],
    "correctAnswer": "بتشيل النقط أو الأرقام من القائمة"
  },
  {
    "question": "هل ينفع أعمل قوائم أفقية باستخدام HTML فقط؟",
    "options": [
      "لأ، لازم CSS",
      "آه، باستخدام <ol> بس",
      "ينفع باستخدام <li inline>",
      "HTML بيخليها تلقائي كده"
    ],
    "correctAnswer": "لأ، لازم CSS"
  }
],
"Html-lesson9": [
  {
    "question": "إيه التاج اللي بنستخدمه علشان نبدأ جدول؟",
    "options": ["<table>", "<thead>", "<tr>", "<td>"],
    "correctAnswer": "<table>"
  },
  {
    "question": "إيه فائدة تاج <tr>؟",
    "options": [
      "بيمثل صف في الجدول",
      "بيمثل عمود في الجدول",
      "بيمثل رأس الجدول",
      "بيعمل حدود للجدول"
    ],
    "correctAnswer": "بيمثل صف في الجدول"
  },
  {
    "question": "إيه الفرق بين <td> و <th>؟",
    "options": [
      "<td> لبيانات الجدول، <th> لعناوين الأعمدة",
      "الاتنين لنفس الغرض",
      "<th> بيكون في آخر الجدول",
      "<td> بيحط صورة و<th> للنصوص"
    ],
    "correctAnswer": "<td> لبيانات الجدول، <th> لعناوين الأعمدة"
  },
  {
    "question": "لو عايز تعمل صف فيه 3 خانات، تكتب إيه؟",
    "options": [
      "<tr><td></td><td></td><td></td></tr>",
      "<tr><th></th></th><td></td></tr>",
      "<tr><td><td><td></tr>",
      "<table><tr><td></td></tr></table>"
    ],
    "correctAnswer": "<tr><td></td><td></td><td></td></tr>"
  },
  {
    "question": "إيه التاج اللي بيستخدم لعناوين الأعمدة في أول الجدول؟",
    "options": ["<th>", "<td>", "<tr>", "<caption>"],
    "correctAnswer": "<th>"
  },
  {
    "question": "هل ينفع أستخدم <thead> و<tbody>؟",
    "options": [
      "آه، لتقسيم رأس الجدول ومحتواه",
      "لأ، دول تاجات قديمة",
      "ينفع بس في CSS",
      "آه، بس لازم <tfoot> الأول"
    ],
    "correctAnswer": "آه، لتقسيم رأس الجدول ومحتواه"
  },
  {
    "question": "علشان تدمج خليتين أفقيًا تستخدم إيه؟",
    "options": [
      "colspan",
      "rowspan",
      "merge",
      "span"
    ],
    "correctAnswer": "colspan"
  },
  {
    "question": "علشان تدمج خليتين رأسيًا تستخدم إيه؟",
    "options": [
      "rowspan",
      "colspan",
      "vertical-merge",
      "cellspan"
    ],
    "correctAnswer": "rowspan"
  },
  {
    "question": "إيه فائدة تاج <caption>؟",
    "options": [
      "بيكتب عنوان للجدول",
      "بيعمل حد للجدول",
      "بيحط وصف للصورة",
      "بيستخدم في الجداول التفاعلية بس"
    ],
    "correctAnswer": "بيكتب عنوان للجدول"
  },
  {
    "question": "لو عايز الجدول يكون منظم ومرتب في الكود، تعمل إيه؟",
    "options": [
      "تستخدم <thead> و<tbody> و<tfoot>",
      "تحط الجدول جوه <ul>",
      "تخلي كل الخانات <th>",
      "تشيل <tr> وتستخدم <div> بدلها"
    ],
    "correctAnswer": "تستخدم <thead> و<tbody> و<tfoot>"
  },
  {
    "question": "هل ينفع أحط صورة أو زر جوا <td>؟",
    "options": [
      "آه، ينفع تحط أي محتوى",
      "لأ، لازم نصوص بس",
      "ينفع بس في HTML5",
      "آه، بس لازم تستخدم <th> مش <td>"
    ],
    "correctAnswer": "آه، ينفع تحط أي محتوى"
  },
  {
    "question": "إيه الصح في كتابة جدول فيه عنوان وجدول بيانات؟",
    "options": [
      "<table><caption>العنوان</caption><tr><td>بيانات</td></tr></table>",
      "<caption><table>العنوان<tr><td>بيانات</td></tr></table></caption>",
      "<table><tr><caption>العنوان</caption><td>بيانات</td></tr></table>",
      "<table><tr><td>بيانات</td></tr><caption>العنوان</caption></table>"
    ],
    "correctAnswer": "<table><caption>العنوان</caption><tr><td>بيانات</td></tr></table>"
  },
  {
    "question": "لو عندك صف فيه عنوان و3 بيانات، إيه الترتيب؟",
    "options": [
      "<tr><th>عنوان</th><td>1</td><td>2</td><td>3</td></tr>",
      "<th>عنوان</th><tr><td>1</td><td>2</td><td>3</td></tr>",
      "<tr><td>1</td><td>2</td><td>3</td><th>عنوان</th></tr>",
      "<tr><caption>عنوان</caption><td>1</td><td>2</td><td>3</td></tr>"
    ],
    "correctAnswer": "<tr><th>عنوان</th><td>1</td><td>2</td><td>3</td></tr>"
  },
  {
    "question": "هل الجداول في HTML تدعم التداخل (يعني جدول داخل جدول)؟",
    "options": [
      "آه، بس لازم تنظيم كويس",
      "لأ، الجداول متشتغلش كده",
      "ينفع بس بـ CSS",
      "ينفع بس جوه <div>"
    ],
    "correctAnswer": "آه، بس لازم تنظيم كويس"
  },
  {
    "question": "إيه أفضل استخدام للجداول في HTML؟",
    "options": [
      "لعرض البيانات بشكل منظم",
      "لبناء التصميم الأساسي للموقع",
      "لعمل القوائم الجانبية",
      "لتنسيق الصور"
    ],
    "correctAnswer": "لعرض البيانات بشكل منظم"
  }
],
"Html-lesson10": [
  {
    "question": "إيه التاج اللي بنبدأ بيه أي نموذج (Form) في HTML؟",
    "options": ["<form>", "<input>", "<label>", "<submit>"],
    "correctAnswer": "<form>"
  },
  {
    "question": "إيه فائدة التاج <input>؟",
    "options": [
      "لإدخال البيانات من المستخدم",
      "لعرض نصوص ثابتة",
      "لإظهار العناوين",
      "لتنظيم الجداول"
    ],
    "correctAnswer": "لإدخال البيانات من المستخدم"
  },
  {
    "question": "إزاي نحدد نوع الإدخال في <input>؟",
    "options": [
      "عن طريق الخاصية type",
      "عن طريق الخاصية form",
      "باستخدام <label>",
      "بكتابة النص بين التاجين"
    ],
    "correctAnswer": "عن طريق الخاصية type"
  },
  {
    "question": "علشان تعمل حقل نص عادي، تستخدم إيه؟",
    "options": [
      "<input type=\"text\">",
      "<form type=\"text\">",
      "<input text>",
      "<textbox>"
    ],
    "correctAnswer": "<input type=\"text\">"
  },
  {
    "question": "لو عايز تعمل زرار إرسال النموذج تستخدم إيه؟",
    "options": [
      "<input type=\"submit\">",
      "<input type=\"send\">",
      "<button type=\"form\">",
      "<form submit>"
    ],
    "correctAnswer": "<input type=\"submit\">"
  },
  {
    "question": "إيه التاج اللي بيستخدم لكتابة عنوان فوق أي input؟",
    "options": ["<label>", "<span>", "<title>", "<caption>"],
    "correctAnswer": "<label>"
  },
  {
    "question": "هل ممكن نربط <label> بـ <input>؟",
    "options": [
      "آه، باستخدام for و id",
      "لأ، كل واحد مستقل",
      "ينفع بس في CSS",
      "آه، لكن لازم يكونوا جوا div"
    ],
    "correctAnswer": "آه، باستخدام for و id"
  },
  {
    "question": "لو عايز تخلي المستخدم يختار من قايمة منسدلة، تستخدم إيه؟",
    "options": ["<select>", "<input type=\"dropdown\">", "<list>", "<menu>"],
    "correctAnswer": "<select>"
  },
  {
    "question": "داخل <select>، إيه التاج اللي بيحدد العناصر؟",
    "options": ["<option>", "<item>", "<li>", "<value>"],
    "correctAnswer": "<option>"
  },
  {
    "question": "إزاي تعمل خانة إدخال للبريد الإلكتروني؟",
    "options": [
      "<input type=\"email\">",
      "<input type=\"mail\">",
      "<input email>",
      "<email>"
    ],
    "correctAnswer": "<input type=\"email\">"
  },
  {
    "question": "لو عايز خانة اختيار (checkbox)، تستخدم إيه؟",
    "options": [
      "<input type=\"checkbox\">",
      "<input type=\"option\">",
      "<check>",
      "<input check>"
    ],
    "correctAnswer": "<input type=\"checkbox\">"
  },
  {
    "question": "إيه الفرق بين checkbox و radio؟",
    "options": [
      "checkbox لاختيارات متعددة، radio لاختيار واحد",
      "radio اختيارات متعددة، checkbox لاختيار واحد",
      "الفرق في الشكل بس",
      "radio لازم يكون في جدول"
    ],
    "correctAnswer": "checkbox لاختيارات متعددة، radio لاختيار واحد"
  },
  {
    "question": "لو عايز تخلي خانة مطلوبة، تستخدم إيه؟",
    "options": [
      "تضيف required",
      "تستخدم must=\"true\"",
      "تحطها جوه <form>",
      "تحط علامة *"
    ],
    "correctAnswer": "تضيف required"
  },
  {
    "question": "هل ممكن أضيف مكان افتراضي داخل input؟",
    "options": [
      "آه، باستخدام placeholder",
      "لأ، HTML مش بيدعم ده",
      "آه، باستخدام value بس",
      "placeholder موجود في <label>"
    ],
    "correctAnswer": "آه، باستخدام placeholder"
  },
  {
    "question": "إيه العنصر اللي بنستخدمه لكتابة نصوص طويلة؟",
    "options": [
      "<textarea>",
      "<input type=\"text\">",
      "<textbox>",
      "<field>"
    ],
    "correctAnswer": "<textarea>"
  }
],
"Html-lesson11": [
  {
    "question": "ليه ممكن ندمج الجداول مع النماذج في HTML؟",
    "options": [
      "علشان ننظم ترتيب عناصر النموذج",
      "علشان نحط صور",
      "علشان نحط جداول داخل جداول",
      "علشان نخلي النموذج شفاف"
    ],
    "correctAnswer": "علشان ننظم ترتيب عناصر النموذج"
  },
  {
    "question": "إزاي نحط input جوا جدول؟",
    "options": [
      "نحط <input> جوه <td>",
      "نستخدم <input> قبل <table>",
      "نكتب <input> جوه <tr>",
      "نستخدم <label> جوا <th> بس"
    ],
    "correctAnswer": "نحط <input> جوه <td>"
  },
  {
    "question": "هل لازم الجدول يكون جوا <form>؟",
    "options": [
      "آه، لو عايز ترسل البيانات",
      "لأ، ممكن العكس",
      "ينفع بس لو مع <div>",
      "ينفع بس لو مفيش زرار submit"
    ],
    "correctAnswer": "آه، لو عايز ترسل البيانات"
  },
  {
    "question": "إزاي تربط <label> مع <input> داخل جدول؟",
    "options": [
      "باستخدام for في <label> و id في <input>",
      "بوضعهم في نفس <td>",
      "بكتابة النص قبل <input>",
      "مفيش طريقة للربط"
    ],
    "correctAnswer": "باستخدام for في <label> و id في <input>"
  },
  {
    "question": "أي تاج هو المناسب لو عايز تحط عنوان الخانة في الجدول؟",
    "options": ["<th>", "<td>", "<caption>", "<label>"],
    "correctAnswer": "<th>"
  },
  {
    "question": "إزاي نخلي كل صف يحتوي على عنوان ومدخل بيانات؟",
    "options": [
      "<tr><th>عنوان</th><td><input></td></tr>",
      "<tr><td>عنوان<input></td></tr>",
      "<tr><td><input><th>عنوان</th></td></tr>",
      "<input><tr><td>عنوان</td></tr>"
    ],
    "correctAnswer": "<tr><th>عنوان</th><td><input></td></tr>"
  },
  {
    "question": "هل ممكن نحط زر الإرسال جوا الجدول؟",
    "options": [
      "آه، عادي جدًا",
      "لأ، الزر لازم يكون برا الجدول",
      "ينفع بس بـ CSS",
      "بس لما الجدول فيه <select>"
    ],
    "correctAnswer": "آه، عادي جدًا"
  },
  {
    "question": "إيه الفايدة من استخدام <caption> مع جدول النموذج؟",
    "options": [
      "بيكتب عنوان للجدول (النموذج)",
      "بيحط نصوص داخل الجدول",
      "بيعمل زرار إرسال",
      "بيخلي الجدول لونه رمادي"
    ],
    "correctAnswer": "بيكتب عنوان للجدول (النموذج)"
  },
  {
    "question": "إيه أفضل طريقة لعرض نموذج منظم فيه اسم، إيميل، رسالة؟",
    "options": [
      "باستخدام جدول فيه 3 صفوف وكل صف فيه <th> و <td> فيها input",
      "نستخدم div ونعمل كل input تحته",
      "نستخدم قائمة <ul>",
      "نكتبهم ورا بعض بدون ترتيب"
    ],
    "correctAnswer": "باستخدام جدول فيه 3 صفوف وكل صف فيه <th> و <td> فيها input"
  },
  {
    "question": "هل الدمج بين form و table يعتبر أسلوب حديث؟",
    "options": [
      "مناسب للترتيب، لكن حالياً CSS بيعوض عنه",
      "هو الأسلوب الوحيد",
      "لأ، ده استخدام خاطئ",
      "ينفع بس في الجداول المالية"
    ],
    "correctAnswer": "مناسب للترتيب، لكن حالياً CSS بيعوض عنه"
  }
],
"Html-lesson12": [
  {
    "question": "إيه نوع الإدخال اللي بيستخدم لاختيار التاريخ؟",
    "options": [
      "<input type=\"date\">",
      "<input type=\"calendar\">",
      "<input type=\"datetime\">",
      "<input type=\"time\">"
    ],
    "correctAnswer": "<input type=\"date\">"
  },
  {
    "question": "لو عايز تخلي المستخدم يختار وقت (الساعة والدقايق)، تستخدم؟",
    "options": [
      "<input type=\"time\">",
      "<input type=\"hour\">",
      "<input type=\"clock\">",
      "<input type=\"timer\">"
    ],
    "correctAnswer": "<input type=\"time\">"
  },
  {
    "question": "إيه الفرق بين type=\"range\" و type=\"number\"؟",
    "options": [
      "range بيعرض شريط سحب، number بيعرض خانة فيها أرقام",
      "range للأرقام السالبة، number للموجبة",
      "مفيش فرق",
      "range بيكتب نصوص، number بيكتب تواريخ"
    ],
    "correctAnswer": "range بيعرض شريط سحب، number بيعرض خانة فيها أرقام"
  },
  {
    "question": "إزاي تحدد أقل وأعلى قيمة في input من النوع number؟",
    "options": [
      "باستخدام min و max",
      "باستخدام start و end",
      "باستخدام from و to",
      "باستخدام range=\"true\""
    ],
    "correctAnswer": "باستخدام min و max"
  },
  {
    "question": "لو عايز تختار لون، تستخدم أي نوع؟",
    "options": [
      "<input type=\"color\">",
      "<input type=\"paint\">",
      "<input type=\"hex\">",
      "<input type=\"rgb\">"
    ],
    "correctAnswer": "<input type=\"color\">"
  },
  {
    "question": "علشان تدخل قيمة رقمية ولكن بكميات محددة (زي 5، 10، 15)، تستخدم؟",
    "options": [
      "step مع type=\"number\"",
      "range مع labels",
      "input مع option",
      "type=\"fixed\""
    ],
    "correctAnswer": "step مع type=\"number\""
  },
  {
    "question": "هل ينفع أستخدم input من النوع range مع min و max؟",
    "options": [
      "آه، طبيعي جدًا",
      "لأ، النوع ده مش بيدعمهم",
      "ينفع بس في HTML5.2",
      "ينفع بس لو استخدمت JavaScript"
    ],
    "correctAnswer": "آه، طبيعي جدًا"
  },
  {
    "question": "إيه نوع الإدخال اللي يسمح بتحميل ملف؟",
    "options": [
      "<input type=\"file\">",
      "<input type=\"upload\">",
      "<input type=\"document\">",
      "<file-picker>"
    ],
    "correctAnswer": "<input type=\"file\">"
  },
  {
    "question": "علشان نسمح للمستخدم يختار أكتر من ملف، نستخدم؟",
    "options": [
      "multiple مع input type=\"file\"",
      "max-file=\"5\"",
      "allow-many=\"true\"",
      "range-file"
    ],
    "correctAnswer": "multiple مع input type=\"file\""
  },
  {
    "question": "إيه استخدام type=\"search\"؟",
    "options": [
      "لحقل بحث، بيكون ليه شكل خاص في بعض المتصفحات",
      "للبحث في ملفات HTML",
      "لإدخال النصوص الطويلة",
      "لبحث الجداول بس"
    ],
    "correctAnswer": "لحقل بحث، بيكون ليه شكل خاص في بعض المتصفحات"
  }
],
"Html-lesson13": [
  {
    "question": "ليه لازم نستخدم HTML بطريقة منظمة ونظيفة؟",
    "options": [
      "علشان سهولة القراءة والتعديل والصيانة",
      "علشان الألوان تبقى أوضح",
      "علشان يظهر أسرع في الموبايل",
      "علشان الصور تشتغل"
    ],
    "correctAnswer": "علشان سهولة القراءة والتعديل والصيانة"
  },
  {
    "question": "من النصائح المهمة في كتابة الكود هي:",
    "options": [
      "استخدام التعليقات لشرح الأجزاء المعقدة",
      "عدم غلق التاجات",
      "كتابة كل الكود في سطر واحد",
      "نسخ كود عشوائي من الإنترنت"
    ],
    "correctAnswer": "استخدام التعليقات لشرح الأجزاء المعقدة"
  },
  {
    "question": "ليه مهم تستخدم عناصر HTML في مكانها الصح؟",
    "options": [
      "علشان المتصفح والقارئ الآلي يفهموا الصفحة كويس",
      "علشان نخلي الكود شكله جميل بس",
      "علشان الصور تشتغل",
      "علشان نمنع JavaScript"
    ],
    "correctAnswer": "علشان المتصفح والقارئ الآلي يفهموا الصفحة كويس"
  },
  {
    "question": "من الأفضل استخدام <button> بدل <div> عند عمل زرار علشان:",
    "options": [
      "سهولة التفاعل والوصول",
      "شكل الزرار أحلى",
      "الزرار بيلمع",
      "الزرار مش بيحتاج CSS"
    ],
    "correctAnswer": "سهولة التفاعل والوصول"
  },
  {
    "question": "هل مهم نستخدم الـ semantic tags زي <header> و <article>؟",
    "options": [
      "أيوه، بتوضح المعنى وتساعد في الـ SEO",
      "مش ضروري، شكلهم غريب",
      "بتبطأ الصفحة",
      "بتمنع CSS"
    ],
    "correctAnswer": "أيوه، بتوضح المعنى وتساعد في الـ SEO"
  },
  {
    "question": "هل يفضل استخدام الـ IDs أكتر من الـ Classes؟",
    "options": [
      "لأ، الـ IDs مفيدة للحالات الخاصة بس، والـ Classes أفضل للتكرار",
      "آه، IDs أقصر",
      "آه، IDs أقوى في CSS",
      "آه، IDs تشتغل في كل المتصفحات بس الـ Classes لأ"
    ],
    "correctAnswer": "لأ، الـ IDs مفيدة للحالات الخاصة بس، والـ Classes أفضل للتكرار"
  },
  {
    "question": "إيه فائدة كتابة الـ DOCTYPE في أول الملف؟",
    "options": [
      "يحدد نوع المستند ويفهم المتصفح يتعامل إزاي",
      "يغير لون الخلفية",
      "يساعد في تحميل الصور",
      "بيمنع ظهور الأخطاء"
    ],
    "correctAnswer": "يحدد نوع المستند ويفهم المتصفح يتعامل إزاي"
  },
  {
    "question": "هل في فايدة إنك تراجع الكود على أدوات زي HTML Validator؟",
    "options": [
      "آه، علشان تكتشف الأخطاء وتحسن الجودة",
      "لأ، مش مهمة",
      "بتبطأ الكتابة",
      "بتمنع تحميل الصور"
    ],
    "correctAnswer": "آه، علشان تكتشف الأخطاء وتحسن الجودة"
  },
  {
    "question": "من النصائح الجيدة إنك:",
    "options": [
      "تستخدم أسماء مفهومة للـ Classes والـ IDs",
      "تكتب الكود كله بلغة واحدة بس",
      "تحط CSS جوه HTML على طول",
      "تكرر نفس التاجات فوق وتحت"
    ],
    "correctAnswer": "تستخدم أسماء مفهومة للـ Classes والـ IDs"
  },
  {
    "question": "لما تكتب كود واضح ومنظم، ده بيساعد في؟",
    "options": [
      "التعاون مع باقي الفريق وصيانة الكود",
      "تشغيل الصور",
      "اختيار الخط",
      "تكبير الصفحة"
    ],
    "correctAnswer": "التعاون مع باقي الفريق وصيانة الكود"
  }
],
"Html-lesson14": [
  {
    "question": "يعني إيه SEO؟",
    "options": [
      "تهيئة الموقع للظهور في محركات البحث زي جوجل",
      "تشغيل الفيديوهات تلقائيًا",
      "اختصار للكود",
      "تحميل الصور أسرع"
    ],
    "correctAnswer": "تهيئة الموقع للظهور في محركات البحث زي جوجل"
  },
  {
    "question": "ليه مهم نستخدم تاج <title> في كل صفحة؟",
    "options": [
      "علشان يظهر عنوان الصفحة في محركات البحث",
      "علشان الصفحة تشتغل بسرعة",
      "علشان نحط صورة للصفحة",
      "علشان نغيّر الخط"
    ],
    "correctAnswer": "علشان يظهر عنوان الصفحة في محركات البحث"
  },
  {
    "question": "إيه فايدة التاج <meta name='description'>؟",
    "options": [
      "بيشرح محتوى الصفحة لمحركات البحث",
      "بيحمّي الصفحة",
      "بيغيّر الخلفية",
      "بيمنع الإعلانات"
    ],
    "correctAnswer": "بيشرح محتوى الصفحة لمحركات البحث"
  },
  {
    "question": "ليه نستخدم التاجات الهيكلية زي <header> و <article> و <footer>؟",
    "options": [
      "علشان محركات البحث تفهم المحتوى بشكل منطقي",
      "علشان نحط ألوان",
      "علشان نكتب CSS جوه",
      "علشان نغير الفونت"
    ],
    "correctAnswer": "علشان محركات البحث تفهم المحتوى بشكل منطقي"
  },
  {
    "question": "هل استخدام العناوين بشكل مرتب (h1 ثم h2 ثم h3) بيساعد في SEO؟",
    "options": [
      "آه، بيساعد في تنظيم المحتوى لمحركات البحث",
      "لأ، مش بيفرق",
      "آه، بس لازم كلها تكون h1",
      "آه، بس لو الصفحة فيها صورة"
    ],
    "correctAnswer": "آه، بيساعد في تنظيم المحتوى لمحركات البحث"
  },
  {
    "question": "إيه دور الصور في SEO؟",
    "options": [
      "لو معاها alt text مناسب، بتساعد في ظهور الموقع في بحث الصور",
      "بتسرّع الموقع",
      "بتمنع الإعلانات",
      "بتخلّي الصفحة Responsive"
    ],
    "correctAnswer": "لو معاها alt text مناسب، بتساعد في ظهور الموقع في بحث الصور"
  },
  {
    "question": "ليه نستخدم روابط داخلية (internal links) في الصفحة؟",
    "options": [
      "علشان نسهّل التنقل ونقوّي البنية الداخلية للموقع",
      "علشان نحط صوت",
      "علشان نكتب CSS جوه HTML",
      "علشان نغيّر اللغة"
    ],
    "correctAnswer": "علشان نسهّل التنقل ونقوّي البنية الداخلية للموقع"
  },
  {
    "question": "هل وجود محتوى مفيد وواقعي في الصفحة بيساعد في SEO؟",
    "options": [
      "آه، المحتوى الجيد هو الأساس",
      "لأ، المهم الصور",
      "المحتوى مش بيفرق",
      "بس لو مكتوب بخط كبير"
    ],
    "correctAnswer": "آه، المحتوى الجيد هو الأساس"
  },
  {
    "question": "إيه أهمية استخدام روابط خارجية لمصادر موثوقة؟",
    "options": [
      "بيدّي ثقة أكتر لمحركات البحث",
      "علشان نغيّر ألوان اللينكات",
      "علشان نضيف فيديوهات",
      "علشان نمنع الأخطاء"
    ],
    "correctAnswer": "بيدّي ثقة أكتر لمحركات البحث"
  },
  {
    "question": "هل سرعة تحميل الصفحة بتأثر على ترتيبها في نتائج البحث؟",
    "options": [
      "آه، الصفحات السريعة بتظهر أعلى",
      "لأ، السرعة مش مهمة",
      "آه، بس في الموبايل بس",
      "لأ، المهم يكون فيها فيديوهات"
    ],
    "correctAnswer": "آه، الصفحات السريعة بتظهر أعلى"
  }
],
  "Css-lesson1": [
    {
      "question": "CSS هي اختصار لإيه؟",
      "options": [
        "Computer Style System",
        "Cascading Style Sheets",
        "Creative Styling Solutions",
        "Central Styling Software"
      ],
      "correctAnswer": "Cascading Style Sheets"
    },
    {
      "question": "لو اعتبرنا HTML هو 'هيكل البيت'، فـ CSS بيكون بمثابة إيه؟",
      "options": [
        "أساسات البيت",
        "الكهرباء والسباكة",
        "الديكور والألوان والستايل",
        "الفرش والأثاث"
      ],
      "correctAnswer": "الديكور والألوان والستايل"
    },
    {
      "question": "أنهي طريقة لكتابة CSS بنعتبرها 'الأفضل دائمًا' و'الاحترافية' حسب شرح الدرس؟",
      "options": [
        "Inline CSS",
        "Internal CSS",
        "External CSS",
        "Dynamic CSS"
      ],
      "correctAnswer": "External CSS"
    },
    {
      "question": "في طريقة Inline CSS، فين بنكتب التنسيق؟",
      "options": [
        "داخل وسم `<style>` في الـ `<head>`",
        "في ملف خارجي بامتداد `.css`",
        "`style=\"\"`",
        "في نهاية ملف الـ HTML قبل إغلاق `<body>`"
      ],
      "correctAnswer": "`style=\"\"`"
    },
    {
      "question": "علشان نربط ملف CSS خارجي اسمه `style.css` بصفحة HTML، بنستخدم أي وسم؟",
      "options": [
        "`<script src=\"style.css\"></script>`",
        "`<link rel=\"stylesheet\" href=\"style.css\">`",
        "`<style src=\"style.css\"></style>`",
        "`<css src=\"style.css\"></css>`"
      ],
      "correctAnswer": "`<link rel=\"stylesheet\" href=\"style.css\">`"
    },
    {
      "question": "ليه الـ Inline CSS مش عملي ومش منظم حسب شرح الدرس؟",
      "options": [
        "لأن بيخلّي الصفحة تتحمل أبطأ",
        "لأن كل عنصر لازم نعيد كتابة التنسيق له وصعب نعدّل عليه لاحقًا",
        "لأن ما ينفعش نستخدمه إلا مع عدد قليل من العناصر",
        "لأنه بيتطلب إنترنت عشان يشتغل"
      ],
      "correctAnswer": "لأن كل عنصر لازم نعيد كتابة التنسيق له وصعب نعدّل عليه لاحقًا"
    },
    {
      "question": "خاصية `background-color` في CSS بتستخدم لإيه؟",
      "options": [
        "تحديد لون الخط",
        "تحديد لون خلفية الصفحة أو العنصر",
        "تغيير حجم الخط",
        "تحديد نوع الخط"
      ],
      "correctAnswer": "تحديد لون خلفية الصفحة أو العنصر"
    },
    {
      "question": "إيه الاختصار اللي بنكتبه في VS Code عشان نكتب الهيكل الأساسي لصفحة HTML تلقائيًا؟",
      "options": [
        "`!` ثم `Tab`",
        "`html:5` ثم `Enter`",
        "`boilerplate` ثم `Tab`",
        "`doc:html` ثم `Enter`"
      ],
      "correctAnswer": "`!` ثم `Tab`"
    },
    {
      "question": "ليه بنحط `margin: 0;` و `padding: 0;` لـ `body` في بداية ملف الـ CSS؟",
      "options": [
        "عشان نزود مساحات فارغة للصفحة",
        "عشان نسرّع تحميل الصفحة",
        "عشان نلغي الهوامش والفراغات الافتراضية للمتصفح ونبدأ تنسيقاتنا من الصفر",
        "عشان نغير اتجاه النص في الصفحة"
      ],
      "correctAnswer": "عشان نلغي الهوامش والفراغات الافتراضية للمتصفح ونبدأ تنسيقاتنا من الصفر"
    },
    {
      "question": "خاصية `text-align: center;` بتعمل إيه؟",
      "options": [
        "بتغير لون النص للمنتصف",
        "بتغير حجم النص للمنتصف",
        "بتعمل محاذاة للنص في منتصف العنصر",
        "بتجعل النص يظهر في وسط الشاشة فقط"
      ],
      "correctAnswer": "بتعمل محاذاة للنص في منتصف العنصر"
    },
    {
      "question": "عند استخدام Internal CSS، أين يوضع وسم `<style>` في ملف HTML؟",
      "options": [
        "داخل وسم `<body>`",
        "داخل وسم `<head>`",
        "بعد وسم `</html>`",
        "قبل وسم `<!DOCTYPE html>`"
      ],
      "correctAnswer": "داخل وسم `<head>`"
    },
    {
      "question": "ماذا تعني قيمة `1.6` في خاصية `line-height: 1.6;`؟",
      "options": [
        "حجم الخط سيكون `1.6` بكسل",
        "المسافة بين الأسطر ستكون `1.6` سم",
        "المسافة بين الأسطر ستكون `1.6` ضعف حجم الخط",
        "عدد الأسطر المسموح بها في الفقرة `1.6`"
      ],
      "correctAnswer": "المسافة بين الأسطر ستكون `1.6` ضعف حجم الخط"
    }
  ],
 };