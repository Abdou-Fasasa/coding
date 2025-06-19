'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { users } from '@/utils/auth';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      document.cookie = 'loggedIn=true; path=/';
      router.push('/');
    } else {
      setError('❌ اسم المستخدم أو كلمة السر غلط');
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.background}></div>

      <header style={styles.header}>
        <h1 style={styles.logo}>Codeing</h1>
      </header>

      <main style={styles.main}>
        <div>
          <form onSubmit={handleLogin} style={styles.card}>
            <h2 style={styles.title}>تسجيل الدخول</h2>

            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>دخول</button>
            {error && <p style={styles.error}>{error}</p>}
          </form>

<section style={styles.infoBox}>
  <h3 style={styles.infoTitle}>📘 عن منصة Coding</h3>

  <table style={styles.infoTable}>
    <tbody>
      <tr style={styles.infoRow}>
        <td style={styles.infoCellKey}>🎯 الهدف</td>
        <td style={styles.infoCellValue}>تبسيط البرمجة للمبتدئين باللهجة المصرية 💬 بأسلوب ممتع وسهل</td>
      </tr>
      <tr style={{ ...styles.infoRow, backgroundColor: 'rgba(255,255,255,0.03)' }}>
        <td style={styles.infoCellKey}>📚 المحتوى</td>
        <td style={styles.infoCellValue}>دروس فيديو + ملفات PDF + اختبارات تفاعلية لكل درس</td>
      </tr>
      <tr style={styles.infoRow}>
        <td style={styles.infoCellKey}>✨ المميزات</td>
        <td style={styles.infoCellValue}>تقدر ترجع للدروس وتكمل من آخر مكان وقفت فيه ⏱️</td>
      </tr>
      <tr style={{ ...styles.infoRow, backgroundColor: 'rgba(255,255,255,0.03)' }}>
        <td style={styles.infoCellKey}>🔄 الدعم</td>
        <td style={styles.infoCellValue}> تحديثات أسبوعية مستمرة🔄</td>
      </tr>
    </tbody>
  </table>
</section>


        </div>
      </main>

      {/* زر واتساب */}
      <a
        href="https://wa.me/201128606959"
        target="_blank"
        style={styles.whatsapp}
        title="التواصل مع المطور لو نسيت كلمة السر"
      >
        💬
      </a>
    </div>
  );
}


const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#000', // نفس لون الصفحة الرئيسية
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'sans-serif',
  },
  background: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #0f0f0f 0%, #121212 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradientFlow 15s ease infinite',
    zIndex: 0,
  },
  header: {
    zIndex: 2,
    textAlign: 'center',
    padding: '2rem 1rem 1rem',
  },
  logo: {
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: 0,
    color: '#fff',
    textShadow: '0 0 10px rgba(255,255,255,0.1)',
  },
  main: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    animation: 'fadeIn 0s ease forwards',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    padding: '14px 18px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid rgba(200,200,200,0.3)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#fff',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '14px',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 6px 16px rgba(106, 17, 203, 0.2)',
  },
  error: {
    color: '#ff4b4b',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  whatsapp: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#25D366',
    color: '#fff',
    width: '48px',
    height: '48px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    textDecoration: 'none',
    zIndex: 100,
    transition: 'transform 0.3s ease',
  },
infoBox: {
  marginTop: '2rem',
  padding: '1.5rem',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '16px',
  color: '#ddd',
  maxWidth: '500px',
  fontSize: '15px',
  lineHeight: '1.7',
  animation: 'fadeIn 1.2s ease forwards',
  direction: 'rtl',
  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
},
infoTitle: {
  marginBottom: '1.2rem',
  fontSize: '1.5rem',
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'right',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  paddingBottom: '0.5rem',
},
infoTable: {
  width: '100%',
  borderCollapse: 'collapse',
},
infoRow: {
  borderBottom: '1px solid rgba(255,255,255,0.07)',
},
infoCellKey: {
  fontWeight: 'bold',
  color: '#fff',
  padding: '0.8rem 0.4rem',
  textAlign: 'right',
  verticalAlign: 'top',
  width: '35%',
},
infoCellValue: {
  color: '#ccc',
  padding: '0.8rem 0.4rem',
  textAlign: 'right',
  verticalAlign: 'top',
},

};
