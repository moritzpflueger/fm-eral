const Menu = ({ showMenu, handleMenuToggle }) => {
  
  const hideMenu = () => {
    handleMenuToggle(false)
  }

  if (!showMenu) return null;

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 pt-32 pb-10 text-4xl sm:text-5xl top-0 left-0 bg-white z-20">
          <li className="absolute top-3 right-3">
            <button onClick={hideMenu}>
              x close
            </button>
          </li>
          <li className="mt-0">
            <a href="#about" onClick={hideMenu}>
              About
            </a>
          </li>
          <li className="mt-8">
            <a href="#schedule" onClick={hideMenu}>
              Schedule
            </a>
          </li>
          <li className="mt-8">
            <a href="#artists" onClick={hideMenu}>
              Artists
            </a>
          </li>
          <li className="mt-8">
            <a href="/impressum" onClick={hideMenu}>
              Impressum
            </a>
          </li>
          <li className="mt-8 mb-4">
            <a href="/legal" onClick={hideMenu}>
              Legal Notice
            </a>
          </li>
        </ul>   
        <div onClick={hideMenu} className="absolute w-full h-full bg-black bg-opacity-25"></div>
      </div>
    </nav>
  );
};

export default Menu;
