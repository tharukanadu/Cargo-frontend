import React from 'react'
import "./Footer.css"
import ship1 from "../../Assets/footer/cargo-ship.jpg"
import ship2 from "../../Assets/footer/cargoship2.jpg"
import containner from "../../Assets/footer/container.jpg"
import team1 from "../../Assets/footer/team.jpg"
import team2 from "../../Assets/footer/team2.jpg"
import truck from "../../Assets/footer/footer-truck.jpeg"
// social meadia
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";




function Footer() {
  return (
    <div className='footer'>
     <div className='footer_section'>
      <div className='footer-link'>
         <div className='footer-link-div'>
        <h4>About us</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        
        <span><FaPhone />
        <p>+848727854</p>
         </span>
        
        
         <span><FaLocationDot />
        <p>92 lane colombo4</p>
         </span>
         
        
      </div>
     
      <div className='footer-link-div'>
        <h4>Latest News</h4>
        <span><IoMdArrowDropright />
         <p>Obcaecati enim harum pariatur eos error blanditiis voluptates ea ab. </p>
        </span>
        <span><IoMdArrowDropright />
         <p>Obcaecati enim harum pariatur eos error blanditiis voluptates ea ab. </p>
        </span>
      </div>

      <div className='footer-link-div'>
        <h4>Customer Service</h4>
        <span>
        <FaHandPointRight />
         <p>Support Forums</p>
        </span>
        <span>
        <FaHandPointRight />
         <p>Communication</p>
        </span>
        <span>
        <FaHandPointRight />
         <p>FAQS</p>
        </span>
        <span>
        <FaHandPointRight />
         <p>Privancy Policy</p>
        </span>
        <span>
        <FaHandPointRight />
         <p>Rules & Condition</p>
        </span>
        <span>
        <FaHandPointRight />
         <p>Contact us</p>
        </span>
      </div>

      <div className='footer-link-div'>
        <h4>Customer Service</h4>
       <div className="picpack-container">
        <div className='pickpack'>
        <p><img src={ship1} alt="" /></p>
        <p><img src={team2} alt="" /></p>
        <p><img src={containner} alt="" /></p>
        <p><img src={ship2} alt="" /></p>
        <p><img src={truck} alt="" /></p>
        <p><img src={team1} alt="" /></p>
        </div>
        </div>
      </div>
 
   </div>
   <h1></h1>
  
      
     </div>
     <div className='footer-bellow'>
      <div className='footerCopyright'>
         <p>
            @sds()sdsaa()sjjej
         </p>
      </div>
      <div className="footer-below-link">
         <a href=""><i class="fa-brands fa-facebook"></i></a>
         <a href=""><i class="fa-brands fa-vimeo-v"></i></a>
         <a href=""><i class="fa-brands fa-twitter"></i></a>
         <a href=""><i class="fa-brands fa-behance"></i></a>
         <a href=""><i class="fa-brands fa-instagram"></i></a>
      </div>
      </div>

    </div>
  )
}

export default Footer
