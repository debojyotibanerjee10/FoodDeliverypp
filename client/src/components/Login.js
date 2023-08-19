import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
export default function Login() {
  const navigate=useNavigate();
  const[data,setdata]=useState({
    email:"",
    password:""
  })
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:80/loginuser",data)
    alert(res.data.message);
    navigate("/")
    }
  const handlechange=(e)=>{
    const eventname=e.target.name;
    const value=e.target.value;
    setdata({...data,[eventname]:value});
}
  return (
    <>
   <div className="login">
    <h2>Login</h2>
    <form action="" onSubmit={handlesubmit}>
        <input autoComplete='true' type="email" name="email" placeholder='Enter your Email' onChange={handlechange} value={data.email} required/>
        <input autoComplete='true' type="password" name="password" placeholder='Enter your Password' onChange={handlechange} value={data.password} required/>
        <button type="submit">Submit</button>
        <Link to="/signup">New User</Link>
    </form>
   </div>
   </>
  )
}
