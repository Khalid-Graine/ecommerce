import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({icon,text}) => {
  return (
    
            <Link to={`/${text}`}>
              <div className="flex h-full items-center gap-1 rounded-sm bg-white px-2 text-black">
                <i className={icon}></i>
                <p className="uppercase">{text}</p>
              </div>
            </Link>
          
  )
}

export default NavLink


