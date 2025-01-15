import React from "react";
import resume from "../assets/files/resume.pdf";

const Navbar = ({ isAtTop }) => {
  return (
    <nav
      style={{
        backgroundColor: isAtTop ? "transparent" : "black",
        padding: isAtTop ? "10px" : "0px",
        transition:
          "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
      }}
      className="fixed top-0 left-0 w-full text-white z-50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch">
            <div className="md:ml-auto">
              <div className="flex space-x-5">
                <a
                  href="#about"
                  className="text-white hover:bg-gray-600 hover:text-white px-3 py-2"
                >
                  ABOUT
                </a>
                <a
                  href="#experience"
                  className="text-white hover:bg-gray-600 hover:text-white px-3 py-2"
                >
                  EXPERIENCE
                </a>
                <a
                  href="#projects"
                  className="text-white hover:bg-gray-600 hover:text-white px-3 py-2"
                >
                  PROJECTS
                </a>
                <a
                  href={resume}
                  target="_blank"
                  className="text-black bg-teal-400 hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
                >
                  RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
