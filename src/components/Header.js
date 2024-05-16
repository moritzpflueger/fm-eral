import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full p-10 flex gap-16 flex-col sm:flex-row items-center justify-between">
      <Logo />
      <div className="flex sm:flex-col items-end justify-between w-full">
        <div>🔵 currently streaming</div>
        <div>👤 n people listening</div>
      </div>
    </header>
  );
};

export default Header;