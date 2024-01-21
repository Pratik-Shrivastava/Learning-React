import Pratik from './Pratik'
function App() { 

  //How to return a variable
  const username = "Pratik";

  return (
    <>
    {/* We can only export only one element. That is called fragment.*/}
    <Pratik/>
    {/* Here we write evaluated expression only and not logic. */}
    <h1>{username} is a good boy.</h1>    
    </>
  )
}
export default App
