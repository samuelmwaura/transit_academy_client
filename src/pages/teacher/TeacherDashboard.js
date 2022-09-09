import React from 'react'
import AllAllocationsCard from './AllAllocationsCard'

function TeacherDashboard({loggedInUser}) {
  return (
    <> 
   <div className="studentDashboard">
   <h1>Summaries </h1> 
   <div id="summaries">
   <AllAllocationsCard loggedInUser={loggedInUser}/>
   </div>

   <h1>Campaign courses</h1>
   
   
   </div> 
    </> 
  )
}

export default TeacherDashboard