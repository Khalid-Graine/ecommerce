
import React from 'react'
import Icon from './Icon'

const SliderArrow = ({className, to, onClick}) => {
  return (
    <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
    <Icon className="icon" icon={to} />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore fuga officia rem corporis sunt nostrum earum veniam eum dolorem.
    <p>test</p>
  </button>
  )
}

export default SliderArrow
