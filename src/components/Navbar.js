import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/'}>Sign in</NavLink>
        <NavLink to={'/'}>Grades</NavLink>
      </nav>
    )
}

export default Navbar