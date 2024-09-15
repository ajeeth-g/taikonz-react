import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './darkMode.css';

const DarkMode = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`darkModeButton ${className}`} onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </div>
  );
};

export default DarkMode;
