
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="my-20 px-10 py-10 lg:px-20">
      <div className="w-full flex flex-col gap-6 ">
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="font-montserrat font-extrabold text-[32px] text-[#000C1A] ">
            Connect with Our Digital Marketing Experts
          </h1>
          <p className="font-sans font-normal text-2xl text-[#333333] ">
            Reach Out for Tailored Strategies and Results-Driven Solutions.
            Let's Elevate Your Online Presence Together
          </p>
        </div>
        <div className="flex flex-col items-center w-11/12 mx-auto relative">
          <form className="flex flex-col items-center sm:w-3xl xl::w-5xl  rounded-lg shadow-xl px-8 py-8 bg-white " onSubmit={(e)=>handleSubmit(e)}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="p-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-inter font-semibold text-[16px]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-sm font-inter font-normal text-[16px] pl-3 py-1 text-[#0F1407] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="font-inter font-semibold text-[16px]"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    required
                    maxLength={10}
                    placeholder="Enter Your Phone Number"
                    className="border border-gray-300 rounded-sm font-inter font-normal text-[16px] pl-3 py-1 text-[#0F1407] "
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-inter font-semibold text-[16px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    placeholder="Enter Your Email Address"
                    className="border border-gray-300 rounded-sm font-inter font-normal text-[16px] pl-3 py-1 text-[#0F1407] "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 p-2">
                <label
                  htmlFor="message"
                  className="font-inter font-semibold text-[16px]"
                >
                  Message
                </label>
                <textarea
                  name=""
                  id="message"
                  required
                  className="border border-gray-300 rounded-md font-inter font-normal text-[16px] pl-3 py-1 text-[#0F1407] w-full h-full"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
            </div>
            <button className="bg-[#0078FF] px-10 py-2 mt-5 rounded-full text-white text-lg sm:w-md ">
              Get Started
            </button>
          </form>
          <div className="absolute w-xl h-[576px] bg-[#409AFF]/25 rounded-full top-0 -left-1/4 xl:left-20 blur-3xl -z-10"></div>
          <div className="absolute w-xl h-[576px] bg-[#FF725E]/15 rounded-full top-0 -right-1/4 xl:right-20 blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
