import "./App.css";
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/Navbar";
import { Services } from "./services/services";
import { Welcome } from "./welcome/welcome";
import { WhatWeOffer } from "./what_we_offer/WhatWeOffer";
import { WhyChoseUs } from "./why_chose_us/whychoseus";
import { HomeWork } from "./work/homeWork";

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <WhatWeOffer />
      <WhyChoseUs />
      <HomeWork />
      <Services />
      <Footer />
    </>
  );
}

export default App;
