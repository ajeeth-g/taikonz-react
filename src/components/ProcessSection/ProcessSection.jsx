import ProcessCard from '../ProcessCard/ProcessCard';
import './ProcessSection.css';

const ProcessSection = () => {
  return (
    <section className='processSection container'>
      <div className='processHeading'>
        <h1>Investing in crypto will be easier than ever.</h1>
        <h4>
          Taikonz makes it easier to invest and trade in crypto currency than
          any other platform.
        </h4>
      </div>
      <div className='processCardsContainer'>
        <ProcessCard
          number='01'
          heading='Start investing'
          subHeading='Taikonz has the potential to execute millions of transactions every second, and the system.'
        />
        <ProcessCard
          number='02'
          heading='Start investing'
          subHeading='Taikonz has the potential to execute millions of transactions every second, and the system.'
        />
        <ProcessCard
          number='03'
          heading='Start investing'
          subHeading='Taikonz has the potential to execute millions of transactions every second, and the system.'
        />
      </div>
    </section>
  );
};

export default ProcessSection;
