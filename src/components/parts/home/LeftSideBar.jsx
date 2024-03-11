import React from "react";

const LeftSideBar = () => {
  return (
    <div className="flex  w-[260px] flex-col bg-yellow-300 px-4 py-2">
      <div>
        <p className="title">title</p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default LeftSideBar;
