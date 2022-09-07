import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Student(){
  return(
    <> 
      <Sidebar />
      <div className="studentPage">
        <div className="welcome">
          <h4>Welcome</h4>
          <h3>Sam!</h3>
        </div>
        <Outlet className="outlet" />
      </div>
    </>
  )
}

export default Student