import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';

import Logo from './components/Logo';
import AboutText from './components/AboutText';
import IconArrowDown from './components/icons/IconArrowDown';
import IconArrowUpDown from './components/icons/IconArrowUpDown';
import Schedule from './components/Schedule';
import GoogleDocsEmbed from './components/GoogleDocsEmbed';

function App() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);  

  return (
    <div className="w-full flex flex-col items-center">
      <Logo />
      <IconArrowDown />
      <AboutText />
      <Schedule />
      <IconArrowUpDown />
      <GoogleDocsEmbed />
    </div>
  );
}

export default App;
