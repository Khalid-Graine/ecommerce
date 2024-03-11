import React from "react";

const CenterArea = () => {
  return (
    <div className=" flex-grow  border border-y-0 border-black bg-red-100 px-4 pt-4">
      <div className="grid grid-cols-6 gap-4 bg-purple-500 ">
        <div className=" col-span-6 h-[300px] w-full bg-green-500"></div>
        <div className="col-span-3 h-[100px] w-full bg-blue-400"></div>
        <div className="col-span-3 h-[100px] w-full bg-blue-400"></div>
        <div></div>
      </div>
    </div>
  );
};

export default CenterArea;
