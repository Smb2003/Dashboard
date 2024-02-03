import React from 'react'

export const InputFields = (props) => {
  return (
    <div className='w-full h-auto px-3'>
        <label htmlFor="" className='font-medium'>{props.label}</label>
        <input
        className='w-full p-3 rounded my-3'
        id={props.id}
        type={props.type}
        required
        placeholder={props.placeholder}
        onChange={props.onchange}
        />
    </div>
  )
}
