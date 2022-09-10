import React, { useEffect, useState } from "react";
import FinanceSidebar from "./FinanceSidebar";

function Finance({loggedInUser}){
const [studentPayments,setStudentPayments] = useState([])
const [filterer,setFilterer] = useState("")

useEffect(()=>{   
    fetch("http://localhost:9292/payments")
    .then(response=>response.json())
    .then(data=>setStudentPayments(data))
    .catch(error=>console.log(error))
},[0])

function handleOnchange(event){
    setFilterer(event.target.value)
}

const displayedPyments = studentPayments.filter(payment => payment.student_name.toLowerCase().includes(filterer.toLowerCase()))

  return(<> 
    <FinanceSidebar/>
    <div className="studentPage">
      <div className="welcome">
        <h4>Welcome</h4>
        <h3>{loggedInUser.username}!</h3>
      </div>
      <div className="studentDashboard">
      <h1>School Payments</h1>
      <div  id="financeView">
      <div id="allpayments">
      <div className="selectCourseToGrade"><label>Search Student Name:</label><input onChange={handleOnchange} value={filterer} placeholder="Enter the student name."/></div>
        <table className="table">
        <thead>
           <tr>
              <th>Payment Date</th>
              <th>Student Number</th>
              <th>Student Name</th>
              <th>Amount</th>
           </tr>
        </thead>
        <tbody>         
           {displayedPyments.map(payment=>{
          return <tr key={payment.id}>
              <td>{new Date(payment.created_at).toLocaleDateString()}</td>
              <td>{payment.student_id}</td>
              <td>{payment.student_name}</td>
              <td>{payment.amount}</td>
              
              </tr>})}         
        </tbody>
     </table>   
      </div>
      <div>The true</div>
      </div>
      
      </div>
    </div>
  </>)
}

export default Finance