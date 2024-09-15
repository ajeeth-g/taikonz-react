import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext'; // Correct relative path to ThemeContext
import { footerData } from '../../footerData'; // Correct relative path to footerData
import './footerSection.css'; // Import your CSS for styling
import DarkMode from '../DarkMode/DarkMode'; // Import DarkMode component

const FooterSection = () => {
  const { theme } = useContext(ThemeContext); // Get theme from context

  return (
    <footer className='footerSection container'>
      <div className='footerBrand'>
        <div className='footerBrandLogoContainer'>
          <img
            src={
              theme === 'dark' ? './BrandLogoDark.png' : './BrandLogoLight.png'
            }
            alt='Taikonz Logo'
            className='footerBrandLogo'
          />
          {/* Dark Mode Toggle */}
          <div className='footerToggle'>
            <DarkMode />
          </div>
        </div>

        <p>© 2023 Taikonz All rights reserved.</p>
      </div>

      <div className='footerContainerLinks'>
        <div className='footerColumn'>
          <h4>Pages</h4>
          <ul>
            {footerData.pages.map((page) => (
              <li key={page.name}>
                <a href={page.link} className='footerLink'>
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='footerColumn'>
          <h4>Products</h4>
          <ul>
            {footerData.products.map((product) => (
              <li key={product.name}>
                <a href={product.link} className='footerLink'>
                  {product.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='footerColumn'>
          <h4>Social Media</h4>
          <ul className='footerLinks'>
            {footerData.socialMedia.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  className='footerLink'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
