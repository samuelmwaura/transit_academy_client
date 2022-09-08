import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/Student";
import StudentDashboard from "../pages/StudentDashboard";
import Registrations from "../pages/Registrations";
import Login from "./Login";

function App(){

 const initialUser = JSON.parse(localStorage.getItem("loggedInUser"))

 const [courses,setCourses] = useState([])
 const [loggedInUser,setloggedInUser]= useState(initialUser)


 useEffect(()=>{
    fetch("http://localhost:9292/courses")
    .then(response=>response.json())
    .then(data=>{
      setCourses(data)
    })
    .catch(err=>console.log(err))
 },[])

return (
  <BrowserRouter>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setloggedInUser}/>
    <Routes>
      <Route path="/" element={<Login setLoggedInUser={setloggedInUser}/>}/>
      <Route path="/students" element={<Student loggedInUser={loggedInUser}/>}>
         <Route path="registrations" element={<Registrations loggedInUser={loggedInUser} courses={courses}/>}/>
         <Route path="grades" element={<StudentDashboard courses={courses} loggedInUser={loggedInUser}/>} />
         <Route path="payments" element={<StudentDashboard courses={courses} loggedInUser={loggedInUser}/>}/>
         <Route path="dashboard" element={<StudentDashboard courses={courses} loggedInUser={loggedInUser}/>} />
      </Route>
      <Route path="/teacher" element></Route> 
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>
)
} 

export default App