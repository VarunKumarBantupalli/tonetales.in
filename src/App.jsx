import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaSearch } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-yellow-500 h-[100vh] w-[100vw] hello-world'>
      <h1> tonetales.in </h1>
      <div><FaSearch/></div>
     </div>
     <div className='bg-red-500'>
      <h1>username</h1>
     </div>
    </>
  )
}

export default App
