import React from "react";

const RightSideBar = () => {
  const TopCategories = [{
    name : 'phones',
    icon: 'fa-solid fa-desktop',
    link: '#'
  },
  {
    name : 'phones',
    icon: 'fa-solid fa-desktop',
    link: '#'
  }
,
{
  name : 'phones',
  icon: 'fa-solid fa-desktop',
  link: '#'
}]
  return (
    <div className="hidden lm:flex min-w-[230px] flex-col  px-4 py-2 ">
      <div>
        <h4 className="title">top categories</h4>

        <ul className="grid grid-cols-3">
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
        <ul className="grid grid-cols-3 ">
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
