import React, { useContext } from 'react'
import Usercontext from '../Contexts/Usercontext'


const Profile = () => {

    const {user} = useContext(Usercontext)

    if (!user) return <h1>not logged in </h1>

  return (

    <div>Profile: {user.username}</div>
  )
}

export default Profile