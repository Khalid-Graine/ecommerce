import React from "react";

const CenterArea = () => {
  return (
    <div className="sides flex-grow  border border-y-0 border-black bg-red-100">
      <div className="grid grid-cols-6 gap-4 bg-purple-500 ">
        <div className=" col-span-6 h-[300px] w-full bg-green-500"></div>
        <div className="col-span-3 h-[100px] w-full bg-blue-400"></div>
        <div className="col-span-3 h-[100px] w-full bg-blue-400"></div>
        <div></div>
      </div>
      <div className="bg-red-700 grid grid-cols-1 lg:grid-cols-12 gap-1">
        <div className=" bg-yellow-800 col-span-4 flex">
          <div className="px-4 flex justify-center items-center">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>Create and open custom popups from any link or block</p>
          </div>
        </div>
        <div className=" bg-yellow-800 col-span-4 flex">
          <div className="px-4 flex justify-center items-center">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas et deserunt impedit aliquam culpa fuga corrupti autem saepe a?</p>
          </div>
        </div>
        <div className=" bg-yellow-800 col-span-4 flex">
          <div className="px-4 flex justify-center items-center">icon</div>
          <div>
            <h3 className=" font-bold">Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quas et deserunt impedit aliquam culpa fuga corrupti autem saepe a?</p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default CenterArea;
