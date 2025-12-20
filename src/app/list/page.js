"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import "bootstrap/dist/css/bootstrap.min.css";
const List = () => {
  const router = useRouter();
  const [employees,setEmployees] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/employees")
    .then((response)=>{setEmployees(response.data);})
    .catch((err)=>{console.log(err);})
  },[]);
  const gotodetails=(eid)=>{
    router.push("/details/"+eid);
  };
  return (

    <div id="container">
      <div id="header">
       <h1 id="f">EMPLOYEES LIST</h1>
      <Link href="/create" className="btn btn-primary" id="add">Add New</Link>
      </div>
     
      <table border="1" rules="all"  className="table">
        <thead><tr><th className="i">ID</th><th className="n">NAME</th><th className="d">DETAILS</th></tr></thead>
        <tbody>
          {
            employees && employees.map((employee)=>(
              <tr  key={employee.id}>
                <td className="i">{employee.id}</td>
                <td className="n">{employee.name}</td>
                <td className="d"><button type='button' onClick={()=>{gotodetails(employee.id)}} className="btn btn-primary">View</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default List