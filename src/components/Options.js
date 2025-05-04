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
      "options": [
        {"value": "", "label": "Select country"},
        {"value": "us", "label": "USA"},
        {"value": "in", "label": "India"}
      ]
    },
    {
      "id": 5,
      "type": "checkbox",
      "label": "Subscribe to newsletter"
    },
    {
      "id": 6,
      "type": "radio",
      "label": "Gender",
      "options": [
        {"value": "male", "label": "Male"},
        {"value": "female", "label": "Female"}
      ]
    },
    {
      "id": 7,
      "type": "textarea",
      "label": "Bio",
      "rows": 3
    },
    {
      "id": 8,
      "type": "date",
      "label": "Birth Date"
    },
    {
      "id": 9,
      "type": "file",
      "label": "Upload Photo"
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