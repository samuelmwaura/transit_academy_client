import React from "react";

function PaymentsCard({loggedInUser}){
    return(
        <div className="dashboardCard">
        <span className="material-icons">payment</span>
        <h2><span>{loggedInUser.registrations.length}</span>Courses paid-For</h2>
        </div>
      )    
}

export default PaymentsCard