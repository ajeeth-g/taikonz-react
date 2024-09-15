import './cryptoCurrencyCard.css';

const CryptoCurrencyCard = ({
  icon,
  cardHeading,
  cardSubheading,
  cardValue,
}) => {
  return (
    <div className='cardContainer'>
      <div className='cardIconContainer'>
        <img src={`./${icon}.jpg`} alt={cardHeading} className='cardIcon' />
      </div>
      <p className='cardHeading'>{cardHeading}</p>
      <p className='cardSubheading'>{cardSubheading}</p>
      <p className='cardValue'>{cardValue}</p>
    </div>
  );
};

export default CryptoCurrencyCard;
