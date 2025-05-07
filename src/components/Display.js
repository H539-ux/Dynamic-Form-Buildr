import React, { Component, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FieldsComponents from './FieldsComponents';
import './display.css'
import SubmitedData from './SubmitedData';
const Display = () => {
  const { state } = useLocation();
  const [data, setData] = useState({})
  const [showModel, setShowModel] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModel(true);
  }

  const handleChange = (value, label) => {
      
    setData((prev) => (
      {
        ...prev,
        [label]: value
      }
    ))

  }

  return (

    <div className='display-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        {
          state.map((field) => (
            <FieldsComponents
              className='field'
              key={field.selectedId}
              field={field.field}
              value={data[field.field.label] || ''}
              onChange={(value) => handleChange(value, field.field.label)}
            />
          ))
        }
        {showModel && <SubmitedData
          data={data}
          onClose={() => setShowModel(false)}
        />}
        <button  type='submit'>submit</button>

      </form>


    </div>
  )
}

export default Display