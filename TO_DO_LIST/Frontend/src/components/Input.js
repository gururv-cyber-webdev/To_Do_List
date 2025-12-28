import React, { useState } from 'react'
import './Input.css';

const Input = ({setFlag}) => {

   const[activity,setActivity] = useState('')

  const[description,setDescription] = useState('')
  const[date,setDate] = useState('')
    
    const savedata = async(e) => {
        e.preventDefault()
        const list = { activity,description,date }
        const response = await fetch('http://localhost:5000/add',{
          method: 'POST',
          body: JSON.stringify(list),
          headers: {
              'Content-Type':'application/json'
          }
        })

        const json = await response.json()
        if(response.ok)
        {
          console.log("List added")
          setFlag(1)
        }
        setActivity('')
        setDescription('')
        setDate('')
  }
    



  return (
    <div class="input">
      <form onSubmit={savedata}>
        <h3>Activity</h3>
        <input  type="text" value={activity} onChange={(e) => setActivity(e.target.value)}></input>
        <h3>Description</h3>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <h3>Date</h3>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
        <button onClick={savedata}>
            SAVE
        </button>

      </form>
    </div>
  )
}

export default Input
