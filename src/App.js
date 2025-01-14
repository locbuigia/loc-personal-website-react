import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  console.log("is dark mode", darkMode);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
