import { useEffect, useRef } from 'react';

const GoogleDocsEmbed = () => {

  const iframeRef = useRef(null);

  const breakpoints = [
    { min: 775, max: 800, height: 31200 },
    { min: 750, max: 775, height: 31100 },
    { min: 725, max: 750, height: 31350 },
    { min: 700, max: 725, height: 31500 },
    { min: 670, max: 700, height: 31800 },
    { min: 640, max: 670, height: 32100 },
    { min: 620, max: 640, height: 31200 },
    { min: 600, max: 620, height: 31400 },
    { min: 575, max: 600, height: 31600 },
    { min: 550, max: 575, height: 31800 },
    { min: 525, max: 550, height: 32000 },
    { min: 500, max: 525, height: 32200 },
    { min: 475, max: 500, height: 32500 },
    { min: 450, max: 475, height: 32800 },
    { min: 425, max: 450, height: 32900 },
    { min: 400, max: 425, height: 33000 },
  ];

  const calculateHeight = () => {
    const width = window.innerWidth;
    let height = 30900; // Default height

    for (const breakpoint of breakpoints) {
      if (width >= breakpoint.min && width < breakpoint.max) {
        height = breakpoint.height;
        break;
      }
    }

    return `${height}px`;
  };

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = calculateHeight();
      }
    };

    resizeIframe(); // Initial resize
    window.addEventListener('resize', resizeIframe);

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);  

  return (
    <section 
      id="artists"
      className="w-full relative flex justify-center px-5 pt-24 -mt-28"
    >
      <div
        className="absolute top-24 inset-0 h-[calc(100%-100px)] w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div className="z-10 p-2 sm:p-20 bg-white w-full max-w-3xl mt-9 mb-16 flex items-center justify-center border border-black">

        <embed 
          ref={iframeRef}
          src="https://docs.google.com/document/d/e/2PACX-1vT3BPAbMeSHgWqtz0cHxGBZnW6texpMgg56UsCv-oIeb43ri6Dd0g_o0bV4DPflVlQZJMaSiWMejubO/pub?embedded=true" 
          width="100%"></embed>
      </div>
    </section>
  );
};

export default GoogleDocsEmbed;