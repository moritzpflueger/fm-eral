import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full p-5 sm:p-10 flex flex-col items-center justify-between text-sm sm:text-base">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center font-semibold">
          <span className="text-3xl mr-2 text-eralblue">⏺</span> currently streaming
        </div>
        <div className="flex items-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 100" fill="#00FF00" className="w-5 h-5 mr-2">
            <path data-name="Path 321" d="M121.456,382.184v-.27c0-21.716-15.084-46.539-36.488-50.788,9.881-3.686,16.893-12.849,16.893-23.6a25.087,25.087,0,0,0-25.52-25.347,25.087,25.087,0,0,0-25.52,25.347c0,10.749,7.012,19.912,16.893,23.6-21.4,4.249-36.488,29.072-36.488,50.788v.27Z" transform="translate(-31.226 -282.182)"></path>
          </svg>
          13 people listening
        </div>
        <button 
          className="w-12 h-12 text-xl flex items-center font-semibold mr-3"
          onClick={handleMenuClick}
        >
          <IconMenu />
        </button>
      </div>
      <Logo />
    </header>
  );
};

export default Header;