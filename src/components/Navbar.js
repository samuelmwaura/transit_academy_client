import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
      <nav>
        <NavLink to={'/'} className="navbar">Home</NavLink>
        <NavLink to={'/students'}>Students</NavLink>
        <NavLink to={'/grades'}>Grades</NavLink>
      </nav>
    )
}

export default Navbar