import React, { useState } from "react";
import resume from "../assets/files/resume.pdf";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = ({ isAtTop }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const handleMenuClick = () => setShowNavMenu(!showNavMenu);

  return (
    <nav
      style={{
        backgroundColor: isAtTop ? "transparent" : "black",
        padding: isAtTop ? "15px" : "8px",
        transition:
          "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
      }}
      className="fixed top-0 w-full text-white z-50"
    >
      <button onClick={handleMenuClick} className="sm:hidden">
        <IoMenuSharp size={26} />
      </button>
      <div className="mx-auto max-w-7xl">
        <div className="flex sm:items-center sm:justify-center">
          <div
            className={`${showNavMenu ? `flex` : `hidden`}  sm:flex md:ml-auto`}
          >
            <div className="flex space-x-2 text-sm">
              <ul className="sm:flex">
                <li>
                  <button onClick={handleMenuClick} className="my-2">
                    <a
                      href="#about"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      ABOUT
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={handleMenuClick} className="my-2">
                    <a
                      href="#experience"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      EXPERIENCE
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={handleMenuClick} className="my-2">
                    <a
                      href="#projects"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      PROJECTS
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={handleMenuClick} className="my-2">
                    <a
                      href="#contact"
                      className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                    >
                      CONTACT
                    </a>
                  </button>
                </li>
                <li>
                  <button onClick={handleMenuClick} className="my-2">
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
    </nav>
  );
};

export default Navbar;
