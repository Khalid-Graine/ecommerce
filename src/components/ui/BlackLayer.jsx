import React from "react";

const BlackLayer = ({ show = false }) => {
  return (
    <div>
      {show && (
        <div className="  fixed right-0 top-0 z-[2] h-full w-full bg-black opacity-50 transition-all delay-500  duration-1000 ease-linear">
         
        </div>
      )}
    </div>
  );
};

export default BlackLayer;
