
// import React from 'react'
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// export default class Series extends React.Component {

//     constructor(){
//         super();
//         this.state={
//             data:false        
//         }
//     }

//     componentDidMount()
//     {
//         let url ="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
//         fetch(url, {
//             method:'GET',

//         }) .then((result)=>{
//             result.json().then((resp)=>{
//                 this.setState({data:resp})         
//             })
//         })
//     }
//     render(){   
//         const {data}=this.state;
//      return (



//         <div className="main-div"> 
//         <div className="header-bar">

//         <div className="nav-bar"> 
//         <h1 id="logo">Demo Streaming</h1> 
//         <p id="log">Log In</p>
//         <p id="trial">Start Your free trial</p>
//         </div>  


//         </div>

//         <div className="mid">
//         <h2>Popular Series</h2>
//         </div>






//         <div>
//                 {
//                     data ?
//                      <div>
//                      <h5> Title:- {data.entries[0].title}</h5>
//                      <h5>{data.entries[0].description}</h5>
//                      <h5> Program Type:- {data.entries[0].programType}</h5>
//                      <h5> Relese Year:-  {data.entries[0].releaseYear}</h5>                 
//                     </div>
//                     :<p>Please wait....</p>
//                 }
//          </div>





//          <div className="footer">

//           <p> Home <span id="lin"/> Terms and Conditions <span id="lin"/> privacy policy <span id="lin"/> collection Statement <span id="lin"/> Help  <span id="lin"/> Manage Account</p>
//           <p id="linone"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>


//           <div className="ico">

//           <span id="icon"><FacebookIcon/></span> 
//           <span id="icon"><InstagramIcon/></span> 
//           <span id="icon"><TwitterIcon/></span>

//           </div>

//           <div className ="icoone">
//      <img src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/app-store.svg" id="im" />
//      <img src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/windows-store.svg" id="im" width="120px"/>
//      <img src="https://raw.githubusercontent.com/StreamCo/react-coding-challenge/517276bfb32858ed26fa4cc52a8fecb68476f85a/assets/store/play-store.svg" id="im"/>

//       </div>

//        </div>

//           </div>
//      )
//     }
// }


import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './installation.css'


function Installation() {



    return (
        <div className="main-div-insta">
            <div className="header-bar-insta">

                {/* <div className="nav-bar-insta">
                    <h1 id="logo-insta">Demo Streaming</h1>
                    <p id="log">Log In</p>
                    <p id="trial">Start Your free trial</p>
                </div> */}


            </div>

            <div className="mid-insta">
                <h2>Popular Series</h2>
            </div>

            <div>Hiii</div>


            <div className="footer-insta">

                <p> Home <span id="lin-insta" /> Terms and Conditions <span id="lin-insta" /> privacy policy <span id="lin-insta" /> collection Statement <span id="lin-insta" /> Help  <span id="lin-insta" /> Manage Account</p>
                <p id="linone-insta"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>


                <div className="ico-insta">

                    <span id="icon-insta"><FacebookIcon /></span>
                    <span id="icon-insta"><InstagramIcon /></span>
                    <span id="icon-insta"><TwitterIcon /></span>

                </div>
            </div>
        </div>
    )

}

export default Installation



