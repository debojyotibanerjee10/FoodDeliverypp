import React, { useState } from 'react'
import axios from "axios"
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom'
export default function Signup() {
    const navigate=useNavigate();
    const [data,setdata]=useState({
        name:"",
        email:"",
        location:"",
        password:""
    })
    const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:80/createuser",data)
    alert(res.data.message);
    navigate("/login")
    }
    const handlechange=(e)=>{
        const eventname=e.target.name;
        const value=e.target.value;
        setdata({...data,[eventname]:value});
    }
  return (
   <>
   <div className="signup">
    <h2>SignUp</h2>
    <form action="" onSubmit={handlesubmit}>
        <input autoComplete='true' type="text" name="name" placeholder='Enter your Name' onChange={handlechange} value={data.name} required/>
        <input autoComplete='true' type="email" name="email" placeholder='Enter your Email' onChange={handlechange} value={data.email} required/>
        <input autoComplete='true' type="text" name="location" placeholder='Enter your Location' onChange={handlechange} value={data.location} required/>
        <input autoComplete='true' type="password" name="password" placeholder='Enter your Password' onChange={handlechange} value={data.password} required/>
        <button type="submit">Submit</button>
        <Link to="/login">Already a user</Link>
    </form>
   </div>
   </>
  )
}
