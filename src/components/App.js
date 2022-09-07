import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Login from "../pages/login";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/Student";

function App(){

 const [students,setStudents] = useState([])

 useEffect(()=>{
    fetch("http://localhost:9292/teachers")
    .then(response=>response.json())
    .then(data=>setStudents(data))
    .catch(err=>console.log(err))
 },[])

 
return (
  <BrowserRouter>
    <Navbar/>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Student students={students}/>}/>
      <Route path="/students" element={<Student students={students}/>}></Route>
      <Route path="/teacher" element></Route> 
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>
)
} 

export default App