import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
export default function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
     </Routes>
   </Router>
   </>
  )
}
