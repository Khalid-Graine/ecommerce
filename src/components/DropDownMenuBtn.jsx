import React from "react";

const DropDownMenuBtn = ({ children }) => {
  return (
    <button
      className={"flex items-center justify-center gap-2 rounded-sm px-2 py-1 "}
    >
      <p className="capitalize">{children}</p>

      <i className="fa-solid fa-sort-down -mt-1"></i>
      <i className="fa-solid fa-sort-up"></i>
    </button>
  );
};

export default DropDownMenuBtn;
