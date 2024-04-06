import React from 'react'
import {news} from "../../data"
import "./News.css"
import apple from '../../Assets/graylogo/apple.jpeg';
import wii from '../../Assets/graylogo/wii.png';
import world from '../../Assets/graylogo/world.png';
import building from '../../Assets/graylogo/building.png';
import window from '../../Assets/graylogo/window.jpeg';


function News() {
  return ( 
    <div className='news-container'>
      {/* client logo */}
      <section className="c-wrapper">
        <div className='c-contant'>
            <img src={apple} alt="" />
            <img src={window} alt="" />
            <img src={wii} alt="" />
            <img src={world} alt="" />
            <img src={building} alt="" />
        </div>
    </section>

       <div className='text'>
                    <h1>LATEST NEWS</h1>
                    <p>INTEGER CONGUE ELIT</p>
                  </div>
                  <div className='news-bar'>
                  
    {
      news.map(({id,tittle,icon,desc,image,date})=>{
          return(
              <div className="news-card" key={id}>
                <div className='news_image'>
                <img src={image} alt="" />
                </div>
                   <div className="news_text">
                   <h2>{tittle}</h2>
                      <span>{icon}</span>
                      <p>{desc}</p></div> 
                      <span className='date_span'>{date}</span>
                     
              </div>
              
          )
      })
    }
    </div>
  </div>
  )
}

export default News
