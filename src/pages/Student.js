import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Student({students}){
  return(
    <div className="studentPage">
      <Sidebar />
    This is the student landing pages.This bit will remain here throughout
    <Outlet/>
   </div>
  )
}

export default Student