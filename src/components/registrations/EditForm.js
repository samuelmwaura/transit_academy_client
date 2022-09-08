import React from "react";

function Editform({loggedInUser}){
    return (
        <form className="registerForm">
            <h3 className="title">Edit A registration</h3>
            <label >Name:</label><input type='text' name="student_name" value={loggedInUser.first_name +"  "+ loggedInUser.last_name}required/>
            <br />
            <br />
            <label >Course Name</label><select name="course_name"> 
            {loggedInUser.registrations.map(registration=><option value={registration.id} key={registration.id}>{registration.course.course_name}</option>)}
            
            </select>
            <br />
            <br />
            <label>Course Code</label><input type='text' name="course_id"  required/>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>  
        </form>
    )
}

export default Editform