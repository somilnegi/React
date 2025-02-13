import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  // let counter = 15;

  const addValue = () => {
    // counter++;
    // console.log("clicked", counter);
    setCounter(++counter);
  }

  const resetValue = () => {
    // counter++;
    // console.log("clicked", counter);
    setCounter(0);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={resetValue}
      >Reset Value {counter}</button>
    </>
  )
}

export default App
