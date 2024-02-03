import React from 'react'

export const Button = (props) => {
  return (
    <div className='m-4 md:m-3'>
        <button onClick={props.onclick} className='w-24 h-9 rounded-lg  bg-green-600 hover:bg-green-800'>{props.label}</button>
    </div>
  )
}
