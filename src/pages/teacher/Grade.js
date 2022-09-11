//doesn'st work - cascades errors
import React, { useState } from "react"

function Grade({loggedInUser}){   
  const [selectedAllocationId,setSelectedAllocationId] = useState(0)

  const allRegistrations = loggedInUser.allocations.map(allocation => {
    return allocation.course.registrations //for each allocated course return the course and its registrations
  }).flat(1)

  const displayedRegistrations = allRegistrations.filter(registration => registration.course_id ===parseInt(selectedAllocationId) )
 
function handleOnchange(event){
  setSelectedAllocationId(event.target.value)
}



    return(          
      <div className="studentDashboard">
      <h1>Grade Your Students </h1> 
      <div>
      <div className="selectCourseToGrade">
        <label>Allocated Course:</label><select className="selector" onChange={handleOnchange} defaultValue={selectedAllocationId}>
        <option value={0}>Select course to grade</option>
        {loggedInUser.allocations.map(allocation=><option key={allocation.id} value={allocation.course_id}>{allocation.course.course_name}</option>)}
        </select>
        </div>
       <div>
        {/* <ul>
          {displayedRegistrations.map(registration=><li key={registration.id}>{registration.course_id}</li>)}
        </ul> */}

        <form>
        <table className="table">
      <thead>
         <tr>
            <th>Course Name</th>
            <th>Student Name</th>
            <th>Student Id</th>
            <th>Assessment Grade</th>
         </tr>
      </thead>
      <tbody>         
     {displayedRegistrations.map(registration=>
     <tr key={registration.id}>
      <td>{registration.course_name}</td>
      <td>{registration.student_name}</td>      
      <td>{registration.student_id}</td>
      <td>
        <select className="gradeSelect">
         <option value="missing">Select</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </td>
      </tr>)}
      </tbody>
   </table>   
        </form>
       </div>
      </div> 
      </div> 
    )

}
export default Grade