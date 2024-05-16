import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <p className="p-10 max-w-4xl">
        In the academic year 2023/24, we
        deal with translocal relationships:

        The concept of translocality, de-
        veloped in migration and mobility

        research, has since been applied in

        various disciplines and defined dif-
        ferently depending on the subject

        matter.

        Nevertheless, it deals with the
        transcending of the local, the
        crossing of spatial boundaries,
        and the transfer of people, things,

        ideas, or symbols between differ-
        ent places and living spaces.

        We are streaming from differ-
        ent spaces from 06.06.2024-

        21.06.2024, for more detailed in-
        formation check out our

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
