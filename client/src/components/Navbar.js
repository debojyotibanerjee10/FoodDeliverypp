import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
<>
    <div className="navbar">
        <ul>
            <li><h2>GoFood</h2></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Features</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
</>
  )
}
