import WhyUsCard from '../WhyUsCard/WhyUsCard';
import './whyUsSection.css';

const WhyUsSection = () => {
  return (
    <section className='whyUsSection container'>
      <div className='whyUsTextContent'>
        <h1>Why Taikonz?</h1>
        <h2>
          We build crypto products that are simple, elegant, and secure. Whether
          you are an individual or an institution, we want to help you buy,
          sell, and store your bitcoin and cryptocurrency.
        </h2>
      </div>
      <div className='whyUsCardsContainer'>
        <WhyUsCard
          heading='Super Quick Kyc'
          para='Swift execution for seizing market opportunitiesSwift execution for seizing market opportunities.'
        />
        <WhyUsCard
          heading='Fast Transactions'
          para='Swift execution for seizing market opportunitiesSwift execution for seizing market opportunities.'
        />
        <WhyUsCard
          heading='Exceptional Security'
          para='Swift execution for seizing market opportunitiesSwift execution for seizing market opportunities.'
        />
      </div>
    </section>
  );
};

export default WhyUsSection;
