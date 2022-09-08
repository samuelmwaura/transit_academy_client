import React from 'react'

function RegisterForm({loggedInUser}) {
  return (
    <form className="registerForm">
            <h3 className="title">Register A Course</h3>
            <label >Name:</label><input type='text' name="student_name" value={loggedInUser.first_name +"  "+ loggedInUser.last_name}required/>
            <br />
            <br />
            <label >Course Name</label><select name="course_name"> <option>Select a course</option></select>
            <br />
            <br />
            <label>Course Code</label><input type='text' name="course_id"  required/>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>
            <p>paid</p>
        </form>
  )
}

export default RegisterForm