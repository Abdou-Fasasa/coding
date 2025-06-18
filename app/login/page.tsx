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
      </main>
    </div>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(-45deg,rgb(54, 15, 42),rgb(0, 0, 0),rgb(6, 36, 82))',
    backgroundSize: '600% 600%',
    animation: 'gradientFlow 20s ease infinite',
    zIndex: 0,
  },
  header: {
    zIndex: 2,
    textAlign: 'center',
    padding: '2rem 1rem 1rem',
  },
  logo: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: 0,
  },
  main: {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #666',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#fff',
    outline: 'none',
  },
  button: {
    padding: '14px',
    background: '#6a11cb',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  },
  error: {
    color: '#ff3b3b',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
};
