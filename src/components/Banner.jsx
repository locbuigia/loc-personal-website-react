import React from "react";
import bannerImg from "../assets/images/coding.jpg";
import photo from "../assets/images/loc-photo.jpeg";
import { GoChevronDown } from "react-icons/go";

const Banner = ({ title = "Loc Bui", subTitle = "Front-end Developer" }) => {
  return (
    <>
      <a name="top" />
      <div className="w-full h-full bg-gray-800">
        <img className="w-full h-screen invisible sm:visible" src={bannerImg} />
        <div className="absolute inset-0 items-center justify-center min-w-60 sm:bg-black sm:bg-opacity-70 font-sans">
          <div className="flex items-center justify-center w-full h-screen">
            <img className="w-32 h-32 mr-8 rounded-full" src={photo} />
            <div>
              <h1 className="text-white text-2xl md:text-2xl font-semibold">
                {title}
              </h1>
              <h5 className="text-gray-200 text-base md:text-base mb-4 font-thin tracking-wide">
                {subTitle}
              </h5>
            </div>
          </div>
          <a href="#about">
            <GoChevronDown
              size={80}
              color="white"
              className="w-full -mt-48 hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
