import './App.css'
import { useState } from 'react';

function App() {
  let  [counter, setCounter] = useState(15);
 

  const addvalue = () => {
            if (counter < 20) {
              counter = counter + 1;
              setCounter(counter);
              
    }

  }
  const decvalue = () => {
              if (counter > 0) {
                counter = counter - 1;
                setCounter(counter);
              }

  }
 
 

  return (
    <>
      <h1> counter value is  : {counter}</h1>
      <button onClick={addvalue}>increase  : {counter}</button> <br />
      <button onClick={decvalue} >decrease  : {counter}</button>
      <p>value is : {counter}</p>

    </>
  )
}

export default App
