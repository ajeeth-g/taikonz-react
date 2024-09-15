import "./App.css";
import FooterSection from "./components/FooterSection/FooterSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import StatsSection from "./components/StatisticsSection/StatisticsSection";
import WhyUsSection from "./components/WhyUsSection/WhyUsSection";

function App() {
  return (
    <div>
     <Navbar />
      <HeroSection />
      {/* <WhyUsSection />
      <StatsSection />
      <FooterSection /> */}
    </div>
  );
}

export default App;
