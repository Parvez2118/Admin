import React, { useState } from 'react';

const ApplicationComp = () => {
    const [isActive, setIsActive] = useState(false);


  return (
    <>
      <div className="accordion" >
        <div className="accordion-item">
         <div className="accordion-title" onClick={() => setIsActive(!isActive)} style={{borderRadius:30+"px"}}>
      <div  style={{fontWeight:"bold"}}>Application</div>
      <div style={{fontWeight:"bold"}}>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content parent" style={{borderRadius:30+"px"}}>
      <div className='child1'>

        <div className='c1'>+</div>

        <div className='c2'>
        <input className='input2' placeholder='Add title'></input>
        <textarea placeholder='Content' className="text"></textarea>
        <br></br>
        <button className='button'>Add</button>
        </div>  

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

export default ApplicationComp;