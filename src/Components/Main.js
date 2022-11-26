import React from 'react'
import main from '../Images/illustration-intro.png';
import access from '../Images/icon-access-anywhere.svg';
import security from '../Images/icon-security.svg';
import anyfile from '../Images/icon-any-file.svg';
import collaboration from '../Images/icon-collaboration.svg';
import illustration2 from '../Images/illustration-stay-productive.png';
import arrow from '../Images/icon-arrow.svg';


function Main() {
  return (
    <div className='main'>
        <img className="illustration-intro" src={main} alt='main-pic'/>
        <h1 className='main-h2' >All your files in one secure location,<br/> accessible anywhere.</h1>
        <p className='main-para'>Fylo stores all your most important files in one secure location.<br/> Access them wherever 
  you need, share and collaborate with <br/>friends family, and co-workers.</p>
  <button className='main-button'>Get Started</button>


  {/* ==============================center========================== */}
   <div className='center'>
    <div className='center1'>
        <div className='icon-div' >
         <img className='same-icon' src={access} alt='access'  />
         <h2 className='center-h3'>Access your files, anywhere
</h2>
       <p className='center-para'>The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you<br/> everywhere.
</p>
        </div>
        <div className='icon-div'>
        <img className='same-icon' src={security} alt='security'  />
        <h2 className='center-h3'>Security you can trust
</h2>
 <p className='center-para'>2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help<br/> secure your files.
</p>
        </div>
    </div>

     <div className='center2'>
        <div className='icon-div'>
        <img className='same-icon' src={collaboration} alt='store'  />
        <h2 className='center-h3'>Real-time collaboration
</h2>
     <p className='center-para'>Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments <br/>required.

</p>
        </div>
        <div className='icon-div'>
        <img className='same-icon' src={anyfile} alt='store'  />
        <h2 className='center-h3'>Store any type of file
</h2>
      <p className='center-para'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all<br/> 
  file types to be securely stored and shared.
</p>
        </div>
     </div>
   </div>
   {/* =============================last============================ */}
   <div className='main-last' >
    <img src={illustration2} alt="illustration"/>
    <div className='last-div'>
    <h1>Stay productive,<br/> wherever you are
</h1>
<p className='last-para'> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs.</p>
<p className='last-para'>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required.</p>
  <div className='fylo-work'>
  <a href='#'>See how Fylo works</a> 
  <img src={arrow} alt=" arrow"/>
  </div>
  </div>
   </div>
    </div>
  )
}

export default Main