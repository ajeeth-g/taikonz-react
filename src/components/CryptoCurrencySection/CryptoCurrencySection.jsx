import { FiArrowLeft } from 'react-icons/fi';
import './cryptoCurrencySection.css';
import CryptoCurrencyCard from '../CryptoCurrencyCard/CryptoCurrencyCard';

const CryptoCurrencySection = () => {
  return (
    <div className='CryptoCurrencySection container'>
      <div className='CryptoCurrencyIcon'>
        <FiArrowLeft />
      </div>

      <div className='CryptoCurrencyCardContainer'>
        <CryptoCurrencyCard
          icon='Bitcoin'
          cardHeading='Bitcoin'
          cardSubheading='BTC'
          cardValue='32,25,770.67'
        />
        <CryptoCurrencyCard
          icon='whitecoin'
          cardHeading='Whitecoin'
          cardSubheading='WTC'
          cardValue='32,25,770.67'
        />
        <CryptoCurrencyCard
          icon='Unobtanium'
          cardHeading='Unobtanium'
          cardSubheading='UTC'
          cardValue='32,25,770.67'
        />
        <CryptoCurrencyCard
          icon='Bitcoin'
          cardHeading='Bitcoin'
          cardSubheading='BTC'
          cardValue='32,25,770.67'
        />
      </div>
      <div className='CryptoCurrencyIcon iconRight'>
        <FiArrowLeft />
      </div>
    </div>
  );
};

export default CryptoCurrencySection;
