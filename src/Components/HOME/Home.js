
import React from "react";
import './Home.css'
import { Button } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Home = props => {
  const { history } = props;
  return (


    <div className="main-div"> 
    <div className="header-bar">

    <div className="nav-bar"> 
    <h1  id="logo">REACT NOTES</h1> 
    <p id="log">Log In</p>
    <p id="trial">Start Your free trial</p>
    </div>  

    <div className="mid">
        <h2> Titles</h2>
    </div>
    
    </div>

      <div className="items">

       <ul>
      
       <li><Button onClick={() => history.push("/INTRODUCTION")}>REACT INTRODUCTION</Button></li>  
       <li><Button onClick={() => history.push("/INTERVIEW")}>INTERVIEW QUESTIONS </Button></li> 
       <li><Button onClick={() => history.push("/INSTALLATION")}>INSTALLATION</Button></li> 
       <li><Button onClick={() => history.push("/FIRSTCODE")}>FIRST CODE </Button></li> 
  
      </ul>                                          

      </div>

   <div className="footer">

      <p> Home <span id="lin"/> Terms and Conditions <span id="lin"/> privacy policy <span id="lin"/> collection Statement <span id="lin"/> Help  <span id="lin"/> Manage Account</p>
      <p id="linone"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>

      
      <div className="ico">

      <span id="icon"><FacebookIcon/></span> 
      <span id="icon"><InstagramIcon/></span> 
      <span id="icon"><TwitterIcon/></span>
      </div>

   </div>
  </div>

  );
};

export default Home;
