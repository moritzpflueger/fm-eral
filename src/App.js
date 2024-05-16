import Logo from './components/Logo';
import './App.css';


function App() {
  return (
    <div className="">
      <header className="p-10 flex justify-between">
        <Logo />
        <div>
          <div>currently streaming</div>
          <div>n people listening</div>
        </div>
      </header>
      <p>
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

      <footer className="bg-blue-500 text-white p-10">
        <p>
          Odio tem del mint et endia int aliqui occabo. Pient volupta
          tisque ipidelent faces nobisquo tem dolo voluptium harchil
          in nos es alia vello et faccat late nonse diti as consendam et
          eum nus essit harum facepeles sitibus eatioria doluptus. Sa
          vel ipieturia apid magnimod quossimagnis apid quo maion

          ne cullaccus evelique es dipit faccusa sit aut ut dolore vitem-
          pere delesse quatemp orpore ressunt laborepudi bea ipsaesti

          as natur arum is dolor re prorese quatium quatur atem nem
          nimagni volum faceptate et, que reper          
        </p>
        <div className="flex justify-between">
          <a href="#">legal notice</a>
          <a href="#">impressum</a>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div>Logo 1</div>
          <div>Logo 2</div>
          <div>Logo 3</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
