import React, { useEffect, useState } from 'react'
import './Display.css';

const Display = ({flag,setFlag}) => {
  const[list,setList] = useState([])
   useEffect(() => {
    const fetchlist = async() => {
      const response = await fetch('http://localhost:4012/list')
      const json = await response.json()
      if(response.ok)
      {
        setList(json)
        setFlag(0)
      }
    }
    fetchlist()
  },[flag])

  const deletedata = async(e) => {
    const response = await fetch('http://localhost:4012/delete',{
      method: 'delete',
      body: JSON.stringify(e),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  const json = await response.json()
      if(response.ok)
      {
        setFlag(1)
      }
  
  }

  return (
    <div class="display">
      {
       list.map((val) => {
        return(
          <div key={val.date}>
          <h4>Activity</h4>
          <p>{val.activity}</p>
          <h4>Description</h4>
          <p>{val.description}</p>
          <h4>Date</h4>
          <p>{val.date}</p>
          <button onClick={() => {
            deletedata(val)
          }}>Delete</button>
          </div>
        ) 
        
       }) 
      }
    </div>
  )
}

export default Display
