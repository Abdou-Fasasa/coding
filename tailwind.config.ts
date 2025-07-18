// ✅ tailwind.config.ts بعد تعديل الألوان لتصميم رسمي
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8", // أزرق رسمي
        secondary: "#f1f5f9", // رمادي فاتح
        accent: "#6366f1", // بنفسجي فاتح
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
