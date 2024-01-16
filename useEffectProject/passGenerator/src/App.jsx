import { useState, useCallback, useEffect } from "react";
// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setnumberAllowed] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "01234456789";
    if (charAllow) str += "!@#$%^&*()_+{}:<>?-= []',./";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])


  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-4 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-3xl font-semibold">Password Generator</h1>

        <div className="flex rounded-lg overflow-hidden py-5">
          <input
            type="text"
            className="outline-none w-full py-2 px-2  rounded-l-lg"
            placeholder=" Password"
            value={Password}
            readOnly
          />
          <button className="outline-none rounded-r-lg   bg-blue-700 text-white px-3 py-0.5 shrink-0">

            Copy
          </button>
        </div>
        <div className="flex text-sm gap-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1"></div>
          <input type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev)
            }}

          />
          <label htmlFor="numberInput">Number</label>

          <input type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setCharAllow((prev) => !prev)
            }}

          />
          <label htmlFor="charInput">Characters</label>


        </div>



      </div>
    </>
  );
}

export default App;
