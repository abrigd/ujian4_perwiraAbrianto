import React, { Component } from "react";
import Awal from "./pages/Awal";
import Main from "./pages/Main";
import Center from "./pages/Center";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

// import { Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";

function App() {
 

 

    return (
      <div className="container-fluid">
        
        <Awal/>
        <Main/>
        <Center/>
   
      </div>
    );

}

export default App;
