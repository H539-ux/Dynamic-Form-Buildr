import React from 'react'
import './options.css'
import Input from './FormFieldsComponents/Input'
const Options = ({onSelect}) => {
  const fields=[
    {
      "id": 1,
      "type": "text",
      "label": "Full Name",
      "placeholder": "John Doe",
      "component":'Input'
    },
    {
      "id": 2,
      "type": "email",
      "label": "Email",
      "placeholder": "john@example.com",
      "component":'Input'
    },
    {
      "id": 3,
      "type": "number",
      "label": "Age",
      "component":'Input'
    },
    {
      "id": 4,
      "type": "select",
      "label": "Country",
      "component":"Select",
      "options": [
        {"value": "", "label": "Select country"},
        {"value": "usa", "label": "USA"},
        {"value": "ind", "label": "India"}
      ]
    },
   
   
    {
      "id": 8,
      "type": "date",
      "component":"Date",
      "placeholder":"enter date",
      "label": "Birth Date"
    }
  ]


  return (
    <div className='options-container'>
      {
        fields.map((field)=>(
          <span onClick={()=>onSelect(field)} key={field.id}>
             {field.type}
          </span>
        ))
      }
    </div>
  )
}

export default Options