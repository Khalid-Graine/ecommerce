import React from 'react'

const FeaturesSection = () => {
  return (
    <div className="sides">
        <h3 className="my-3 mt-5 text-center">Why Buy From Us?</h3>
        <ul className="bg-green-100 grid grid-cols-2 gap-6">
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-500 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
  )
}

export default FeaturesSection