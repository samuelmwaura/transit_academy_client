import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

function Teacher({loggedInUser}) {
  const [AllStudents,SetAllStudents] = useState([])

  useEffect(()=>{

    const registrations = loggedInUser.allocations.map(allocation => {
       let registrations =[]
        fetch(`http://localhost:9292/registrations/${allocation.course_id}`)  
        .then(response=>response.json())
        .then(data=>{
          registrations.push(...data)
        })
        .catch(error=>console.log(error))

        return registrations
   });
  
   SetAllStudents(()=>{
    console.log(registrations)
    return registrations
  })
   

  },[])


    return(
      <> 
        <TeacherSidebar/>
        <div className="studentPage">
          <div className="welcome">
            <h4>Welcome Teacher</h4>
            <h3>{loggedInUser.first_name}!</h3>
          </div>
          <Outlet className="outlet" />
        </div>
      </>
    )
  
}

export default Teacher