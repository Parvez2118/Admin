

import React, { useState } from 'react';

const RelevanceToSubject = () => {
    const [isActive, setIsActive] = useState(false);


  return (
    <>
      <div className="accordion" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div style={{fontWeight:"bold"}}>Relevance To Subject</div>
      <div style={{fontWeight:"bold"}}>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content parent" style={{borderRadius:30+"px"}}>
       
      <div className='problem_child1 '>
         <h3>Relevance to subject:</h3>
        
         <li><input className='problem_input2' placeholder='Point 1'></input></li>
        <textarea placeholder='Content' className="problem_text"></textarea>
        <br></br>
        <button className='problem_button'>Add</button>
     </div>


      <div className='child2'>
      <h2 style={{float:"left", marginLeft:20+"px", marginBottom:20+"px"}}> Added Item</h2>
      <div className="container">
        
      <div className="text1">
        

        <h3>Point1</h3>
        <p>Text next to the square.</p>
        <br></br>
        <h3>Point2</h3>
        <p>Text next to the square.</p>
        <br></br>
        <h3>Point3</h3>
        <p>Text next to the square.</p>
      </div>
      
      </div>

      </div>
      
      
      
     
      
      
    </div>}
  </div>
</div>
    </>
  );
};

export default RelevanceToSubject;