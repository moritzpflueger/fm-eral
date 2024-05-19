import Header from './components/Header';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import IconArrowDown from './components/IconArrowDown';
import './App.css';

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      {/* <RadioPlayer /> */}

      <h1 
        className="text-4xl px-10 font-serif text-center my-10"
        style={{ fontFamily: 'Synt, sans-serif' }}
      >
        A Journey into Translocality
      </h1>
      <IconArrowDown />
      <p 
        className="p-10 max-w-2xl"
        style={{ fontFamily: 'Whyte, sans-serif' }}
      >
        What exactly is translocality, and how does it connect with radio?
        Translocality encompasses the interconnectedness and dynamic movement of ideas, people, and practices across diverse localities. It facilitates exchanges of knowledge, culture, and resources across various geographical, social, and cultural contexts.
        <br />
        <br />
        Radio serves as a powerful illustration of translocality, reaching
        out to diverse audiences across different geographical regions.
        Through radio waves, information, ideas, and cultural expressions
        transcend physical boundaries, resonating with communities and
        bridging geographical distances. The medium of radio provides a
        platform for the amplification of diverse voices and perspectives.
        <br />
        <br />
        As we explore the concept of translocality further, we’ve innovatively transformed our studio into a mobile cargo space. This
        adaptation allows us to showcase works and traces while simultaneously functioning as a mobile radio station. This dynamic approach transforms the presentation of works into a performa-
        tive experience, engaging audiences in unconventional ways and
        challenging conventional ideas of space and connection.      
      </p>
      <IconArrowDown />
      <div className="relative w-full my-16 py-16 px-5 flex items-center justify-center">
        <div
          class="absolute inset-0 h-full w-full  bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"
        ></div>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=ac131be6ead9fcedc826ee06da7a9437d1c025cadd699196b0b3b184ae576e63%40group.calendar.google.com&ctz=Europe%2FBerlin" 
          className="z-10"
          style={{border: 0}}
          width="800" 
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>        
      </div>
      <IconArrowDown />
      <div className="w-full my-32 px-5 flex items-center justify-center">
        <iframe 
          className="w-full max-w-4xl aspect-[5/6] border-2" 
          src="https://docs.google.com/document/d/e/2PACX-1vT3BPAbMeSHgWqtz0cHxGBZnW6texpMgg56UsCv-oIeb43ri6Dd0g_o0bV4DPflVlQZJMaSiWMejubO/pub?embedded=true"
        ></iframe>
      </div>
      <IconArrowDown />
      <Footer />
    </div>
  );
}

export default App;
