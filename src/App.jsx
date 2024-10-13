import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addVal = () => {
    if(counter<20)
      setCounter(counter + 1);
  }

  const remVal = () => {
    if(counter>0)
      setCounter(counter - 1);
  }

  return (
    <>
      <h1>React code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addVal}>+</button>
      <button onClick={remVal}>-</button>
    </>
  )
}

export default App
