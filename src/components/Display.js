import React, { Component, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FieldsComponents from './FieldsComponents';
import './display.css'
const Display = () => {
  const { state } = useLocation();
  const [data,setData] = useState({})
 const handleSubmit = (e)=>{
    e.preventDefault();
     console.log(data)
 }

 const handleChange = (value,label)=>{
    
    setData((prev)=>(
    {
      ...prev,
      [label]:value
    }
    ))

 }

  return (

    <div className='display-container'>
     <form className='form-container' onSubmit={handleSubmit}>
        {
          state.map((field)=>(
            <FieldsComponents
             className='field'
              key={field.selectedId}
              field={field.field}
              value={data[field.field.label]||''}
              onChange={(value)=>handleChange(value,field.field.label)}
            />
          ))
        }
    
      <button  type='submit'>submit</button>

     </form>
     

    </div>
  )
}

export default Display