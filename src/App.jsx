import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SideMenu from "./components/SideMenu";

const App = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <Navbar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <SideMenu showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
