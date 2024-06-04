import { Link } from 'react-router-dom';
import IconInstagram from './icons/IconInstagram';
import IconSoundcloud from './icons/IconSoundcloud';
import IconZHdKLogo from './icons/IconZHdKLogo';

const Footer = () => {
  return (
    <footer className="bg-fmBlue text-white p-5 sm:p-10 pb-10">
      <p>
        Curatorial concept and implementation: Kirill Agafonov, Florian Amoser, Jonas Bernetta, Sharon Chan, Alisha Dutt Islam, Nistiman Erdede, Hannah Essler, Micol Favini, Tsz Hei Fung, Christian Gieben, Emanuel Haab, Roni Idrizaj, Charles Kwong, Ludwig Lederer, Sébastien Mitra, Engy Mohsen, Hans-Jakob Mühlethaler, Jan Reimann, Hiba Tahhan, Soraya Tashima, Anastasia Tatarenko, Egor Tatarenko. Supervision and support: Nicole Frei, Simon Grab, Patrick Müller, Nicholas Schärer, Irene Vögeli       
      </p>
      <div className="flex items-end justify-between mt-10 flex-wrap sm:flex-nowrap">
        <div className="flex flex-col flex-wrap items-start justify-between">
          <Link to="/legal" >legal notice</Link>
          <Link to="/impressum" className="">impressum</Link>
          <div className="flex items-center gap-5 mt-5 -translate-x-1">

            <a href="https://www.instagram.com/zhdk_transdisciplinary" target="_blank">
              <IconInstagram />          
            </a>
            
            <a href="https://soundcloud.com/kontakt-mtr" target="_blank">
              <IconSoundcloud />
            </a>


          </div>
        </div>
        <div className='flex w-full mt-5 sm:mt-0 sm:justify-end'>
          <a href="https://www.zhdk.ch/" target="_blank" className="">
            <IconZHdKLogo />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;