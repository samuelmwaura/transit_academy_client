import React from "react";
import Editform from "../components/registrations/EditForm";
import RegisterForm from "../components/registrations/RegisterForm";

function Registrations({loggedInUser}){
   return(
      <div className="studentDashboard">
         <h1>Your Registrations</h1>
   <div id="table">
   <table className="table">
      <thead>
         <tr>
            <th>Course Name</th>
            <th>Course Code</th>
         </tr>
      </thead>
      <tbody>         
         {loggedInUser.registrations.map(registration=>{
        return <tr key={registration.id}>
            <td>{registration.course.course_name}</td>
            <td>{registration.course.course_code}</td>
         </tr>})}         
      </tbody>
   </table>   
   </div>
   <h1>Edit registrations</h1>
   <div id="editforms">
   <RegisterForm loggedInUser={loggedInUser}/>
   <Editform loggedInUser={loggedInUser}/>

   </div>
   </div>
   )
}

export default Registrations