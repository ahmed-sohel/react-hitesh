import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }
  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button 
      onClick={increment}>Add value</button>{" "}
      <button 
      onClick={decrement}>Remove value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
