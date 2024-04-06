import React from 'react'
import cagoShip from "../../Assets/cagoship1.jpg"
import "./Header.css"
import { FaLongArrowAltLeft,FaLongArrowAltRight } from "react-icons/fa";

function Header() {
  return (
    <div className='header_containner'>
      <div className="header_content">
        {/* left content */}
        <div className="text-wrap">
        <div className="box_content">
          <div className="btn-box">
            <a href="#">LOGISTIC</a>
          </div>
          
        <h1>Best Shipping <br /><span>Partner</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo at non, sit praesentium animi officiis delectus aspernatur ea? Quas odio velit porro nostrum a voluptate doloremque nihil eaque eligendi magni.</p>
        <div className="discover-btn">
          <a href="#">DISCOVER MORE</a>
        </div>
       
        </div>
        <div className="slider_btn">
          <label className='slide_label'>1/2</label>
         
        <button className='button'><FaLongArrowAltLeft /></button>
        <button className='button'><FaLongArrowAltRight /></button>
        </div>
        </div>
        
        {/* right content */}
        <div className="image-wrap">
        <div className="image_content">
        <img src={cagoShip} alt="" />
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Header
