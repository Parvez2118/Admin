

import React, { useState } from 'react';

const Problem = () => {
    const [isActive, setIsActive] = useState(false);


  return (
    <>
      <div className="accordion" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div style={{fontWeight:"bold"}}>Problem</div>
      <div style={{fontWeight:"bold"}}>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content parent" style={{borderRadius:30+"px"}}>
       
      <div className='problem_child1 '>
         <h3>Problem</h3>
        <input className='problem_input2' placeholder='About'></input>
        <input className='problem_input2' placeholder='Description'></input>
        <textarea placeholder='Additional_Content' className="problem_text"></textarea>
        <br></br>
        <button className='problem_button'>Add</button>
     </div>


      <div className='child2'>
      <h2 style={{float:"left", marginLeft:20+"px", marginBottom:20+"px"}}> Added Item</h2>
      <div style={{ marginTop:60+"px",textAlign:"left", marginLeft:40+"px"}}>
      <h4>Problem Name</h4>
        <p>It is a first para</p>
        <ul>
            <li>this is a text</li>
            <li>this is a text</li>
        </ul>
     <div className="container">
      <div className="squares">
      </div>
      <div className="text1">
      <h4>Problem Name</h4>
        <p>It is a first para</p>
        <ul>
            <li>this is a text</li>
            <li>this is a text</li>
            <li>this is a text</li>
</ul>
      </div>
      </div>
      </div>
      </div>
      
      
     
      
      
    </div>}
  </div>
</div>
    </>
  );
};

export default Problem;