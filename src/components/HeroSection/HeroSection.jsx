import "./heroSection.css";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <section className="heroSection container">
      <div className="heroContent">
        <div className="heroContent--text">
          <h1>Begin Trading with your Favorite Coins</h1>
          <h2>
            Welcome to Taikonz! A next-gen Blockchain and Crypto Exchange
            platform that offers trader with an endless assets buy and selling
            feature with real money.
          </h2>
        </div>
        <Button btnText="Get Started" />
      </div>
      <div className="heroImageContainer">
        <img src="./heroImage.png" alt="Taikonz" className="heroImage" />
      </div>
    </section>
  );
};

export default HeroSection;
