import React, { useState } from 'react'
import './home.css'
import Options from './Options'
import SelectedCard from './SelectedCard'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const FormBuilderHome = () => {
  const [selected,setSelected] = useState([])

  const navigate = useNavigate()
  const select = (field)=>{
    if(selected.length>7) return;
    setSelected((prev)=>[...prev,{field,
      selectedId:uuidv4()
    }])
  }

  const sendSelected = ()=>{
   navigate('/display',{state:selected})
  
  }
  const remove = (id)=>{
     setSelected((prev)=>(
       prev.filter((item)=>item.selectedId!==id)
     )

     )
  }
  return (
    <div className='home-container'>
      <Options
       onSelect={select}
      />
    
      <div style={selected.length>7 ?{border:'2px solid red'}:{}} className='show-selected'>
        {
          selected?.map((field)=>(
            <SelectedCard
             key={field.selectedId}
             label={field.field.type}
             onRemove={()=>remove(field.selectedId)}
            />
          ))
        }
        
      </div>
      {selected.length>7 && <h3 style={{color:'red'}}>cant select more than 7</h3>} 
      <button style={{width:'5rem',backgroundColor:'#00b289',borderStyle:'none',padding:"4px",color:'#fff',cursor:"pointer",borderRadius:"4px"}} onClick={sendSelected}>confirm</button>
    </div>
  )
}

export default FormBuilderHome