import React from 'react'
import './Button.css'

type Props = {
    text: string;
    onclick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button className='button buttonEffect' onClick={props.onclick}>{props.text}</button>
  )
}

export default Button