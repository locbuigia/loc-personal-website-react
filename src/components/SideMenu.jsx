import React from "react";
import { MdClose } from "react-icons/md";
import resume from "../assets/files/resume.pdf";
import logo from "../assets/images/loc-logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Divider from "./Divider";

const SideMenu = ({ showSideMenu, setShowSideMenu }) => {
  const handleMenuClick = (id) => {
    setShowSideMenu(false);
    console.log(id);
    const view = document.getElementById(id);
    view.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="block sm:hidden">
      <div
        className={`fixed w-full h-full bg-zinc-900 inset-0 flex justify-end z-50 text-white transition-transform duration-500 ${
          showSideMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute flex top-4 left-4 h-14 w-14">
          <img src={logo} />
        </div>
        <button
          onClick={() => setShowSideMenu(false)}
          className="absolute top-6 right-6 hover:text-gray-600 focus:outline-none"
        >
          <MdClose size={30} />
        </button>
        <div className="w-full pt-24 pb-10 px-4 flex flex-col items-center justify-between">
          <div className="w-full flex flex-col text-2xl space-y-6">
            <button
              onClick={() => handleMenuClick("about")}
              className="w-full flex flex-col justify-start mx-1"
            >
              <a href="#about" className="px-3 py-2 rounded">
                ABOUT
              </a>
              <Divider />
            </button>
            <button
              onClick={() => handleMenuClick("experience")}
              className="w-full flex flex-col justify-start mx-1"
            >
              <a href="#experience" className="px-3 py-2 rounded">
                EXPERIENCE
              </a>
              <Divider />
            </button>
            <button
              onClick={() => handleMenuClick("projects")}
              className="w-full flex flex-col justify-start mx-1"
            >
              <a href="#projects" className="px-3 py-2 rounded">
                PROJECTS
              </a>
              <Divider />
            </button>
            <button
              onClick={() => handleMenuClick("contact")}
              className="w-full flex flex-col justify-start mx-1 items-start"
            >
              <a href="#contact" className="px-3 py-2 rounded">
                CONTACTS
              </a>
              <Divider />
            </button>
            <button
              onClick={handleMenuClick}
              className="w-full flex flex-col justify-start mt-1"
            >
              <a
                href={resume}
                target="_blank"
                className="text-black bg-teal-400 px-3 py-2 rounded"
              >
                RESUME
              </a>
            </button>
          </div>
          <div>
            <p className="tracking-wide leading-loose ">
              Built by Loc Bui - 2025
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/locbuigia/"
                className="mr-8"
                target="_blank"
              >
                <FaLinkedin size={36} />
              </a>
              <a href="https://github.com/locbuigia" target="_blank">
                <FaGithub size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
