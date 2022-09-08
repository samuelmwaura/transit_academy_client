import React from "react";

function Registrations({loggedInUser}){
   return(
      <div className="studentDashboard">
         <h1>Registrations</h1>
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
   <div id="editforms">
      
   </div>
   </div>
   )
}

export default Registrations