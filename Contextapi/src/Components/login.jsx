import React, { useContext } from 'react'
import { useState } from 'react'
import Usercontext from '../Contexts/Usercontext'

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const {setUser} = useContext(Usercontext)

  const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username, password})

  }



  return (
    <div>
    <input
    type="text" 
    onChange={(e)=>setUsername(e.target.value)}
    value={username}
    placeholder='username'/>

  <input
    type="text" 
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
    placeholder='password'/>

    <button onClick={handleSubmit}>submit</button>
    
  
  
    </div>
  
  )
  
}

export default Login