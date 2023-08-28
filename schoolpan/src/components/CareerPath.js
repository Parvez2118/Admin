

import React, { useState } from 'react';

const CareerPath = () => {
    const [isActive, setIsActive] = useState(false);


  return (
    <>
      <div className="accordion" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div style={{fontWeight:"bold"}}>Career Path</div>
      <div style={{fontWeight:"bold"}}>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content parent" style={{borderRadius:30+"px"}}>
       
      <div className='problem_child1 '>
         <h3>Career path</h3>
        <input className='problem_input3' placeholder='career name'></input>
        <textarea placeholder='Description' className="problem_text1"></textarea>
        <textarea placeholder='Description' className="problem_text1"></textarea>
        <br></br>
        <button className='problem_button'>Add</button>
     </div>


      <div className='child2'>
      <h2 style={{float:"left", marginLeft:20+"px", marginBottom:20+"px"}}> Added Item</h2>
      <div className="container">
      <div className="square">
      </div>
      <div className="text1">
        <h5>Title</h5>
        <p>Text next to the square.</p>
      </div>
      </div>

      <div className="container">
      <div className="square">
      </div>
      <div className="text1">
        <h5>Title</h5>
        <p>Text next to the square.</p>
      </div>
      </div>

      <div className="container">
      <div className="square">
      </div>
      <div className="text1">
        <h5>Title</h5>
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

export default CareerPath;