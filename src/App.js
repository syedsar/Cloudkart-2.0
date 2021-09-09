import "./App.css";
import React from 'react'
import { GoVerified } from "react-icons/go";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Aos from "aos";

import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import { useEffect } from "react";
import DocumentTitle from "react-document-title";

function App() {

  // useEffect(()=>{
  //   Aos.init();
  //   Aos.refresh();

  // },[])
  return (
    <div className="App">
      <NavigationBar />

      <Switch>

        <DocumentTitle>
        <Route exact path="/" component={Home} />
        </DocumentTitle>

        <Route exact path="/services" component={Services} />

        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
