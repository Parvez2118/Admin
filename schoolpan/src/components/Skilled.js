

import React, { useState } from 'react';

const Skilled = () => {
    const [isActive, setIsActive] = useState(false);

 

  return (
    <>
      <div className="accordion" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div style={{fontWeight:"bold"}}>Skilled</div>
      <div style={{fontWeight:"bold"}}>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content parent" style={{borderRadius:30+"px"}}>
       
      <div className='problem_child1 '>
         <h3>Skills</h3>
        <input className='problem_input2' placeholder='Add Skills Name'></input>
        <input className='problem_input2' placeholder='Description'></input>
        <textarea placeholder='Content' className="problem_text"></textarea>
        <br></br>
        <button className='problem_button'>Add</button>
     </div>


      <div className='child2'>
      <h2 style={{float:"left", marginLeft:20+"px", marginBottom:20+"px"}}> Added Item</h2>
      <br></br>
      <div style={{ marginTop:45+"px",textAlign:"left", marginLeft:40+"px"}}>
      <h4>Skill Name</h4>
      
        <p>It is a first paragraph</p>
        <ul>
            <li>this is a text</li>
            <li>this is a text</li>
            <li>this is a text</li>
        </ul>
        <br></br>
        
        <h4>Skill Name</h4>
        <p>It is a first paragraph</p>
        <ul>
            <li>this is a text</li>
            <li>this is a text</li>
            <li>this is a text</li>
        </ul>
      </div>
      </div>
      
      
      
     
      
      
    </div>}
  </div>
</div>
    </>
  );
};

export default Skilled;