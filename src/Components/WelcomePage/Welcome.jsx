import React, { useState } from 'react'
import workers1 from "../../Assets/welcome/c-workers.jpeg"
import workers2 from "../../Assets/welcome/cago-workers1.jpg"
import "./Welcome.css"
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Welcome() {
  const [counterOn,setCounterOn] = useState(false);
  return (
    <div className='welcome_container'>
      <div className='welcome_contain'>
        <div className="welcome_right">
          <img src={workers1} alt="" className='first_img'/>
          <img src={workers2} alt="" className='second_img'/>
          <span className='span_one'></span>
          <span className='span_two'></span>
          <span className='span_three'>

          <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn (false)}>
            <span>{<CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="EUR "
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp> && <CountUp
  start={1}
  end={15350}
  duration={2.75}
  delay={0}
>
 
</CountUp>} + </span>
            
          

          </ScrollTrigger>
        
            <br/>Client Worldwide</span>
          <span className='span_four'></span>
        </div>
      
      <div className="welcome_text">
        <span className='shape-span'></span>
        <h1>TransMax Logistics <br/> Around <span>the World</span></h1>
        <p className='paragrph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi corporis, officia repudiandae beatae nostrum dolorem amet illum, cum ratione ipsum accusamus rerum deleniti et veritatis similique quaerat aspernatur quo.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi corporis, officia repudiandae beatae nostrum dolorem amet illum, cum ratione ipsum accusamus rerum deleniti et veritatis similique quaerat aspernatur quo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil animi corporis, officia repudiandae beatae nostrum dolorem amet illum, cum ratione ipsum accusamus rerum deleniti et veritatis similique quaerat aspernatur quo.</p>
        <button className="more-btn">MORE ABOUT US</button>
      </div>
      </div>
    
    </div>
    
  )
}

export default Welcome
