import Button from '../Button/Button';
import StatsContainer from '../StatsContainer/StatsContainer';
import './exploreCurrency.css';

const ExploreCurrency = () => {
  return (
    <section className='exploreCurrencyContainer container'>
      <div className='exploreCurrencyTextContent '>
        <h1>Available Currencies</h1>
        <h2>
          There are various crypto currencies available in Taikonz, and you may
          easily trade andinvest in all of them.
        </h2>
        <div className='exploreCurrencyBtn'>
          <Button btnText='Explore all' variant='primary' />
        </div>
      </div>
      <div className='exploreCurrencyStats'>
        <StatsContainer
          coinImage='Bitcoin'
          coinName='Bitcoin'
          CoinSubname='BTC'
          percentage='12%'
        />
        <StatsContainer
          coinImage='whitecoin'
          coinName='Bitcoin'
          CoinSubname='BTC'
          percentage='12%'
        />
        <StatsContainer
          coinImage='Unobtanium'
          coinName='Bitcoin'
          CoinSubname='BTC'
          percentage='12%'
        />
        <StatsContainer
          coinImage='Bitcoin'
          coinName='Bitcoin'
          CoinSubname='BTC'
          percentage='12%'
        />
      </div>
    </section>
  );
};

export default ExploreCurrency;
