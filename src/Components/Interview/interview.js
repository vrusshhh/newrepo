import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './interview.css'

function interview() {
    return (
        <div className="main-div-interview">
            <div className="header-interview">

                {/* <div className="nav-bar-insta">
                    <h1 id="logo-insta">Demo Streaming</h1>
                    <p id="log">Log In</p>
                    <p id="trial">Start Your free trial</p>
                </div> */}


            </div>

            <div className="mid-interview">
                <h2>Popular Series</h2>
            </div>

            <div className="interview">

                <h3>What is React js</h3>
                <p>React js is javascript library used for front end development with good speed</p>
                <p>It is developed By  Facebeek</p>

                <br />
                <br />
                <hr />
                <br />

                <h3>What is components</h3>
                <p>Components are the building blocks of any React application, and a single app usually consists of multiple components.<br /> A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>Functional Components</h3>
                <p>A Component that has a no Es6 class it use simple JS function</p>
                <p>Simple and need to use hooks for performing State and lifecycle method</p>

                <br />
                <br />
                <hr />
                <br />

                <h3>Class Components</h3>
                <p>A Component that has Es6 class </p>
                <p>More complex and powerfull then Functional Component</p>
                <p>Beacuse it has State and life cycle Mothod</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is Hooks</h3>
                <p> </p>
                <p>Function component do not have state and life cycle <br/> Beacuse it has State and life cycle Mothod</p>
                <p> To use state and lifecycle method we import Hooks in React js</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is NPM</h3>
                <p>1. It is node package manager which is helps us to install libraries in react js </p>           
                <br />
                <br />
                <hr />
                <br />

                <h3>What is package json</h3>
                <p>1. It carry the information related to application such as version Controlled node package etc</p>           
                <br />
                <br />
                <hr />
                <br />

                <h3>What is SPA</h3>
                <p>1. It is single page application which means application look like single page no reload or refresh on jumping on other page and link</p>           
                <br />
                <br />
                <hr />
                <br />

                <h3>What is Controlled Component</h3>
                <p>A component that have input form and that form Controlled by react State</p>          
                <br />
                <br />
                <hr />
                <br />

                <h3>What is Uncontrolled Component</h3>
                <p>A Component that have input form that form Controlled by react DOM</p>          
                <br />
                <br />
                <hr />
                <br />

                <h3>What is Pure Component</h3>
                <p>Pure Component in React are Components which do not re-render when the value of state and props has been updated within same value</p>          
                <br />
                <br />
                <hr />
                <br />

                <h3>What is Dumb Component</h3>
                <p>The stateless component is known as Dumb Component</p>          
                <br />
                <br />
                <hr />
                <br />

                <h3>What is the use of render() in React?</h3>
                <p>1. It is required for each component to have a render() function. This function returns the HTML, which is to be displayed in the component.</p>
                <br />
                <br />
                <hr />
                <br />


                <h3>What is a state in React?</h3>
                <p>The state is a built-in React object that is used to contain data or information about the component.<br /> The state in a component can change over time, and whenever it changes, the component re-renders.</p>
                <p>The change in state can happen as a response to user action or system-generated events.<br /> It determines the behavior of the component and how it will render.</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is a higher-order component in React?</h3>
                <p>A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability.<br /> They are generally used when multiple components have to use a common logic. </p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is a state in React?</h3>
                <p>The state is a built-in React object that is used to contain data or information about the component.<br /> The state in a component can change over time, and whenever it changes, the component re-renders.</p>
                <p>The change in state can happen as a response to user action or system-generated events.<br /> It determines the behavior of the component and how it will render.</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>Explain the lifecycle methods of components</h3>
                <p>1. getInitialState(): This is executed before the creation of the component.</p>
                <p>2. componentDidMount(): Is executed when the component gets rendered and placed on the DOM</p>
                <p>3. shouldComponentUpdate(): Is invoked when a component determines changes to the DOM and returns a “true” or “false” value based on certain conditions.</p>
                <p>4. componentDidUpdate(): Is invoked immediately after rendering takes place.</p>
                <p>5. componentWillUnmount(): Is invoked immediately before a component is destroyed and unmounted permanently</p>

                <br />
                <br />
                <hr />
                <br />


                <h3>WHAT IS JSX</h3>
                <p>JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like.<br />
                By using JSX, we can write HTML structures in the same file that contains JavaScript code</p>
                <br />
                <br />
                <hr />
                <br />

                <h3> Can web browsers read JSX directly?</h3>
                <p>1. Web browsers cannot read JSX directly. This is because they are built to only read regular<br />
                JS objects and JSX is not a regular JavaScript object</p>
                <p>2. For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object.<br />
                 For this, we use Babel</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is the virtual DOM?</h3>
                <p>1. DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node,<br />
               and each node contains objects</p>
                <p>2. React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM.<br /> When the state of an object changes, the virtual DOM changes only that object in the real DOM,<br />
                rather than updating all the objects</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is the virtual DOM ? HOW DO THEY WORK</h3>
                <p>React uses this copy to determine what parts of the actual DOM need to change based on a user’s action.<br/> React then takes the change date from the Virtual DOM and selectively updates the actual DOM (versus reloading the entire thing). Over time, this leads to significant performance improvements for the website or application</p>
               
                <br />
                <br />
                <hr />
                <br />

                <h3>How do you create a React app?</h3>
                <p>1. Install NodeJS on the computer because we need npm to install the React library. Npm is the node package<br /> manager that contains many JavaScript libraries, including React</p>
                <p>2. Install the create-react-app package using the command prompt or terminal</p>
                <p>3. Install a text editor of your choice, like VS Code or Sublime Text</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>What is an event in React?</h3>
                <p>1. An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.</p>
                <p>2. React events are named using camelCase, rather than lowercase in HTML.</p>
                <p>3. With JSX, you pass a function as the event handler, rather than a string in HTML</p>
                <br />
                <br />
                <hr />
                <br />

                <h3> What are synthetic events in React?</h3>
                <p>Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.</p>
                <p>The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.</p>
                <p>img</p>
                <br />
                <br />
                <hr />
                <br />

                <h3> Explain how lists work in React?</h3>
                <p>We create lists in React as we do in regular JavaScript. Lists display data in an ordered format</p>
                <p>The traversal of lists is done using the map() function</p>
                <p>img</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>  Why is there a need for using keys in Lists?</h3>
                <p>1. A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists</p>
                <p>2. It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered</p>
                <br />
                <br />
                <hr />
                <br />

                <h3> What are forms in React?</h3>
                <p>1. Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc</p>
                <p>2. Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc</p>
                <br />
                <br />
                <hr />
                <br />

                <h3>  What is an arrow function and how is it used in React?</h3>
                <p>1. An arrow function is a short way of writing a function to React</p>
                <p>2. It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks</p>
                <p>img</p>
                <br />
                <br />
                <hr />
                <br />
                <h3>What is Redux</h3>
                <p>Redux is an open-source, JavaScript library used to manage application state. React uses Redux to build the user interface.<br /> It is a predictable state container for JavaScript applications and is used for the entire application’s state management</p>
                <br />
                <br />
                <hr />
                <br />
                <h3>What are the components of Redux?</h3>
                <p>1. STORE: Holds the state of the application.</p>
                <p>2. Action: The source information for the store</p>
                <p>3. Reducer: Specifies how the application's state changes in response to actions sent to the store</p>
                <br />
                <br />
                <hr />
                <br />
                <h3> What is the Flux?</h3>
                <p>Flux is the application architecture that Facebook uses for building web applications. It is a method of handling complex data inside a client-side application and manages how data flows in a React application</p>
                <br />
                <br />
                <hr />
                <br />
                <h3> What is React Router?</h3>
                <p>React Router is a routing library built on top of React, which is used to create routes in a React application</p>
                <br />
                <br />
                <hr />
                <br />
                <h3>Why do we need to React Router?</h3>
                <p>It maintains consistent structure and behavior and is used to develop single-page web applications.</p>
                <p>Enables multiple views in a single application by defining multiple routes in the React application</p>

            </div>


            <div className="footer-interview">

                <p> Home <span id="lin-interview" /> Terms and Conditions <span id="lin-interview" /> privacy policy <span id="lin-interview" /> collection Statement <span id="lin-interview" /> Help  <span id="lin-interview" /> Manage Account</p>
                <p id="linone-interview"> Copyright @ 2016 DEMO Streaming. All Right Reserved</p>


                <div className="ico-interview">

                    <span id="icon-interview"><FacebookIcon /></span>
                    <span id="icon-interview"><InstagramIcon /></span>
                    <span id="icon-interview"><TwitterIcon /></span>

                </div>
            </div>
        </div>
    )
}

export default interview