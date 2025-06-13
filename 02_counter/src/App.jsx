import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)       // useState yaha hook hai, 0 ke yaha jagah kuch bhi likh skte hai
  // let counter = 15

  const addValue = () => {
    if(counter<20){
    counter = counter + 1;
    setCounter(counter);
    }
  }

  const removeValue = () => {
    if(counter>0){
    counter = counter - 1;
    setCounter(counter);
    }
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
