import React from 'react'

const LeftSideBar = () => {
  return (
    <div className="w-[260px]  bg-yellow-300 py-2 px-4 flex flex-col" >
    <div>
      <p className="title">title</p>
      <ul>
        <li>
          Product 1
        </li>
        <li>
          Product 2
        </li>
        <li>
          Product 3
        </li>
        <li>
          Product 4
        </li>
      </ul>
    </div>
    <div className="line"></div>
  </div>
  )
}

export default LeftSideBar