import React from 'react'

const Button = ({children,...propsl}) => {
  return (
    <button className="ButtonB" {...propsl} >{children}</button>
  )
}

export default Button

