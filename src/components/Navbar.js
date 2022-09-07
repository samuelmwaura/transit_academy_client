import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
      <nav className="navbar">
        <h1>Transit Registry</h1>
        <NavLink to={'/login'}>logout <span className="material-icons">logout</span></NavLink>              
      </nav>
    )
}

export default Navbar

// <NavLink to={'/students'}>Students</NavLink>
// <NavLink to={'/grades'}>Grades</NavLink>