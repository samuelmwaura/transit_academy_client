import React from "react";
import Editform from "../components/registrations/EditForm";
import RegisterForm from "../components/registrations/RegisterForm";

function Registrations({loggedInUser,courses,setloggedInUser}){

 function handleDelete(id){
   if(window.confirm("Confirm De-registration from the course.")){
      console.log(id)

      fetch(`http://localhost:9292/registrations/${id}`,{
         method:"DELETE"
      })
      .then(response=>response.json())
      .then(data=>{
         console.log(data)
         setloggedInUser(()=>{
            const remainingRegistrations = loggedInUser.registrations.filter(registration=>registration.id !== data.id)
            console.log(remainingRegistrations)
            return {...loggedInUser,registrations:remainingRegistrations}
         })
      })
      .catch(error=>console.error(error))
   }
   
   else{
      return null
   }
 }

   return(
      <div className="studentDashboard">
         <h1>Your Registrations</h1>
   <div id="table">
   <table className="table">
      <thead>
         <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Action</th>
         </tr>
      </thead>
      <tbody>         
         {loggedInUser.registrations.map(registration=>{
        return <tr key={registration.id}>
            <td>{registration.course.course_name}</td>
            <td>{registration.course.course_code}</td>
            <td><button onClick={()=>handleDelete(registration.id)}>Delete</button></td>
         </tr>})}         
      </tbody>
   </table>   
   </div>
   <h1>Edit registrations</h1>
   <div id="editforms">
   <RegisterForm loggedInUser={loggedInUser} courses={courses} setloggedInUser={setloggedInUser}/>
   <Editform loggedInUser={loggedInUser} courses={courses} setloggedInUser={setloggedInUser}/>

   </div>
   </div>
   )
}

export default Registrations