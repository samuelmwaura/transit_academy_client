import React from "react";
import AllTeachersCard from "../components/AllTeachersCard.js";
import PaymentsCard from "../components/PaymentsCard.js";
import RegisteredCoursesCard from "../components/RegisteredCourseCard.js";

function StudentDashboard(){
return (
   <> 
   <div className="studentDashboard">
   <h1>Dashboard </h1> 
   <div>
   <RegisteredCoursesCard/>
   <AllTeachersCard/>
   <PaymentsCard/>
   </div>
   <h1>Campaign courses </h1> 
   </div> 
    </> 
)

}

export default StudentDashboard