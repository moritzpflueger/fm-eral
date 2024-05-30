import { useEffect, useRef } from 'react';

const GoogleDocsEmbed = () => {

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    const handleResize = () => {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };

    if (iframe) {
      iframe.addEventListener('load', handleResize);
      window.addEventListener('resize', handleResize);

      return () => {
        iframe.removeEventListener('load', handleResize);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);  

  return (
    <section 
      id="artists"
      className="w-full relative flex justify-center px-5 pt-48 -mt-56"
    >
      <div
        className="absolute top-48 inset-0 h-[calc(100%-192px)] w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <div className="z-10 bg-white w-full max-w-3xl mt-9 mb-16 flex items-center justify-center border border-black">
        {/* <iframe
          ref={iframeRef}
          className="w-full max-w-4xl border-2"
          src="https://docs.google.com/document/d/e/2PACX-1vT3BPAbMeSHgWqtz0cHxGBZnW6texpMgg56UsCv-oIeb43ri6Dd0g_o0bV4DPflVlQZJMaSiWMejubO/pub?embedded=true"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          title="Google Docs"
        ></iframe> */}
          {/* <div className="relative w-full my-16 py-16 px-5 flex items-center justify-center">
            <div
              className="absolute inset-0 h-full w-full bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"
            ></div>
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=ac131be6ead9fcedc826ee06da7a9437d1c025cadd699196b0b3b184ae576e63%40group.calendar.google.com&ctz=Europe%2FBerlin" 
              className="z-10"
              style={{border: 0}}
              width="800" 
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>        
          </div>       */}      

        <embed 
          src="https://docs.google.com/document/d/e/2PACX-1vT3BPAbMeSHgWqtz0cHxGBZnW6texpMgg56UsCv-oIeb43ri6Dd0g_o0bV4DPflVlQZJMaSiWMejubO/pub?embedded=true" 
          width="100%" 
          style={{
            minHeight: '-webkit-fill-available',
            minHeight: '-moz-available',
            minHeight: '-ms-fill-available',
            minHeight: 'fill-available',
            height: '1000px'
          }}></embed>
      </div>
    </section>
  );
};

export default GoogleDocsEmbed;