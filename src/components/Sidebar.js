import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(){
return(
    <div className="sidebar">
    <ul className="">
        <li><NavLink to={"dashboard"}>Dashboard</NavLink></li>
        <li><NavLink to={"registrations"} >Registrations</NavLink></li>
        <li><NavLink to={"grades"}>Grades</NavLink></li>
        <li><NavLink to={"payments"}>Payments</NavLink></li>
    </ul>    
    <div className="loggedInPanel">
    <h3>Logged in</h3>
    <h4>as Sam</h4>
        </div>
    </div>
)
}

export default Sidebar  