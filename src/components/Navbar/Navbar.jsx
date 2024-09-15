import { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Button from '../Button/Button';
import DarkMode from '../DarkMode/DarkMode';
import './navbar.css';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbarSection container'>
      <div className='logoContainer'>
        <a href='/'>
          <img
            src={
              theme === 'dark' ? './BrandLogoDark.png' : './BrandLogoLight.png'
            }
            alt='Taikonz Brand Logo'
            className='logo'
          />
        </a>
        <button className='hamburgerMenu' onClick={toggleMenu}>
          &#9776;
        </button>
        <DarkMode className='darkModeToggle' />
      </div>
      <div className={`navbarLinksContainer ${isMenuOpen ? 'open' : ''}`}>
        <ul className='nav-links'>
          <li>
            <a className='navLink' href='#p2p'>
              P2P
            </a>
          </li>
          <li>
            <a className='navLink' href='#trade'>
              Trade
            </a>
          </li>
          <li>
            <a className='navLink' href='#staking'>
              Staking
            </a>
          </li>
          <li>
            <a className='navLink' href='#launchpad'>
              Launchpad
            </a>
          </li>
        </ul>
        <div className='nav-buttons'>
          <Button btnText='Login' variant='secondary' />
          <Button btnText='Register' variant='primary' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
