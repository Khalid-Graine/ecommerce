import React from "react";

const CenterArea = () => {
  return (
    <div className="flex-grow border  border-y-0 border-black bg-red-100 p-4">
      <div className="grid grid-cols-6 gap-4 bg-purple-500 ">
        <div className=" col-span-6 h-[300px] w-full bg-green-500"></div>
        <div className="relative col-span-3 flex h-[100px] w-full items-center justify-center overflow-hidden bg-blue-400">
          <img
            className=" object-contain object-center "
            src="src/assets/iphone.jpg"
            alt=""
          />
          <button className="absolute bg-green-500 px-2 py-1 font-semibold uppercase text-white hover:bg-green-600 active:bg-green-500">
            test banner 1
          </button>
        </div>
        <div className="relative col-span-3 flex h-[100px] w-full items-center justify-center overflow-hidden bg-blue-400">
          <img
            className=" object-contain object-center "
            src="src/assets/iphone.jpg"
            alt=""
          />
          <button className="absolute bg-green-500 px-2 py-1 font-semibold uppercase text-white hover:bg-green-600 active:bg-green-500">
            test banner 2
          </button>
        </div>

        <div></div>
      </div>
      <div className="grid grid-cols-1 gap-1 bg-red-700 lg:grid-cols-12">
        <div className=" col-span-4 flex bg-yellow-800">
          <div className="flex items-center justify-center px-4">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>Create and open custom popups from any link or block</p>
          </div>
        </div>
        <div className=" col-span-4 flex bg-yellow-800">
          <div className="flex items-center justify-center px-4">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quas et deserunt impedit aliquam culpa fuga corrupti autem saepe
              a?
            </p>
          </div>
        </div>
        <div className=" col-span-4 flex bg-yellow-800">
          <div className="flex items-center justify-center px-4">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quas et deserunt impedit aliquam culpa fuga corrupti autem saepe
              a?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterArea;
