import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {id: 21, roll: 5}

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Faizan" btnText="Click Me"/>
      <Card username="Puru"/>
    </>
  )
}

export default App
