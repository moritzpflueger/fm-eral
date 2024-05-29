import Header from './components/Header';
import AboutText from './components/AboutText';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import IconArrowDown from './components/IconArrowDown';
import Schedule from './components/Schedule';
import './App.css';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/* <RadioPlayer /> */}

      <IconArrowDown />
      <AboutText />
      <Schedule />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
