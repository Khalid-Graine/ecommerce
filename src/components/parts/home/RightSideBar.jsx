import React from "react";

const RightSideBar = () => {
  const TopCategories = [
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
    {
      name: "phones",
      icon: "fa-solid fa-desktop",
      link: "#",
    },
  ];
  return (
    <div className="hidden min-w-[230px] flex-col px-4  py-2 lm:flex ">
      <div>
        <h4 className="title">top categories</h4>

        <div className="grid grid-cols-3 gap-1 py-2">
          {TopCategories.map((categorie, i) => (
            <a href={categorie.link} key={i} className="w-[60px] h-[70px] bg-gray-50 shadow flex flex-col justify-center items-center hover:bg-green-400">
              
                <i className={`${categorie.icon} text-gray-700 `}></i>
                <p className="text-blue-500">{categorie.name}</p>
              
            </a>
          ))}
        </div>
      </div>
      <div className="line"></div>
      <div>
        <h4 className="title">SIGN UP AND SAVE</h4>
        <p>
          Receive a $10 voucher in your inbox immediately after you sign up for
          our newsletter.
        </p>
        <form action="">
          <input type="text" />
          <button>sign</button>
          <input type="checkbox" name="" id="" />
        </form>
      </div>
      <div className="line"></div>
      <div>
        <h4 className="title">GALLERY MODULE</h4>
        <ul className="grid grid-cols-3 *:w-[60px] *:bg-red-500 *:h-[60px] gap-2 *:flex *:justify-center *:items-center">
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSideBar;
