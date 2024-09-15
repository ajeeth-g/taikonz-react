import './whyUsCard.css';

const WhyUsCard = ({ heading, para }) => {
  return (
    <div className='WhyUsCardSection'>
      <div className='WhyUsCardContainer'>
        <img
          src='./WhyUsBitcoinDark.jpg'
          alt='WhyUsBitcoin'
          className='WhyUsCardIcon'
        />
        <h3 className='WhyUsCardHeading'> {heading}</h3>
        <p className='WhyUsCardPara'>{para}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
