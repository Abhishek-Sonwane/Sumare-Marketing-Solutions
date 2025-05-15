import BannerImage from "../assets/banner.png";

const Banner2 = () => {
  return (
    <div className="my-20 font-montserrat px-4 sm:px-10 lg:px-20">
      <h1 className="text-center font-bold text-lg lg:text-[32px] my-4 lg:my-10 ">
        Real Estate-Focused Digital Mastery
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="">
          <img src={BannerImage} alt="" className="" />
        </div>
        <div className="max-w-[730px]">
          <h1 className="font-montserrat font-bold text-lg text-wrap lg:text-[32px] pt-6 md:pt-0 ">
            Unlock the Potential of Digital Real Estate Excellence
          </h1>
          <h4 className="pt-3 font-sans font-normal text-base lg:text-xl text-wrap ">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </h4>
          <button className="bg-[#0078FF] px-10 py-2 mt-5 rounded-full text-white text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
