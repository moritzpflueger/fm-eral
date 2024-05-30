import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import ListenersCount from './components/ListenersCount';
import CookieBanner from './components/CookieBanner';

function Layout() {
  
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <AudioProvider>
      <div 
        className="w-full flex flex-col items-center"
        style={{ paddingTop: `${headerHeight + 16}px`}}
      >
        <Menu 
          showMenu={menuIsVisible}
          handleMenuToggle={() => setMenuIsVisible(false)} 
        />
        <Header 
          handleMenuClick={() => setMenuIsVisible(true)}
          onHeightChange={(height) => setHeaderHeight(height)}
        />
        <ListenersCount />
        
        <Outlet />
        
        <Footer />
        <CookieBanner />
      </div>
    </AudioProvider>
  );
}

export default Layout;
