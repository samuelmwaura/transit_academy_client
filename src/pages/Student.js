import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Student({loggedInUser}){
   let loggedInCategory
  if(loggedInUser.registration_number){
      loggedInCategory = "Student"
  }
  else{
      loggedInCategory = "Teacher"
 }
  return(
    <> 
      <Sidebar loggedInCategory={loggedInCategory}/>
      <div className="studentPage">
        <div className="welcome">
          <h4>Welcome</h4>
          <h3>{loggedInUser.last_name}!</h3>
        </div>
        <Outlet className="outlet" />
      </div>
    </>
  )
}

export default Student