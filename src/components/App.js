import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import Login from "../pages/login";
import PageNotFound from "../pages/PageNotFound";


function App(){

return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/student" element></Route>
      <Route path="/teacher" element></Route> 
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>

)

}

export default App