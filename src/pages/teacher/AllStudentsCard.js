import React from 'react'

function AllStudentsCard({aTeacherStudents}) {

  return (
   <div className="dashboardCard">
        <span className="material-icons">auto_stories</span>
        <h2><span>{aTeacherStudents.length}</span>Total Student audience</h2>
    </div>
  )
}

export default AllStudentsCard