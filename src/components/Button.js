import React from 'react'

const Button = ({ text, classText, onClick }) => {
  return (
    <div>
        <button onClick={onClick} className={classText}>{text}</button>
    </div>
  )
}

export default Button