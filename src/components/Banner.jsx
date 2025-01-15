import React from "react";
import bannerImg from "../assets/images/coding.jpg";
import photo from "../assets/images/loc-photo.jpeg";

const Banner = ({ title = "Loc Bui", subTitle = "Front-end Developer" }) => {
  return (
    <>
      <a name="top" />
      <div className="w-full h-full bg-gray-200">
        <img className="w-full h-screen invisible sm:visible" src={bannerImg} />
        <div className="absolute inset-0 flex items-center justify-center min-w-60 bg-black bg-opacity-70 font-sans">
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
      </div>
    </>
  );
};

export default Banner;
