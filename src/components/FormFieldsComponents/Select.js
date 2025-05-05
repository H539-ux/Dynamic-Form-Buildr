import React from 'react'

const Select = ({options,label,onChange} ) => {
  console.log(options)
  return (
    <div>
       <label>{label}</label>
      <select onChange={(event)=>onChange(event.target.value)}>
       {
        options.map((option,index)=>(
          <option value={option.value}>{option.label}</option>
        ))
       }

      </select>

    </div>
  )
}

export default Select