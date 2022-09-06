import React from "react";

function Student({students}){
  return(
    <div>
   {students.map(student => <h2>{student.first_name} {student.last_name}</h2>)}
   </div>
  )
}

export default Student