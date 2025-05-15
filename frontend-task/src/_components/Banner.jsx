import React from "react";
import HeaderImage from "../assets/HeaderImage.png";

const Banner = () => {
  return (
    <div className="relative pt-10 sm:my-10  flex flex-col items-center gap-20 w-full ">
      <div className="font-montserrat text-center max-w-4xl mx-auto flex flex-col gap-2 md:gap-4 items-center px-4 sm:px-8 lg:px-10 ">
        <h1 className="font-medium text-xl sm:text-2xl md:w-3xl lg:text-5xl text-[#000C1A] ">
          Elevate{" "}
          <span className="text-[#0078FF] font-bold ">Real Estate Success</span>{" "}
          with <br /> Osumare's Digital Expertise
        </h1>
        <h3 className="font-sans text-base text-wrap">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </h3>
        <button className="font-bold text-lg lg:text-2xl text-white bg-[#0078FF] w-sm rounded-full py-2  ">
          Get Started
        </button>
      </div>
      <div className="absolute right-0 top-10 w-xl h-[576px] -z-10 bg-[#80BBFF]/25 rounded-full blur-3xl  "></div>
      <div className="relative w-full flex items-center justify-center ">
        <img src={HeaderImage} alt="" className="w-xl lg:w-3xl " />
        <div className="absolute w-[100vw] -z-10 h-3 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Banner;
