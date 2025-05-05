import React, { useEffect, useRef } from 'react'
import './display.css'
const SubmitedData = ({ data, onClose }) => {
  const modelref = useRef()
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelref.current && !modelref.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])


  return (
    <div className='show-container'>
      <div ref={modelref} className='show-modal'>
        <h1>submit data</h1>
        <pre>{JSON.stringify(data, null, 2)} </pre>
        <button onClick={onClose}>close</button>
      </div>


    </div>
  )
}

export default SubmitedData