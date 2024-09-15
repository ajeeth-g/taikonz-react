import { useState, useEffect } from "react";
import Button from "../Button/Button";
import DarkMode from "../DarkMode/DarkMode";
import "./navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  // Initialize theme based on localStorage
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme") || "light";
    setTheme(selectedTheme);
  }, []);

  // Toggle theme handler to sync with the DarkMode component
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <nav className="navbarSection container">
      <div className="logo">
        <img
          src={theme === "dark" ? "./BrandLogoDark.png" : "./BrandLogoLight.png"}
          alt="Taikonz Brand Logo"
        />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#p2p">P2P</a>
        </li>
        <li>
          <a href="#trade">Trade</a>
        </li>
        <li>
          <a href="#staking">Staking</a>
        </li>
        <li>
          <a href="#launchpad">Launchpad</a>
        </li>
        <div className="nav-buttons">
          <Button btnText="Login" variant="primary" />
          <Button btnText="Register" variant="secondary" />
        </div>
        <DarkMode onThemeChange={toggleTheme} />
      </ul>
    </nav>
  );
};

export default Navbar;
