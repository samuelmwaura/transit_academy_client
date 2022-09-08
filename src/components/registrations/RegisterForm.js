import React,{useState} from 'react'


function RegisterForm({loggedInUser,courses }) {
   const [newDetails,setNewDetails] = useState({student_name:loggedInUser.first_name+"  "+loggedInUser.last_name,course_name:"",student_id:loggedInUser.id,course_id:""})
   const [isCreated,setIsCreated] = useState(false)

// function handleOnchange(event){
//    setNewDetails({...newDetails,[event.target.name]:event.target.value})
// }

function handleOnchange(event){
    setNewDetails({...newDetails,course_name:event.target.value[1],course_id:event.target.value[0]})
}

  function handleOnsubmit(event){
    event.preventDefault()

    fetch("http://localhost:9292/registrations",{
        method:"POST",
        headers:{
           "content_Type":"Application/json",
           "Accept":"Application/json"
        },
        body:JSON.stringify(newDetails)
    })
    .then(response => response.json())
    .then(data =>{
       console.log(data)
       setIsCreated(()=>{
       const newRegistration = [data,...loggedInUser.registrations]
       setNewDetails({...loggedInUser,registrations:newRegistration})
        })
    })
    .catch(error=>console.log(error))
 }

  return (
    <form className="registerForm" onSubmit={handleOnsubmit}>
            <h3 className="title">Register A Course</h3>
            <label >Name:</label><input type='text' name="student_name" value={loggedInUser.first_name +"  "+ loggedInUser.last_name} required readOnly/>
            <br />
            <br />
            <label>New Course</label><select name="course_id" onChange={handleOnchange}> 
            {courses.map(course=><option value={[course.id,course.course_name]} key={course.id}>{course.course_name}</option>)}            
            </select>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>
            <p>{isCreated?"New Registration created!":null}</p>
        </form>
  )
}

export default RegisterForm