import { useState } from 'react'

import './App.css'
import { data } from './dummydata/data'
import Main from './components/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
   
    </>
  )
}

export default App
