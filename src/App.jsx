import { useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Watch></Watch>
      
    </>
  )
}

export default App
