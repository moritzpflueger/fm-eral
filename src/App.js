import Header from './components/Header';
import Footer from './components/Footer';
import RadioPlayer from './components/RadioPlayer';
import './App.css';

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <RadioPlayer />

      <p className="p-10 max-w-4xl text-lg">
        In the academic year 2023/24, we
        deal with <u>translocal relationships</u>:

        The concept of <u>translocality</u>, developed in migration and mobility

        research, has since been applied invarious 
        disciplines and defined differently depending on the subject matter.

        Nevertheless, it deals with the
        transcending of the local, the
        crossing of spatial boundaries,
        and the transfer of people, things,

        ideas, or symbols between <u>different places</u> and living spaces.

        We are <span className="text-eralblue">streaming</span> from different spaces from 06.06.2024-21.06.2024, for more detailed information check out our
        program:        
      </p>
      <div className="flex justify-center text-5xl">
        ↓
      </div>
      <div className="w-full my-32 h-64 bg-neutral-200 flex items-center justify-center">
        Calendar iFrame
      </div>
      <div className="flex justify-center text-5xl">
        ↓
      </div>
      <div className="w-full my-32 h-64 bg-neutral-200 flex items-center justify-center">
        Google Docs iFrame
      </div>
      <Footer />
    </div>
  );
}

export default App;
