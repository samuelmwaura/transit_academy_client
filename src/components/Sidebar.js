import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({loggedInCategory}){
return(
    <div className="sidebar">
    <ul className="">
        <li><NavLink to={"dashboard"}><span className="material-icons">space_dashboard</span>Dashboard</NavLink></li>
        <li><NavLink to={"registrations"}><span className="material-icons">assignment</span>Registrations</NavLink></li>
        <li><NavLink to={"grades"}><span className="material-icons">grade</span>Grades</NavLink></li>
        <li><NavLink to={"payments"}><span className="material-icons">payments</span>Payments</NavLink></li>
    </ul>    
    <div className="loggedInPanel">
    <h3>You are</h3>
    <h4>a {loggedInCategory}</h4>
        </div>
    </div>
)
}

export default Sidebar  