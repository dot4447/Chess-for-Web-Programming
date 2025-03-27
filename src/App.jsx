import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1 className='bg-gray-600 p-4 text-3xl text-orange-400'>Loading...</h1>
   </>
  )
}

export default App
