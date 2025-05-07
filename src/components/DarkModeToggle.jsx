import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-2 py-1 border rounded">
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
