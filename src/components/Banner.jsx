import React from "react";
import bannerImg from "../assets/images/coding.jpg";
import photo from "../assets/images/loc-photo.jpeg";

const Banner = ({ title = "Loc Bui", subTitle = "Front-end Developer" }) => {
  return (
    <div className="w-full h-full">
      <img className="w-full h-screen" src={bannerImg} />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 font-thin font-sans">
        <img className="w-32 h-32 mr-8 rounded-full" src={photo} />
        <div>
          <h1 className="text-white text-2xl md:text-2xl font-bold">{title}</h1>
          <h5 className="text-gray-200 text-base md:text-base mb-4">
            {subTitle}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
