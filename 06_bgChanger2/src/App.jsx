import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("rgb(88, 88, 88)")

  return (
    <>
    <div className="whole" style={{backgroundColor: color}}>
      <div className="bar">
        <button
        onClick={()=>setColor = "red"}
        className="red">Red</button>
        <button
        onClick={()=>setColor = "red"}
        className="red">Red</button>

      </div>
    </div>
      
    </>
  )
}

export default App
