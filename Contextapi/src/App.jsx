import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Usercontextprovider from './Contexts/Usercontextprovider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Usercontextprovider>
    <h1>react context api </h1>
    <Login/>
    <Profile/>
    </Usercontextprovider>
  )
}

export default App
