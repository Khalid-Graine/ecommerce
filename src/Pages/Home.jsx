import CenterArea from "../components/parts/home/CenterArea";
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
    </>
  );
};

export default Home;
