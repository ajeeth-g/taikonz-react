import './App.css';
import { ThemeProvider } from './ThemeContext';
import BannerSection from './components/BannerSection/BannerSection';
import CryptoCurrencySection from './components/CryptoCurrencySection/CryptoCurrencySection';
import ExploreCurrency from './components/ExploreCurrency/ExploreCurrency';
import FooterSection from './components/FooterSection/FooterSection';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import ProcessSection from './components/ProcessSection/ProcessSection';
import WhyUsSection from './components/WhyUsSection/WhyUsSection';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <CryptoCurrencySection />
      <WhyUsSection />
      <ExploreCurrency />
      <ProcessSection />
      <BannerSection />
      <FooterSection />
    </ThemeProvider>
  );
}

export default App;
