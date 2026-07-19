import React, { useState } from 'react'
import UserContext from './UserContext.js'

const UserContextProvider = ({children}) => {
    const [isLogin,setIsLogin] = useState({})
    const [user,setUser] = useState({})
    const [token,setToken] = useState({})
  return (
    <UserContext.Provider value={{isLogin,setIsLogin,user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
