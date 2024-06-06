import { useEffect, useRef } from 'react';

const GoogleDocsEmbed = () => {

  const iframeRef = useRef(null);

  const baseHeight = 10600; // Base height for widths >= 800px

  const breakpoints = [
    { min: 775, max: 800, heightFactor: 1.02 },
    { min: 750, max: 775, heightFactor: 1.025 },
    { min: 725, max: 750, heightFactor: 1.045 },
    { min: 700, max: 725, heightFactor: 1.055 },
    { min: 670, max: 700, heightFactor: 1.077 },
    { min: 640, max: 670, heightFactor: 1.095 },
    { min: 620, max: 640, heightFactor: 1.025 },
    { min: 600, max: 620, heightFactor: 1.04 },
    { min: 575, max: 600, heightFactor: 1.05 },
    { min: 550, max: 575, heightFactor: 1.055 },
    { min: 525, max: 550, heightFactor: 1.08 },
    { min: 500, max: 525, heightFactor: 1.095 },
    { min: 475, max: 500, heightFactor: 1.115 },
    { min: 450, max: 475, heightFactor: 1.15 },
    { min: 425, max: 450, heightFactor: 1.16 },
    { min: 400, max: 425, heightFactor: 1.18 },
    { min: 390, max: 400, heightFactor: 1.22 },
    { min: 380, max: 390, heightFactor: 1.23 },
    { min: 370, max: 380, heightFactor: 1.245 },
    { min: 360, max: 370, heightFactor: 1.26 },
    { min: 300, max: 360, heightFactor: 1.3 },
  ];

  const calculateHeight = () => {
    const width = window.innerWidth;
    let height = baseHeight; // Default height

    for (const breakpoint of breakpoints) {
      if (width >= breakpoint.min && width < breakpoint.max) {
        height = baseHeight * breakpoint.heightFactor;
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
          width="100%"
        ></embed>
      </div>
    </section>
  );
};

export default GoogleDocsEmbed;