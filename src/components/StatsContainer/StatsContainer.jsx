import './statsContainer.css';
import { MdArrowOutward } from 'react-icons/md';

const StatsContainer = ({ coinImage, coinName, CoinSubname, percentage }) => {
  return (
    <div className='exploreCurrencyStatsContainer'>
      <div className='exploreCurrencyStatsRight'>
        <img
          src={`./${coinImage}.jpg`}
          alt='Bitcoin'
          className='exploreCurrencyStatsImage'
        />
        <div className='exploreCurrencyStatsText'>
          <p> {coinName} </p>
          <p> {CoinSubname} </p>
        </div>
      </div>

      <div className='exploreCurrencyStatsPercentage'>
        {' '}
        <div className='exploreCurrencyStatsIcon'>
          <MdArrowOutward />
        </div>
        <p> {percentage} </p>
      </div>
    </div>
  );
};

export default StatsContainer;
