import "./darkMode.css";
import { useEffect } from 'react';

const DarkMode = ({ onThemeChange }) => {
  // Function to toggle between dark and light mode
  const toggleTheme = () => {
    const currentTheme = document.querySelector("body").getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("selectedTheme", "light");
      onThemeChange("light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("selectedTheme", "dark");
      onThemeChange("dark");
    }
  };

  // Initialize theme based on localStorage
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme") || "light";
    document.querySelector("body").setAttribute("data-theme", selectedTheme);
  }, []);

  return (
    <div>
      <div className="darkModeButton" onClick={toggleTheme}></div>
    </div>
  );
};

export default DarkMode;
