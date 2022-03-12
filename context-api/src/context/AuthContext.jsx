import React from 'react'
import { Children, useState } from 'react'
import axios from "axios";
const AuthContext = React.createContext()

const AuthContextProvider = (childern) => {
  
  const [isAuth, setIsAuth] = useState(false)

  const handleLogin = (email, password) => {
    axios({
      method:"post",
      url: "https://reqres.in/api/login",
      date: {
        email,
        password
      }
    }).then(res => console.log.log(res))
    .catch(err => console.log(err))
  }
  
  const value = {isAuth, handleLogin}
  
  return (
      <AuthContext.Provider value = {value}>{childern}</AuthContext.Provider>
  )
}

export default  {AuthContext, AuthContextProvider}