import ApplicationComp from "./ApplicationComp";
import CareerPath from "./CareerPath";
import Drop1 from "./Drop1";
import Drop2 from "./Drop2";
import Drop3 from "./Drop3";
import Event from "./Event";
import MiddleDiv2 from "./MiddleDiv2";
import Problem from "./Problem";
import RelevanceToSubject from "./RelevanceToSubject";
import Skilled from "./Skilled";


function MiddleDiv(){
    return(
        <>
        <div className="middiv">
            <input placeholder="Add title" className="input i1"></input>
            <textarea className="input " id="i2" placeholder="Objective"></textarea>
            <textarea className="input " id="i2" placeholder="Content"></textarea>
            <ApplicationComp></ApplicationComp>
            <RelevanceToSubject></RelevanceToSubject>
            <Skilled></Skilled>
            <Event></Event>
            <Problem></Problem>
            <CareerPath></CareerPath>
        </div>
        <MiddleDiv2></MiddleDiv2>
        
        <div className="middiv">
        <div style={{display:"flex", justifyContent:"space-between", width:1300+"px", marginLeft:5+"px", marginTop:40+"px"}}>
        <Drop1></Drop1>
        <Drop2></Drop2>
        <Drop3></Drop3>
       </div>
            <input placeholder="Add title" className="input i1"></input>
            <textarea className="input " id="i2" placeholder="Answer Explanation"></textarea>
            
        </div>
        </>
    )
}

export default MiddleDiv;