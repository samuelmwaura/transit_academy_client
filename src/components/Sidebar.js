import React from "react";
import { Link } from "react-router-dom";

function Sidebar(){
return(
    <div className="sidebar">
    <ul className="">
        <li><Link to={"/"}>Dashboard</Link></li>
        <li><Link to={"/registrations"} >Registrations</Link></li>
        <li><Link to={"/grades"}>Grades</Link></li>
        <li><Link to={"/payments"}>Payments</Link></li>
    </ul>    
    <div className="loggedInPanel">
    <h3>Logged in</h3>
    <h4>as Sam</h4>
        </div>
    </div>
)
}

export default Sidebar  