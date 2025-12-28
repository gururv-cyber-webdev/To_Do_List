import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import React, { useEffect, useState } from 'react'

function App() {
  // const[activity,setActivity] = useState('')

  // const[description,setDescription] = useState('')
  // const[date,setDate] = useState('')
  // const[list,setList] = useState([])
  // const [showDisplay, setShowDisplay] = useState(false);
  // useEffect(() => {
  //   const fetchlist = async() => {
  //     const response = await fetch('http://localhost:4012/list')
  //     const json = await response.json()
  //     if(response.ok)
  //     {
  //       setList(json)
  //     }
  //   }
  //   fetchlist()
  // },[])

  const[flag,setFlag] = useState(0)

  return (
    <div className="App">
       <Input setFlag={setFlag}/>
       <Display flag={flag} setFlag={setFlag}/>
       
    </div>
  );
}

export default App;
