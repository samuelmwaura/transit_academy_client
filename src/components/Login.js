import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login(){
 const [credentials,setCredentials] = useState({username:"",password:""})

 function handleOnchange(event){
  setCredentials({...credentials,[event.target.name]:event.target.value})
 }

 function handleLogin(event){
  event.preventDefault()
   
  fetch("http://localhost:9292/login",{
    method:"POST",
    headers:{
    "content-Type":"Application/json",
    "Accept":"Application/json"
},
 body:JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(data=>console.log(data))
  .catch(error=>console.log(error))
}

   return(
    <div className="loginForm">  
        <form onSubmit={handleLogin}>
            <h2 className="title">Log in</h2>
            <label className="label">Username:</label><input type='text' name="username" className="formInput" value={credentials.username} onChange={handleOnchange} placeholder="Enter your Username" required/>
            <br />
            <br />
            <label className="label">Password:</label><input type='password' name="password" className="formInput" value={credentials.password} onChange={handleOnchange} placeholder="Enter Password" required /> 
            <br/>
            <br/>
            <section id="forgotPassword">
                <NavLink to="/forgot">Forgot password </NavLink>
            </section>
            <br/>
            <br />
            <div>
            <button className="submit" type="submit"> Sign in</button>
            </div>
        </form>
    </div>
   )
}

export default Login