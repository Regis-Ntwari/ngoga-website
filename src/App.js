import { useRef } from "react";
import "./App.css";
import { Contact } from "./contact/contact";
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/Navbar";
import { Welcome } from "./welcome/welcome";
import { WhatWeOffer } from "./what_we_offer/WhatWeOffer";
import { WhyChoseUs } from "./why_chose_us/whychoseus";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <Welcome scroll={scrollToContact} />
      <WhatWeOffer />
      <WhyChoseUs />
      <Contact reference={contactRef} />
      <Footer />
    </>
  );
}

export default App;
