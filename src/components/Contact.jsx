import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="font-thin font-sans w-full text-center bg-gray-100 py-16">
      <div className="lg:mx-64 md:mx-24 sm:mx-8">
        <h1 className="text-4xl mb-8">CONTACT</h1>
        <p className="tracking-wide leading-loose mb-6">
          Let's connect and discuss how we can create impactful digital
          solutions together!
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/locbuigia/"
            className="mr-8"
            target="_blank"
          >
            <FaLinkedin size={60} />
          </a>
          <a href="https://github.com/locbuigia" target="_blank">
            <FaGithub size={60} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
