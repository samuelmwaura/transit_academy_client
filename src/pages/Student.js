import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Student({students}){
  return(
    <div className="studentPage">
   {students.map(student => <h2 key={student.id}>{student.first_name} {student.last_name}</h2>)}
   </div>
  )
}

export default Student