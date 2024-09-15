import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './heroSection.css';
import Button from '../Button/Button';

const HeroSection = () => {
  const { theme } = useContext(ThemeContext); // Use the theme from context

  return (
    <section className='heroSection container'>
      <div className='heroContent'>
        <div className='heroContent--text'>
          <h1>Begin Trading with your Favorite Coins</h1>
          <h2>
            Welcome to Taikonz! A next-gen Blockchain and Crypto Exchange
            platform that offers traders an endless assets buy and selling
            feature with real money.
          </h2>
        </div>
        <Button btnText='Get Started' variant='primary' />
      </div>
      <div className='heroImageContainer'>
        <img
          src={
            theme === 'dark' ? './heroImageDark.png' : './heroImageLight.png'
          }
          alt='Bitcoin'
          className='heroImage'
        />
      </div>
    </section>
  );
};

export default HeroSection;
