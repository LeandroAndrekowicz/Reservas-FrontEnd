import React from 'react'
import './Button.css'

type Props = {
    text: string;
}

const Button = (props: Props) => {
  return (
    <button className='button buttonEffect'>{props.text}</button>
  )
}

export default Button