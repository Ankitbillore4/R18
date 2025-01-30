import React from 'react'

const Button = ({style,btn}) => {

  return (
    <div>
      <button className={`${style} `}>{btn}</button>
    </div>
  )
}

export default Button
