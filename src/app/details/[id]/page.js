"use client"
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import '../../details.css';



const Details = () => {
  const params = useParams();
  var id = params.id;
  const router = useRouter();
  const [employee,setEmployee] = useState([]);
   useEffect(()=>{
    axios.get("http://localhost:5000/employees/"+id)
    .then((response)=>{setEmployee(response.data);})
    .catch((err)=>{console.log(err);})
  },[id]);

 const handledelete=()=>{
    let conf = confirm("Are you sure to delete");
    if(conf){
      axios.delete("http://localhost:5000/employees/"+id)
        .then((response)=>{router.push("/");})
        .catch((err)=>{console.log(err);})
    }
  };
  const handleedit=()=>{
    router.push("/edit/"+id);
  };
  return (
    <div id="header" >
      <h2>DETAILS INFO</h2>
      {
        employee && <div id="body">
          <p>ID :{employee.id}</p>
          <p>NAME :{employee.name}</p>
          <p>MOBILE :{employee.mobile}</p>
          <p>DESIGNATION :{employee.designation}</p>
          <p>SALARY :{employee.salary}</p>
          <p>JOINING DATE : {employee.doj}</p>          
        </div>
      }
      <Link href="/">Home</Link>
      <button type='button' onClick={handledelete}>Delete</button>
      <button type='button' onClick={handleedit}>Edit</button>
    </div>
  )
}

export default Details