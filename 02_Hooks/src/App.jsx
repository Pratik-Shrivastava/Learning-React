import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1)
  const h3 = document.querySelector('h3');

  function addValue ()
  {
    setCount(count+1);
    if(count >= 20)
    {
      setCount(20)
      h3.innerHTML = `Maximum value reached.`
    }
    else
    {
      h3.innerHTML = `counter value: ${count}`
    }
    console.log(`value added, counter = ${count}`);
  }
  function removeValue ()
  {
    setCount(count-1);
    if(count <= 0)
    {
      setCount(0)
      h3.innerHTML = `Minimum value reached.`
    }
    else
    {
      h3.innerHTML = `counter value: ${count}`
    }
    console.log(`value removed, counter = ${count}`);
  }

  return (
    <>
    <h1>Pratik is learning about Hooks</h1>      
    <h3>counter value: {count}</h3>
    <button
    onClick={addValue}
    >Add Value</button>
    <br/>
    <button
    onClick={removeValue}>Subtract Value</button>
    </>
  )
}

export default App
