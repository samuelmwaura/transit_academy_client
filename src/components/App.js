import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/Student";
import StudentDashboard from "../pages/StudentDashboard";
import Registrations from "../pages/Registrations";

function App(){

 const [courses,setCourses] = useState([])

 useEffect(()=>{
    fetch("http://localhost:9292/courses")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setCourses(data)
    })
    .catch(err=>console.log(err))
 },[])

 
return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/students" element={<Student/>}>
         <Route path="registrations" element={<Registrations />}/>
         <Route path="grades" element={<StudentDashboard courses={courses}/>} />
         <Route path="payments" element={<StudentDashboard courses={courses}/>}/>
         <Route path="dashboard" element={<StudentDashboard courses={courses}/>} />
      </Route>
      <Route path="/teacher" element></Route> 
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>
)
} 

export default App