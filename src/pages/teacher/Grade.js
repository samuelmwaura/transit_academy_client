//doesn'st work - cascades errors
import React from "react"

function Grade({loggedInUser}){   
      


    return(          
      <div className="studentDashboard">
      <h1>Grade Your Students </h1> 
      <div id="summaries">
      <div className="selectCourseToGrade">
        <label>Allocated Course:</label><select className="selector">
        <option selected>Select coourse to grade</option>
        {loggedInUser.allocations.map(allocation=><option>{allocation.course.course_name}</option>)}
        </select>
        </div>
       
      </div>
      <h1>Allocation details</h1>
      
      </div> 
    )

}
export default Grade