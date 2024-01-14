import { useState, useCallback } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setnumberAllowed] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState(" ")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "01234456789"
    if (charAllow) str += "!@#$%^&*()_+{}:<>?-= []',./"

    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);
    }

    setPassword(pass);


  }, [length, numberAllow, charAllow, setPassword])


  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden py-5'>
          <input type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 rounded-lg'
            placeholder="enter password"
            readOnly
          />
          <button className='outline-none rounded-lg  bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy</button>

        </div>

      </div>

    </>
  )
}

export default App
