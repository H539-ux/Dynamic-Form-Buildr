import React from 'react'
import './selectedcard.css'
const SelectedCard = ({label,onRemove}) => {
  console.log(label)
  return (
    <div className='selectedCardContainer'>
        <span>{label}</span>
        <span onClick={onRemove}>X</span>
    </div>
  )
}

export default SelectedCard