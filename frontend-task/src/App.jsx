import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Banner2 from "./_components/Banner2";
import Service from "./_components/Service";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import RealEstateService from "./_components/RealEstateService";
import DrivingInquiry from "./_components/DrivingInquiry";

const App = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <Header />
      <Banner />
      <Banner2 />
      <Service />
      <RealEstateService />
      <DrivingInquiry />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
