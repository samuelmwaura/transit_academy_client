import React from "react";
import AllTeachersCard from "../components/AllTeachersCard.js";
import CourseCard from "../components/CourseCard.js";
import PaymentsCard from "../components/PaymentsCard.js";
import RegisteredCoursesCard from "../components/RegisteredCourseCard.js";

function StudentDashboard({courses}){
return (
   <> 
   <div className="studentDashboard">
   <h1>Summaries </h1> 
   <div id="summaries">
   <RegisteredCoursesCard/>
   <AllTeachersCard/>
   <PaymentsCard/>
   </div>
   <h1>Campaign courses</h1>
   <div id="courses">
    {courses.map(course=><CourseCard key={course.id} courseCode={course.course_code} courseName={course.course_name}/>)}
   </div>
   
   </div> 
    </> 
)

}

export default StudentDashboard