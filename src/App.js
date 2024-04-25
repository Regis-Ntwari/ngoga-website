import "./App.css";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/Navbar";
import { Welcome } from "./welcome/welcome";
import { WhatWeOffer } from "./what_we_offer/WhatWeOffer";
import { WhyChoseUs } from "./why_chose_us/whychoseus";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <WhatWeOffer />
      <WhyChoseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
