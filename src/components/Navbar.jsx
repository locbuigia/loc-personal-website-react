import React from "react";
import resume from "../assets/files/resume.pdf";

const Navbar = ({ isAtTop }) => {
  return (
    <nav
      style={{
        backgroundColor: isAtTop ? "transparent" : "black",
        padding: isAtTop ? "15px" : "8px",
        transition:
          "background-color 0.5s ease-in-out, padding 0.5s ease-in-out",
      }}
      className="fixed top-0 left-0 w-full text-white z-50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center">
          <div className="md:ml-auto">
            <div className="flex space-x-2 text-sm">
              <a
                href="#about"
                className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
              >
                ABOUT
              </a>
              <a
                href="#experience"
                className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
              >
                EXPERIENCE
              </a>
              <a
                href="#projects"
                className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="text-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded"
              >
                CONTACT
              </a>
              <a
                href={resume}
                target="_blank"
                className="text-black bg-teal-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
