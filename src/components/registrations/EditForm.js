import React,{useState} from "react";

function Editform({loggedInUser,courses}){
   const [updateDetails,setUpdateDetails] = useState({id:"",course_name:"",course_id:""})
    
   function handleOnchange(event){
   setUpdateDetails({...updateDetails,[event.target.name]:event.target.value})
   }

   function handleOnsubmit(event){
     event.preventDefault()

     fetch(`http://localhost:9292/resgistrations/${updateDetails.id}`)
     .then(response =>response.json())
     .then(data=>console.log(data))
     .catch(error=>console.log(error))
   }

   
   let newCourseName = ""
       if (updateDetails.course_id) newCourseName = courses.find(course=>course.id == updateDetails.course_id).course_name


    return (
        <form className="registerForm">
            <h3 className="title">Edit A registration</h3>
            <label >Name:</label><input type='text' name="student_name" value={loggedInUser.first_name +"  "+ loggedInUser.last_name} required readOnly />
            <br />
            <br />
            <label>Course Name</label><select name="id" onChange={handleOnchange} value={updateDetails.id}> 
            {loggedInUser.registrations.map(registration=><option value={registration.id} key={registration.id}>{registration.course.course_name}</option>)}
            
            </select>
            <br />
            <br />
            <label>New Course</label><select name="course_id" onChange={handleOnchange} value={updateDetails.course_id}> 
            {courses.map(course=><option value={course.id} key={course.id}>{course.course_name}</option>)}
            
            </select>
            <br />
            <br />
            <label >Name:</label><input type='text' name="new_course_name" value={newCourseName} required  />
            <div>
            <input type="submit" />
            </div>  
        </form>
    )
}

export default Editform