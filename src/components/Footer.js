import { Link } from 'react-router-dom';
import IconInstagram from './icons/IconInstagram';
import IconSoundcloud from './icons/IconSoundcloud';

const Footer = () => {
  return (
    <footer className="bg-fmBlue text-white p-10">
      <p>
        Curatorial concept and implementation: Kirill Agafonov, Florian Amoser, Jonas Bernetta, Sharon Chan, Alisha Dutt Islam, Nistiman Erdede, Hannah Essler, Micol Favini, Tsz Hei Fung, Christian Gieben, Emanuel Haab, Roni Idrizaj, Charles Kwong, Ludwig Lederer, Sébastien Mitra, Engy Mohsen, Hans-Jakob Mühlethaler, Jan Reimann, Hiba Tahhan, Soraya Tashima, Anastasia Tatarenko, Egor Tatarenko. Supervision and support: Nicole Frei, Simon Grab, Patrick Müller, Nicholas Schärer, Irene Vögeli       
      </p>
      <div className="flex flex-wrap items-center justify-between py-10 order-1 gap-5">
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