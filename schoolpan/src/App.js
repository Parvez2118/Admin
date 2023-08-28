import { Routes, Route } from "react-router-dom";
import {  Sidebar, dummyData } from "./components";
import './App.css';
import ApplicationComp from './components/ApplicationComp';
import TopNav from "./components/TopNav";
import MiddleDiv from "./components/MiddleDiv";

function App() {
  return (
    <>
    <div style={{ display:"flex"}}>
     <div>
      <Sidebar>
        <Routes>
          <Route path="/"  />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
              
              />
            ))}
        </Routes>
      </Sidebar>
      </div>
      
    
      
     <div style={{ textAlign:"center", justifyContent:"center", width:1500+"px"}}>
      <TopNav></TopNav>  
      {/* <ApplicationComp></ApplicationComp> */}
      <MiddleDiv></MiddleDiv>
     </div>
    </div>
    
      
    </>
  );
}

export default App;
