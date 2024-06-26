import { Link } from 'react-router-dom';
import IconClose from './icons/IconClose';

const Menu = ({ showMenu, handleMenuToggle }) => {
  
  const hideMenu = () => {
    handleMenuToggle(false)
  }

  if (!showMenu) return null;

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 py-6 text-4xl sm:text-5xl top-0 left-0 bg-white z-20 max-h-[100dvh] overflow-y-auto">
          <li className="absolute top-3 right-1">
            <button 
              onClick={hideMenu}
              className="w-12 h-12"
            >
              <IconClose />
            </button>
          </li>
          <li className="text-xl sm:text-2xl">
            <Link to="/" onClick={hideMenu}>
              FMeral.world
            </Link>
          </li>
          <li className="mt-16" style={{ fontFamily: 'Synt, serif'}}>
            <Link to="/#about" onClick={hideMenu}>
              About
            </Link>
          </li>
          <li className="mt-8" style={{ fontFamily: 'Synt, serif'}}>
            <Link to="/#schedule" onClick={hideMenu}>
              Schedule
            </Link>
          </li>
          <li className="mt-8" style={{ fontFamily: 'Synt, serif'}}>
            <Link to="/#artists" onClick={hideMenu}>
              Artists
            </Link>
          </li>
          <li className="mt-8" style={{ fontFamily: 'Synt, serif'}}>
            <a href="https://www.instagram.com/zhdk_transdisciplinary" target="_blank" onClick={hideMenu}>
              Instagram
            </a>
          </li>
          <li className="mt-8" style={{ fontFamily: 'Synt, serif'}}>
            <a href="https://soundcloud.com/kontakt-mtr" target="_blank" onClick={hideMenu}>
              Archive
            </a>
          </li>
          <li className="mt-16 mb-8 text-xl sm:text-2xl flex gap-2 sm:gap-5 flex-wrap">
            <Link to="/impressum" onClick={hideMenu}>
              Impressum
            </Link>
            /
            <Link to="/legal" onClick={hideMenu}>
              Legal Notice
            </Link>
          </li>
        </ul>   
        <div onClick={hideMenu} className="absolute w-full h-full bg-black bg-opacity-25"></div>
      </div>
    </nav>
  );
};

export default Menu;
