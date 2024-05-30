import { Link } from 'react-router-dom';
import IconInstagram from './icons/IconInstagram';
import IconSoundcloud from './icons/IconSoundcloud';

const Footer = () => {
  return (
    <footer className="bg-fmBlue text-white p-10">
      <p>
        Odio tem del mint et endia int aliqui occabo. Pient volupta
        tisque ipidelent faces nobisquo tem dolo voluptium harchil
        in nos es alia vello et faccat late nonse diti as consendam et
        eum nus essit harum facepeles sitibus eatioria doluptus. Sa
        vel ipieturia apid magnimod quossimagnis apid quo maion

        ne cullaccus evelique es dipit faccusa sit aut ut dolore vitem-
        pere delesse quatemp orpore ressunt laborepudi bea ipsaesti

        as natur arum is dolor re prorese quatium quatur atem nem
        nimagni volum faceptate et, que reper          
      </p>
      <div className="flex flex-wrap items-center justify-between py-10 order-1">
        <Link to="/legal" >legal notice</Link>
        <div className="flex mx-auto pt-8 sm:pt-0 gap-5 items-center sm:justify-center order-3 sm:order-2">

          <a href="https://www.instagram.com" target="_blank">
            <IconInstagram />          
          </a>
          
          <a href="https://www.soundcloud.com" target="_blank">
            <IconSoundcloud />
          </a>

        </div>
        <Link to="/impressum" className="order-2 sm:order-3">impressum</Link>
      </div>
    </footer>
  );
};

export default Footer;