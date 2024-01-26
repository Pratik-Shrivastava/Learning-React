import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addValue()
  {
    if(counter === 20)
    setCounter(20);
    else
    setCounter(counter+1);
  }
  function removeValue()
  {
    if(counter === 0)
    setCounter(0);
    else
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>The value of counter is {counter}.</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
