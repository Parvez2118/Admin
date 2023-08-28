import React, { useState } from 'react';

function TopNav(){
    const [isActive, setIsActive] = useState(false);

    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", width:1300+"px", marginLeft:100+"px"}}>
        <button style={{ border:1+"px solid #E5E4E2",width:150+"px", height:50+"px", borderRadius:30+"px",  fontSize:20+"px", backgroundColor:"white"}}>RBSE</button>
        <button style={{ border:1+"px solid #E5E4E2",width:120+"px", height:50+"px", borderRadius:30+"px",   fontSize:20+"px", backgroundColor:"white"}}>9th</button>
        <button style={{ border:1+"px solid #E5E4E2",border:1+"px solid #E5E4E2",width:120+"px", height:50+"px", borderRadius:30+"px",  fontSize:20+"px", backgroundColor:"white"}}>English</button>
        <button style={{border:1+"px solid #E5E4E2", width:120+"px", height:50+"px", borderRadius:30+"px",   fontSize:20+"px", backgroundColor:"white"}}>NCERT</button>
        <button style={{border:1+"px solid #E5E4E2",width:120+"px", height:50+"px", borderRadius:30+"px",   fontSize:20+"px", backgroundColor:"white"}}>Beehive</button>
        </div>

        <div >
        <div className="accordion1" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div>Day 1</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    
  </div>
</div>
        </div>
        
        </>
    )
}

export default TopNav;