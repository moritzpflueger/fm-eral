import { Link } from 'react-router-dom';
import IconInstagram from './icons/IconInstagram';
import IconSoundcloud from './icons/IconSoundcloud';
import IconZHdKLogo from './icons/IconZHdKLogo';

const Footer = () => {
  return (
    <footer className="bg-fmBlue text-white p-10">
      <p>
        Curatorial concept and implementation: Kirill Agafonov, Florian Amoser, Jonas Bernetta, Sharon Chan, Alisha Dutt Islam, Nistiman Erdede, Hannah Essler, Micol Favini, Tsz Hei Fung, Christian Gieben, Emanuel Haab, Roni Idrizaj, Charles Kwong, Ludwig Lederer, Sébastien Mitra, Engy Mohsen, Hans-Jakob Mühlethaler, Jan Reimann, Hiba Tahhan, Soraya Tashima, Anastasia Tatarenko, Egor Tatarenko. Supervision and support: Nicole Frei, Simon Grab, Patrick Müller, Nicholas Schärer, Irene Vögeli       
      </p>
      <div className="flex flex-wrap items-center justify-between py-10 order-1 gap-5">
        <Link to="/legal" >legal notice</Link>
        <div className="flex mx-auto pt-8 sm:pt-0 gap-5 items-center sm:justify-center order-3 sm:order-2">

          <a href="https://www.instagram.com/zhdk_transdisciplinary" target="_blank">
            <IconInstagram />          
          </a>

          <a href="https://soundcloud.com/kontakt-mtr" target="_blank">
            <IconSoundcloud />
          </a>

          {/* TODO: Add icon and link to ZHDK? */}
          {/* https://www.zhdk.ch/ */}

        </div>
        <Link to="/impressum" className="order-2 sm:order-3">impressum</Link>
      </div>
      <div className='flex w-full mt-5 sm:mt-0 sm:justify-end'>
        <a href="https://www.zhdk.ch/" target="_blank" className="">
          <IconZHdKLogo />
        </a>
      </div>      
    </footer>
  );
};
export default Footer;