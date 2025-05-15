import React from "react";
import { images, realEstateService } from "../assets";

const RealEstateService = () => {
  return (
    <div className="my-20 px-10 py-10 lg:px-20 lg:w-2/3 mx-auto flex flex-col gap-8">
      <div className="text-center">
        <h1 className="font-montserrat font-bold text-[32px] text-[#000C1A] ">
          Navigating Real Estate's Digital Landscape
        </h1>
        <h4 className="text-[#333333] font-sans font-normal text-2xl ">
          Insights for Real Estate Marketing Advantage
        </h4>
      </div>
      <div
        className="bg-right bg-no-repeat bg-contain grid grid-cols-1 md:grid-cols-2 bg-[#F9F9F9] rounded-lg"
        style={{
          backgroundImage: `url(${images.RealEstateServiceBackground})`,
        }}
      >
        <div>
          {realEstateService.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 my-2 max-w-xl h-[100px] items-center px-4 rounded-xl shadow-lg bg-white "
            >
              <img src={item.image} alt="" />
              <div>
                <h1 className="font-poppins font-semibold text-[16px] sm:text-lg lg:text-2xl text-[#000C1A] ">
                  {item.name}
                </h1>
                <h4 className="font-inter font-normal text-xs sm:text-sm lg:text-[16px] text-[#333333]  ">
                  {item.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RealEstateService;
