import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full max-h-[108px] flex items-center justify-between px-10 lg:px-20 bg-white  ">
      <a href="/">
        <img src={Logo} alt="" className="h-20" />
      </a>
      <a
        href="#contact"
        className="lg:w-52 lg:h-11 px-10 py-1 rounded-full border border-[#000C1A] flex items-center justify-center font-inter font-bold text-sm lg:text-lg "
      >
        Contact us
      </a>
    </div>
  );
};

export default Header;
