import './App.css'
import Card from './components/Card'

function App() {
let myObj =  {
  username : "Rajneesh kumar",
  age : 28
}

 let newArray  = [1,2,3]

  return (
    <>
      <h4 className='bg-red-400 p-4 rounded-lg text-white font-bold  '> Tailwind Test</h4>
      <br></br>
      <Card username = "Naresh kumar"  btnText = "Visit Me" />
      <Card username = "Sana"/>

    </>
  )
}

export default App
