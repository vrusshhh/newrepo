
import React from "react";
import Home from "./Components/HOME/Home";
import About from "./Components/INTRODUCTION/Introduction";
import { Route, Switch } from "react-router-dom";
import Jobs from "./Components/INSTALLATION/Installation";
import Breadcrumbs from "./Components/Breadcrumbs";
import Movies from "./Components/FIRST_CODE/Firstcode"
import Interview from "./Components/Interview/interview"
import './App.css'



export default function App() {
  return (
      <>
      <Breadcrumbs />
     
      <Switch>
        
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/INTRODUCTION" render={props => <About {...props} />} />
        <Route exact path="/INSTALLATION" render={props => <Jobs {...props} />} />
        <Route exact path="/FIRSTCODE" render={props => <Movies {...props} />} />
        <Route exact path="/INTERVIEW" render={props => <Interview {...props} />} />
      </Switch>
      </>
     
  );
}
