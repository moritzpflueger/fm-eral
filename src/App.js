import Menu from './components/Menu';
import Header from './components/Header';
import AboutText from './components/AboutText';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import IconArrowDown from './components/IconArrowDown';
import Schedule from './components/Schedule';
import './App.css';
import CookieBanner from './components/CookieBanner';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <div className="w-full flex flex-col items-center">
      <Menu 
        showMenu={menuIsVisible}
        handleMenuToggle={() => setMenuIsVisible(false)} 
      />

      <IconArrowDown />
      <AboutText />
      <Schedule />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
