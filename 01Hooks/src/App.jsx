import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=12
  let[counter,setCounter]=useState(20)
  const addValue=()=>{
    if(counter<20){
    setCounter(counter+1)}
    else{
      setCounter(counter)
    }
  

    if(counter>=20){
      var val=document.getElementById('missvalue')
      val.innerHTML="Value Is not greater than 20"
    }
   
    else{
      var val=document.getElementById('missvalue')
      val.innerText=""
    }
  }
  const removeValue=()=>{
    
    if(counter>1){
      setCounter(counter-1)
      console.log(counter)
      
    }
    else{
      console.log(counter)
      setCounter(counter)
    }}
    if(counter==1){
      var val=document.getElementById('missvalue')
      val.innerHTML="Value Is less than 1"
    }
   
    else{
      var val=document.getElementById('missvalue')
      val.innerText=""
    }

  
  // if(counter>=20){
  //   var val=document.getElementById('missvalue')
  //   val.innerHTML="Value Is not greater than 20"
  // }
 
  // else if(counter==1){
  //   var val=document.getElementById('missvalue')
  //   val.innerHTML="value can't be less than 1"
  // }

  return (
    <>
     <h1>Hooks</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Add Value :{counter}</button>
     <br/>
     <br/>
     <button onClick={removeValue}>Remove Value: {counter}</button>
     <br/>
     <br/>
     <div id="missvalue"></div>
    </>
  )
}

export default App
