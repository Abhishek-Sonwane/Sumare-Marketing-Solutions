import React from "react";
import { images, social } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-10 my-10">
      <div className="w-full bg-gradient-to-b from-[#B2D6FF]/50 to-[#006FED]/30 rounded-2xl py-10 px-10 lg:px-20 ">
        <div className="flex flex-col md:flex-row gap-6 justify-around">
          <div className="flex flex-col gap-8 max-w-sm px-5">
            <div className="flex flex-col gap-4">
              <img
                src={images.Logo2}
                alt=""
                className="max-w-[140px] max-h-[75px]"
              />
              <p className="font-sans font-normal text-[16px] text-[#333333] ">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div>
              <h1 className="font-montserrat text-lg font-bold">Address</h1>
              <p className="font-sans font-normal text-[16px] text-[#333333] mt-1 ">
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div>
              <h1 className="font-montserrat text-2xl font-bold">Contacts</h1>
              <div className=" mt-3">
                <p className="font-sans font-normal text-[16px] text-[#333333] flex items-center  gap-2 ">
                  <img src={images.Mail} alt="" />
                  hello@osumare.in
                </p>
                <p className="font-sans font-normal text-[16px] text-[#333333] flex items-center  gap-2 ">
                  <img src={images.Phone} alt="" />
                  +91 8459 8762 26
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-5">
            <h1 className="font-montserrat text-2xl font-bold">Menu</h1>
            <div className="flex flex-col gap-2 font-medium text-[16px] text-[#333333]">
              <a href="#home" className="font-montserrat hover:text-blue-500">
                Home
              </a>
              <a href="#about" className="font-montserrat hover:text-blue-500">
                About
              </a>
              <a
                href="#services"
                className="font-montserrat hover:text-blue-500"
              >
                Services
              </a>
              <a href="#work" className="font-montserrat hover:text-blue-500">
                Work
              </a>
              <a href="#blog" className="font-montserrat hover:text-blue-500">
                Blog
              </a>
              <a href="#career" className="font-montserrat hover:text-blue-500">
                Career
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-2xs px-5">
            <h1 className="font-montserrat text-2xl font-bold">Social</h1>
            <div className="flex gap-4 flex-wrap">
              {social.map((item, index) => (
                <div
                  key={index}
                  className="bg-white w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <img src={item} alt="" className="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="font-montserrat text-[16px] font-medium ">
        © 2023 Osumare. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
