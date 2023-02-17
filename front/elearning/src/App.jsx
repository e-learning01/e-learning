import { useState } from 'react'
import './App.css'
import Allcourses from './components/allcourses/allcourses.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
 <> <Register/><Login/></>
  )
}

export default App
