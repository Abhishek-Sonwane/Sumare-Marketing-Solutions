import { services } from "../assets";

const Service = () => {
  return (
    <div className="my-20 px-10 py-10 lg:px-20">
      <div className="flex flex-col items-center font-montserrat gap-6">
        <h1 className="font-bold text-2xl md:text-[32px] ">
          Our Service Offerings
        </h1>
        <h4 className="font-normal text-lg text-center md:text-2xl text-[#333333] font-sans  ">
          Strategies that Drive Property Market Excellence
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center justify-center gap-2 shadow-md shadow-black/30 rounded-lg py-10 px-4 border border-gray-300 "
            >
              <img
                src={item.image}
                alt=""
                className="bg-gray-200 p-2 rounded-full"
              />
              <h1 className="font-montserrat font-bold text-lg">{item.name}</h1>
              <h4 className="font-montserrat font-normal text-sm">
                {item.description}
              </h4>
            </div>
          ))}
        </div>
        <button className="bg-[#0078FF] px-10 py-2 mt-5 rounded-full text-white text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Service;
