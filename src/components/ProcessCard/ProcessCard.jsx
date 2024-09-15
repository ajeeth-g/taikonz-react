import './processCard.css';

const ProcessCard = ({ number, heading, subHeading }) => {
  return (
    <div className='processCardContainer'>
      <p>{number}</p>
      <div className='ProcessCardTextContent'>
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
