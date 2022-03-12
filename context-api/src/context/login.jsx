import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";

const Login = () => {
    
    const [state, setState] = useState({email:"", password:""})
   const loginData = useContext(AuthContext)
   console.log(loginData, "logindata");


  const handleEmail = (e) => {
   setState({...state, email:e.target.value})
  }

  const handlePassword = (e) => {
      setState({state, password:e.target.value})
  }
  const handleSubmit = (e) => {
      e.preventDefault()
  }
   
    return(
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter email" value={state.email} onChange={handleEmail} />
        <input type="text" placeholder="password" value={state.password} onChange={handlePassword} />
        <button>Login</button>
    </form>
    </>
    )
}

export default Login