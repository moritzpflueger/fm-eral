import Menu from './components/Menu';
import Header from './components/Header';
import Logo from './components/Logo';
import AboutText from './components/AboutText';
import Footer from './components/Footer';
import ListenersCount from './components/ListenersCount';
import IconArrowDown from './components/IconArrowDown';
import Schedule from './components/Schedule';
import './App.css';
import CookieBanner from './components/CookieBanner';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);  
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <div className="w-full flex flex-col items-center">
      <Menu 
        showMenu={menuIsVisible}
        handleMenuToggle={() => setMenuIsVisible(false)} 
      />
      <Header 
        isPlaying={isPlaying} 
        handleAudioClick={togglePlayPause} 
        handleMenuClick={() => setMenuIsVisible(true)}
      />
      <br />
      <br />
      <br />
      <br />
      <ListenersCount />
      <Logo isPlaying={isPlaying} handleClick={togglePlayPause} />

      <IconArrowDown />
      <AboutText />
      <Schedule />
      <Footer />
      <CookieBanner />

      <audio 
        ref={audioRef}
        className="mx-auto mt-5" 
        src="https://streamer.radio.co/s953ef459b/listen" 
        controls={false}
      ></audio>
    </div>
  );
}

export default App;
