import BlogsSection from "../components/parts/home/BlogsSection";
import CenterArea from "../components/parts/home/CenterArea";
import FeaturesSection from "../components/parts/home/FeaturesSection";
import LeftSideBar from "../components/parts/home/LeftSideBar";
import RightSideBar from "../components/parts/home/RightSideBar";

const Home = () => {
  return (
    <>
      <div className="flex">
        {/* left side */}
        <LeftSideBar />
        {/* center */}
        <CenterArea />
        {/* right */}
        <RightSideBar />
      </div>
      <div className="flex items-center justify-center gap-1 bg-[#d3d3d3] py-3  text-[#333333] ">
        <i className="fa-solid fa-truck-fast"></i>
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
      
      <FeaturesSection />
      <BlogsSection />

    </>
  );
};

export default Home;
