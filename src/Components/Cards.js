import React from 'react'
import profile1 from '../Images/profile-1.jpg';
import profile2 from '../Images/profile-2.jpg';
import profile3 from '../Images/profile-3.jpg';
import mark from '../Images/bg-quotes.png';



function Cards() {
  return (
    <>
    <div className='cards'>
    {/* <img className='mark' src={mark} alt='exclamatory'/> */}
    <div className='card'>
      <p className='cards-para'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</p>
  <div className='profile'>
    <img className='same-img' src={profile1} alt='profile1'/>
    <div>
      <h5>Satish Patel</h5>
      <p>Founder & CEO, Huddle
</p>
    </div>
  </div>
    </div>


    <div className='card'>
    <p className='cards-para'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.
</p>

<div className='profile'>
    <img className='same-img' src={profile2} alt='profile2'/>
    <div >
      <h5>Bruce McKenzie</h5>
      <p>Founder & CEO, Huddle</p>
    </div>
  </div>

    </div>
    <div className='card'>
    <p className='cards-para'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.</p>

  <div className='profile'>
    <img className='same-img' src={profile3} alt='profile3'/>
    <div >
      <h5>Iva Boyd</h5>
      <p>Founder & CEO, Huddle</p>
    </div>
  </div>
    </div>
    
   </div> 
   <div className='bg-color'>
   <div className='last-card'>
 <h1>Get early access today</h1>
 <p className='para'> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.</p>
 <div className='input-button'>
    <input className='input' type="text" placeholder='email@example.com'/>
    <button> Get Started For Free</button>
 </div>
 </div>
    </div>
    </>
  )
}

export default Cards