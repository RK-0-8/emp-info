"use client"
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import '../add.css';
const Create = () => {
    const router = useRouter();
    const {register,handleSubmit,formState:{errors}} = useForm();
    const savedata=(empobj)=>{                
        axios.post("http://localhost:5000/employees",empobj)
            .then((response)=>{
                router.push("/");
            })
            .catch((err)=>{
                alert("Not saved");
                console.log(err);
            })
    };
  return (
    <div >
        <h2 >ADD NEW EMPLOYEE</h2>
        <form onSubmit={handleSubmit(savedata)}>
            <div >
                <label>Name</label>
                <input {...register("name")} type='text' className="form-control"></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input {...register("mobile")} type='number' className="form-control"></input>
            </div>
            <div >
                <label>Designation</label>
                <input {...register("designation")} type='text'className="form-control"></input>
            </div>
            <div>
                <label>Salary</label>
                <input {...register("salary")} type='number'className="form-control"></input>
            </div>
            <div>
                <label>Date of Joining</label>
                <input {...register("doj")} type='date'className="form-control"></input>
            </div>
            
                  <button type='submit'className="btn btn-primary">Submit</button>
            <Link href="/" className="btn btn-primary">Home</Link>
          
          
        </form>
    </div>
  )
}

export default Create