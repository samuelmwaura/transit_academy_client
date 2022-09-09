import React from 'react'

function Allocations({loggedInUser}) {
 
    return(
    <div className="studentDashboard">
     <div id="table">
     <table className="table">
        <thead>
           <tr>
              <th>Course Name</th>
              <th>Course Code</th>
           </tr>
        </thead>
        <tbody>         
           {loggedInUser.allocations.map(allocation=>{
          return <tr key={allocation.id}>
              <td>{allocation.course.course_name}</td>
              <td>{allocation.course.course_code}</td>
              </tr>})}         
        </tbody>
     </table>   

     <table className="table">
        
        <thead>
           <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>students name</th>
              <th>registration Number</th>
           </tr>
        </thead>
        <tbody>         
           {loggedInUser.allocations.map(allocation=>{
          return <tr key={allocation.id}>
              <td>{allocation.course.course_name}</td>
              <td>{allocation.course.course_code}</td>
              </tr>})}         
        </tbody>
     </table>  
     </div> 
     </div>
     )
}

export default Allocations