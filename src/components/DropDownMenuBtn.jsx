import React from 'react'

const DropDownMenuBtn = ({children}) => {
  return (
    
         <button
          className={
            "px-2 py-1 rounded-sm flex items-center justify-center gap-2 "
          }
        >
          <p className="capitalize">{children}</p>

          <i className="fa-solid fa-sort-down -mt-1"></i>
          <i className="fa-solid fa-sort-up"></i>
        </button>
    
  )
}

export default DropDownMenuBtn