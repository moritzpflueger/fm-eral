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
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 pt-32 pb-10 text-4xl sm:text-5xl top-0 left-0 bg-white z-20">
          <li className="absolute top-2 right-1">
            <button 
              onClick={hideMenu}
              className="w-16 h-16"
            >
              <IconClose />
            </button>
          </li>
          <li className="text-2xl">
            FMeral.world
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
            <a href="https://www.instagram.com" onClick={hideMenu}>
              Instagram
            </a>
          </li>
          <li className="mt-16 mb-8 text-2xl flex gap-5">
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
