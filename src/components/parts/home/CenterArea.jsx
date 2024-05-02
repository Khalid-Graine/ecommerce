import React from "react";
import HomeCarousel from "./HomeCarousel";

const CenterArea = () => {
  const banners = [
    {
      title: "Sample Banner 1",
      link: "#",
      picture: "src/assets/samsung.jpg",
    },
    {
      title: "Sample Banner 2",
      link: "#",
      picture: "src/assets/iphone2.webp",
    },
  ];
  const modules = [
    {
      title: "Lorem ipsum dolor sit.",
      icon: "fa-solid fa-fire-flame-curved text-2xl text-red-600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eum.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      icon: "fa-solid fa-fire-flame-curved text-2xl text-red-600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eum.",
    },
    {
      title: "Lorem ipsum dolor sit.",
      icon: "fa-solid fa-fire-flame-curved text-2xl text-red-600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eum.",
    },
  ];
  return (
    <div className="flex-grow border  border-y-0 border-black  p-4">
      {/* first div */}
      <div className="grid grid-cols-6 gap-4  pb-4">
        <HomeCarousel />
        {banners.map((item, i) => (
          <Banner item={item} />
        ))}
      </div>

      {/* second div */}
      <div className="grid grid-cols-1 gap-1  lg:grid-cols-12">
        {modules.map((module, index) => (
          <ModuleCard module={module} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CenterArea;
const ModuleCard = ({ module, index }) => {
  return (
    <div key={index} className=" col-span-4 flex bg-slate-800 py-2">
      <div className="flex items-center justify-center px-4">
        <i className={module.icon}></i>
      </div>
      <div>
        <h3 className="font-bold text-white">{module.title}</h3>
        <p className=" text-gray-600">{module.description}</p>
      </div>
    </div>
  );
};
const Banner = ({ item }) => {
  return (
    <div className="relative col-span-full flex h-[150px] w-full items-center justify-center overflow-hidden bg-blue-400 sm:col-span-3">
      <img
        className=" object-contain object-center "
        src={item.picture}
        alt=""
      />

      <a
        href={item.link}
        className="absolute bg-green-500 px-2 py-1 font-semibold uppercase text-white hover:bg-green-600 active:bg-green-500"
      >
        {item.title}
      </a>
    </div>
  );
};
