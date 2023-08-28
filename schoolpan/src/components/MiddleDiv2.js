import React, { useState } from 'react';

function MiddleDiv2(){
    const [isActive, setIsActive] = useState(false);

    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", width:1300+"px", marginLeft:95+"px", marginTop:40+"px"}}>
        <button style={{border:1+"px solid #E5E4E2", width:180+"px", height:50+"px", borderRadius:30+"px",  fontSize:20+"px", backgroundColor:"white"}}>Informative</button>
        <button style={{border:1+"px solid #E5E4E2", width:180+"px", height:50+"px", borderRadius:30+"px",   fontSize:20+"px", backgroundColor:"white"}}>Conceptual</button>
        <button style={{border:1+"px solid #E5E4E2", width:180+"px", height:50+"px", borderRadius:30+"px",  fontSize:20+"px", backgroundColor:"white"}}>Colearning</button>
        </div>

        <div >
        <div className="accordion1" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div>Q1</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    
  </div>
</div>
        </div>
        
        </>
    )
}

export default MiddleDiv2;