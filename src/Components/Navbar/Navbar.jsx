import React, { useRef } from 'react'
import "./Navbar.css"
import cago from "../../Assets/Navbar/cago-img.jpg"



function Navbar() {
 
  return (
    <div className='content'>
      <div className='container'>
    {/* navbar */}
    <nav className='content'>
    <h1 className='cargo'>Cargo</h1>
    <img src={cago} alt="" className='cago_imag'/>
    
    <ul>

        <li><a href="">HOME <i class="fa fa-caret-down" aria-hidden="true"></i> </a> </li>
        
        <li><a href="">PAGE <i class="fa fa-caret-down" aria-hidden="true"></i></a> </li>
        <li><a href="">TRACKING <i class="fa fa-caret-down" aria-hidden="true"></i></a> </li>
        <li><a href="">SERVICES </a></li>
        <li><a href="">BLOG <i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
        <li> <button className='btn1'>GET A OUOTE</button></li>
        <li> <button className='btn2'>SIGN IN</button></li>
    </ul>
   
    </nav>
    
   </div>
    </div>
  )
}

export default Navbar
