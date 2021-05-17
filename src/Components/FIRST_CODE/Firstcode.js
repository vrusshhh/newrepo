import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Firstcode.css'


function Firstcode() {

    return (
        <div className="main-div-one">
            <div className="header-bar-one">

                {/* <div className="nav-bar">
                    <h1 id="logo">Demo Streaming</h1>
                    <p id="log">Log In</p>
                    <p id="trial">Start Your free trial</p>
                </div> */}


            </div>

            <div className="mid-one">
                <h2>About React js</h2>
            </div>

            <div>
                <h3> What is Components</h3>
                <p> A Component is piece of code that can be reuse</p>
                <p>Such as function but more powerfull then function</p>
                <br />
                <h3>Components type</h3>
                <p>1. Fucnction Component</p>
                <p>2. Class Component</p>
                <p>3. HOC (Higher order Component)</p>
                <p>4. Pure Component</p>
                <p>5. Controlled Component</p>
                <p>6. Uncontrolled Component</p>
                <br />
                <h3>Functional Component</h3>
                <img src="./images/img1.jpg" className="imgs" width="500px" />
                <br />
                <h3>Class Component</h3>

            </div>

            <div className="footer-one">

                <p> Home <span id="lin-one" /> Terms and Conditions <span id="lin-one" /> privacy policy <span id="lin-one" /> collection Statement <span id="lin-one" /> Help  <span id="lin-one" /> Manage Account</p>
                <p id="linone-intro"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>


                <div className="ico-one">

                    <span id="icon-one"><FacebookIcon /></span>
                    <span id="icon-one"><InstagramIcon /></span>
                    <span id="icon-one"><TwitterIcon /></span>

                </div>
            </div>
        </div>
    )

}

export default Firstcode