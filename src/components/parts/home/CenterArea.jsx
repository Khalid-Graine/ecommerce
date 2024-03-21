import React from "react";

const CenterArea = () => {
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
    <div className="flex-grow border  border-y-0 border-black bg-red-100 p-4">
      {/* first div */}
      <div className="grid grid-cols-6 gap-4 bg-purple-500 pb-4">
        <div className=" col-span-6 h-[300px] w-full bg-green-500"></div>
        <div className="relative col-span-full flex h-[150px] w-full items-center justify-center overflow-hidden bg-blue-400 sm:col-span-3">
          <img
            className=" object-contain object-center "
            src="src/assets/iphone.jpg"
            alt=""
          />
          <button className="absolute bg-green-500 px-2 py-1 font-semibold uppercase text-white hover:bg-green-600 active:bg-green-500">
            test banner 1
          </button>
        </div>
        <div className="relative col-span-full flex h-[150px] w-full items-center justify-center overflow-hidden bg-blue-400 sm:col-span-3">
          <img
            className=" object-contain object-center "
            src="src/assets/iphone2.webp"
            alt=""
          />
          <button className="absolute bg-green-500 px-2 py-1 font-semibold uppercase text-white hover:bg-green-600 active:bg-green-500">
            test banner 2
          </button>
        </div>
      </div>

      {/* second div */}
      <div className="grid grid-cols-1 gap-1 bg-red-700 lg:grid-cols-12">
        {modules.map((module, index) => (
          <div key={index} className=" col-span-4 flex bg-slate-800 py-2">
            <div className="flex items-center justify-center px-4">
              <i className={module.icon}></i>
            </div>
            <div>
              <h3 className="font-bold text-white">{module.title}</h3>
              <p className=" text-gray-600">{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterArea;
