import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import Button from '../Button/Button';
import './BannerSection.css';

const BannerSection = () => {
  const { theme } = useContext(ThemeContext);

  const imageSrc =
    theme === 'dark' ? './BannerImageDark.png' : './BannerImageLight.png';

  return (
    <section className={`bannerSection container ${theme}`}>
      <div className='bannerContent'>
        <div className='bannerTextContent'>
          <h1>Crypto Exchange Platform</h1>
          <h2>
            A next-gen Blockchain and Crypto Exchange platform that offers
            traders an endless asset buy and sell feature with real money.
          </h2>
        </div>
        <Button btnText='Start Trading' variant='primary' />
      </div>
      <div className='bannerImageContainer'>
        <img src={imageSrc} alt='Crypto Exchange' />
      </div>
    </section>
  );
};

export default BannerSection;
