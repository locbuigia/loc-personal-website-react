import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import resume from "../assets/files/resume.pdf";
import logo from "../assets/images/loc-logo.png";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const handleMenuClick = () => setShowNavMenu(!showNavMenu);

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isAtTop ? "transparent" : "black",
        padding: isAtTop ? "15px" : "0px",
        transition:
          "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
      }}
      className="flex fixed top-0 w-full text-white z-50 sm:items-center justify-between"
    >
      <a href="#top">
        <img src={logo} className="w-16 h-16" />
      </a>
      <div className="max-w-7xl mr-4">
        <div className="justify-center">
          <div
            className={`${showNavMenu ? `flex` : `hidden`} sm:flex md:ml-auto`}
          >
            <div className="flex text-sm">
              <ul className="sm:flex font-thin tracking-wide">
                <li className="flex justify-center">
                  <button onClick={handleMenuClick} className="my-2 mx-1">
                    <a
                      href="#about"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      ABOUT
                    </a>
                  </button>
                </li>
                <li className="flex justify-center">
                  <button onClick={handleMenuClick} className="my-2 mx-1">
                    <a
                      href="#experience"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      EXPERIENCE
                    </a>
                  </button>
                </li>
                <li className="flex justify-center">
                  <button onClick={handleMenuClick} className="my-2 mx-1">
                    <a
                      href="#projects"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      PROJECTS
                    </a>
                  </button>
                </li>
                <li className="flex justify-center">
                  <button onClick={handleMenuClick} className="my-2 mx-1">
                    <a
                      href="#contact"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      CONTACT
                    </a>
                  </button>
                </li>
                <li className="flex justify-center">
                  <button onClick={handleMenuClick} className="my-2 mx-1">
                    <a
                      href={resume}
                      target="_blank"
                      className="text-black bg-teal-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
                    >
                      RESUME
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleMenuClick} className="sm:hidden h-16 mr-4">
        <IoMenuSharp size={26} />
      </button>
    </nav>
  );
};

export default Navbar;
