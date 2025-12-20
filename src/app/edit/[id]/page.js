"use client"
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../edit.css';


const Edit = () => {
  const params = useParams();
  var id = params.id;
  const router = useRouter();
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  useEffect(()=>{
    axios.get("http://localhost:5000/employees/"+id)
    .then((response)=>{ return response.data;})
    .then((employee)=>{      
      console.log(employee);
      reset({
        name:employee.name,
        mobile:employee.mobile,
        designation:employee.designation,
        salary:employee.salary,
        doj:employee.doj
      })
    })
    .catch((err)=>{console.log(err);})
  },[id]);
    const handleupdate=(empobj)=>{                
        axios.put("http://localhost:5000/employees/"+id,empobj)
            .then((response)=>{
                //to go to home router.push("/"); 
                //to go to details page use router.push("/details/"+id);

                router.push("/");
            })
            .catch((err)=>{
                alert("Not saved");
                console.log(err);
            })
    };
  return (
    <div>
      <h2>EDIT EMPLOYEE DETAILS</h2>
      <form onSubmit={handleSubmit(handleupdate)}>
            <div>
                <label>Name</label>
                <input {...register("name")} type='text'></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input {...register("mobile")} type='number'></input>
            </div>
            <div>
                <label>Designation</label>
                <input {...register("designation")} type='text'></input>
            </div>
            <div>
                <label>Salary</label>
                <input {...register("salary")} type='number'></input>
            </div>
            <div>
                <label>Date of Joining</label>
                <input {...register("doj")} type='date' readOnly></input>
            </div>
            <button type='submit'>Update</button>
            <Link href="/" id="link">Home</Link>
        </form>
    </div>
  )
}

export default Edit
