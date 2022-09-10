import React, { useEffect,useState } from "react";

function Payments({loggedInUser}){
    const [studentPayments,setStudentPayments] = useState([])
   
   useEffect(()=>{
     
    fetch(`http://localhost:9292/students/payments/${loggedInUser.id}`)
    .then(response=>response.json())
    .then(data=>setStudentPayments([...data.payments ]))
    .catch(error=>console.log(error))

   },[])

  return(
    <div className="studentDashboard">
        <h1>Semester Payments.</h1>
    <div id="summaries">
    <div className="paymentsTable">
   <table className="table" id="paymentsTable">
      <thead>
         <tr>
         <th>Payment Date</th>
         <th>Amount</th>            
         </tr>
      </thead>
      <tbody>         
         {studentPayments.map(payment=>{
        return <tr key={payment.id}>
            <td>{new Date(payment.created_at).toLocaleDateString()}</td>
            <td>{payment.amount}</td>
    
         </tr>})}         
      </tbody>
   </table>   
   </div>
    </div>
       
    </div> 
  )
}
export default Payments