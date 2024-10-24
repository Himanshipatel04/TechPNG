// components/ThemeToggle.jsx
"use client";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button onClick={toggleTheme} className="absolute top-5 right-2  md:right-8">
        {theme === "light" ? (
          <MdLightMode size={40} />
        ) : (
          <MdDarkMode size={40} />
        )}
      </button>
      <>{children}</> 
    </div>
  );
};

export default ThemeToggle;
