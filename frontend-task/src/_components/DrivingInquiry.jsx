import React from "react";
import { images } from "../assets";

const DrivingInquiry = () => {
  return (
    <div className="my-20 px-10 md:px-20 py-10 xl:w-9/12 mx-auto ">
      <div>
        <div className=" flex flex-col items-center justify-center gap-2 mb-8">
          <h1 className="font-montserrat font-bold text-2xl  xl:text-[32px] text-[#000C1A]  ">
            Driving Property Inquiries to Conversions
          </h1>
          <h4 className="font-sans font-normal text-lg xl:text-2xl text-[#333333] ">
            Streamlined Strategies for Real Estate Success
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 xl:gap-[100px]">
          <img src={images.HouseSearching} alt="" className="w-1/2 lg:w-full" />
          <div className="flex flex-col gap-5 xl:gap-10 ">
            <h1 className="font-montserrat font-bold text-2xl xl:text-[32px] text-[#000C1A]  ">
              Optimized Path to Property Purchase
            </h1>
            <h4 className="font-sans font-normal text-lg  xl:text-2xl text-[#333333] ">
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </h4>
            <button className="font-bold text-lg lg:text-2xl text-white bg-[#0078FF] w-3xs rounded-full py-2  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-montserrat font-bold text-[32px] text-[#000C1A] ">
          Driving Property Inquiries to Conversions
        </h1>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default DrivingInquiry;
