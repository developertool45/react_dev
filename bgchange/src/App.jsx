import { useState } from 'react'
import './App.css'


function App() {
  let [color, setColor] = useState('yellow');

  return (
      <div className="w-full  h-screen duration-200   "  style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
           <div className=' flex flex-wrap justify-center gapp-3 shadow-lg bg-white  rounded-xl '>
            <button className=' outline-none px-4 py-1 rounded-full shadow-lg text-white mr-2' style={{backgroundColor: "red"}}>
              Red
            </button>
            <button className=' outline-none px-4 py-1 rounded-full shadow-lg text-white mr-2' style={{backgroundColor: "blue"}}>
             green
            </button>
            <button className=' outline-none px-4 py-1 rounded-full shadow-lg text-black mr-2' style={{backgroundColor: "yellow"}}>
              blue
            </button>
           </div>
           </div>
        
         </div> 
      
      
  )
}

export default App
