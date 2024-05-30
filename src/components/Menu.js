const Menu = ({ showMenu, handleMenuToggle }) => {
  
  const hideMenu = () => {
    handleMenuToggle(false)
  }

  if (!showMenu) return null;

  return (
    <nav className={`fixed flex items-start justify-between w-full z-50`}>
      <div className="h-[100dvh]">
        <ul className="fixed w-full flex flex-col items-center gap-0 px-10 pt-32 pb-10 text-5xl top-0 left-0 bg-white z-20">
          <li className="absolute top-3 right-3">
            <button onClick={hideMenu}>
              x close
            </button>
          </li>
          <li className="font-semibold mt-0">
            <a href="#about" onClick={hideMenu}>
              About
            </a>
          </li>
          <li className="font-semibold mt-8">Schedule</li>
          <li className="font-semibold mt-8">Artists</li>
          <li className="font-semibold mt-8">Impressum</li>
          <li className="font-semibold mt-8">Legal Notice</li>
        </ul>   
        <div onClick={hideMenu} className="absolute w-full h-full bg-black bg-opacity-25"></div>
      </div>
    </nav>
  );
};

export default Menu;
