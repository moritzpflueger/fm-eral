import React, { useState, useEffect } from 'react';

const CookieBanner = () => {

  // Initialize user state from localStorage if available
  const [cookieConsent, setCookieConsent] = useState(() => {
    const storedConsent = localStorage.getItem('cookieConsent');
    return storedConsent ? JSON.parse(storedConsent) : false;
  });

  // Update localStorage whenever the user state changes
  useEffect(() => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookieConsent));
  }, [cookieConsent]);      

  if (cookieConsent) return null;

  return (
    <div className="fixed z-10 bottom-5 left-5 pl-3 pr-5 bg-black text-white flex items-center">
      <button 
        onClick={() => setCookieConsent(prev => !prev)}
        className="p-2 mr-3 text-3xl"
      >✕</button>
      <span className="text-xl">This site uses cookies</span>
    </div>        
  )

};

export default CookieBanner;