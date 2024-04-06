import React from 'react'
import "./Service.css"
import {services} from "../../data"
import { FaPlus } from "react-icons/fa";


function Service() {
  return (
    <div className='service-container'>
      <div className='service-topic'>
        <h4>Real Solution, Real Fast</h4>
        <h2>Best global logistics solution </h2>
      </div>
      <div className='service-content'>
       {
      services.map(({id,img,tittle,des})=>{
          return(
              <div className="service-card" key={id}>
                <div className='image-content'>
                    <img src={img} alt="" />
                    </div>
                    <div className='text-content'>
                      <h2>{tittle}</h2>
                      <p className='dec'>{des}</p>
                      <button className='service-btn'>Read More
                      <i class="fa-solid fa-arrow-right"></i>
                      </button>
                      </div>
              </div>
              
          )
      })
    }
    <div className='service-solution'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <i class="fa-solid fa-arrow-right"></i></p>
    </div>
    </div>
{/* status section */}
<div className="status_section">
  <div className="status_container">
    <div className="count_container">
    < span>890</span>
      <h1>890</h1>
      <p>Dilivered Packages</p>
    </div>
    <div className="count_container">
    < span>137</span>
      <h1>137</h1>
      <p>Counrties Covered</p>
    </div>
    <div className="count_container">
    < span>740</span>
      <h1>740</h1>
      <p>Tons of Goods</p>
    </div>
    <div className="count_container">
    < span>600</span>
      <h1>600</h1>
      <p>Satisfied Clients</p>
    </div>
  </div>
</div>


    {/* choice */}
    <div className='choise_contanner'>
      <div className='choise_content'>
        <div className='warp-text'>
        {/* left */}
        <h2>TRUSTED CLIENTS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className='symbole-shape'>
          <span class="material-symbols-outlined">
format_quote
</span>
</div>
        <div className='border'>
          <div className="text">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam vero exercitationem incidunt dolorum, inventore consequatur. Corporis vel quae vero cum earum nisi quod, ipsum odio totam. Numquam aut fuga unde.</p>
          </div>
        </div>
        </div>
        {/* right */}
        <div className="wrap_boc">
        <div className='right_us'>
          <h2>WHY CHOOSE US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="wrapTopic">
            <input type="checkbox" id="collapsible-head"/>
            <label>use html css now </label>
          
          <div className='right-content'>
              <h2>aaaaaaaaaaaaaaaa</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem aliquid omnis doloremque, nisi, molestias aperiam consequatur est sapiente asperiores vel beatae? Molestiae sit dolore debitis possimus eos exercitationem quidem.</p>
          </div>
          </div>

          <div className="wrapTopic">
            <input type="checkbox" id="collapsible-head"/>
            <label>use html css now</label>
          
          <div className='right-content'>
              <h2>aaaaaaaaaaaaaaaa</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem aliquid omnis doloremque, nisi, molestias aperiam consequatur est sapiente asperiores vel beatae? Molestiae sit dolore debitis possimus eos exercitationem quidem.</p>
          </div>
          </div>

          <div className="wrapTopic">
            <input type="checkbox" id="collapsible-head"/>
            <label>use html css now</label>
          
          <div className='right-content'>
              <h2>aaaaaaaaaaaaaaaa</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem aliquid omnis doloremque, nisi, molestias aperiam consequatur est sapiente asperiores vel beatae? Molestiae sit dolore debitis possimus eos exercitationem quidem.</p>
          </div>
          </div>

          <div className="wrapTopic">
            <input type="checkbox" id="collapsible-head"/>
            <label>use html css now</label>
          
          <div className='right-content'>
              <h2>aaaaaaaaaaaaaaaa</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rem aliquid omnis doloremque, nisi, molestias aperiam consequatur est sapiente asperiores vel beatae? Molestiae sit dolore debitis possimus eos exercitationem quidem.</p>
          </div>
          </div>

        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Service
