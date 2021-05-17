import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Introduction.css'

function Introduction() {



    return (
        <div className="main-div-intro">
            <div className="header-bar-intro">

                {/* <div className="nav-bar">
                    <h1 id="logo">Demo Streaming</h1>
                    <p id="log">Log In</p>
                    <p id="trial">Start Your free trial</p>
                </div> */}


            </div>

            <div className="mid-intro">
                <h2>About React js</h2>
            </div>
            

                <div>
                  <p>React js is javascript library used for front End develpmemt</p>

                </div>



            <div className="footer-intro">

                <p> Home <span id="lin-intro" /> Terms and Conditions <span id="lin-intro" /> privacy policy <span id="lin-intro" /> collection Statement <span id="lin-intro" /> Help  <span id="lin-intro" /> Manage Account</p>
                <p id="linone-intro"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>


                <div className="ico-intro">

                    <span id="icon-intro"><FacebookIcon /></span>
                    <span id="icon-intro"><InstagramIcon /></span>
                    <span id="icon-intro"><TwitterIcon /></span>

                </div>
            </div>
        </div>
    )

}

export default Introduction