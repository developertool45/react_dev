import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="w-full  h-screen duration-200 " style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className=' flex flex-wrap justify-center gapp-3 shadow-lg bg-white  rounded-xl '>
          <button onClick={() => setColor("red")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white mr-2'
            style={{ backgroundColor: "red" }}> Red  </button>
          <button onClick={() => setColor("green")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white mr-2'
            style={{ backgroundColor: "green" }}> green </button>
          <button onClick={() => setColor("blue")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white mr-2'
            style={{ backgroundColor: "blue" }}> blue </button>

          <button onClick={() => setColor("orange")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-black mr-2'
            style={{ backgroundColor: "orange" }}> orange </button>
        </div>
      </div>

    </div>


  )
}

export default App
