import { useState } from 'react'
import './App.css'
import Allcourses from './components/allcourses/allcourses.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
 <> <Allcourses/></>
  )
}

export default App
