const Footer = () => {
  return (
    <footer className="bg-eralblue text-white p-10">
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
      <div className="flex flex-col sm:flex-row justify-between py-10 order-1">
        <a href="/legal">legal notice</a>
        <div className="flex gap-5 items-center sm:justify-center order-3 sm:order-2">
          <div>Logo 1</div>
          <div>Logo 2</div>
          <div>Logo 3</div>
        </div>
        <a href="/impressum" className="order-2 sm:order-3">impressum</a>
      </div>
    </footer>
  );
};

export default Footer;