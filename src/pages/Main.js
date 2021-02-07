import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";


import Resume from "./Resume";
import Home from "./Home";
import { LinkContainer } from "react-router-bootstrap";

import { useState } from "react";

function Main() {
  const [showResume, setShowResume] = useState(
    "section-vcardbody section-page"
  );
  const [showSkills, setShowSkills] = useState(
    "section-vcardbody section-page"
  );
  const [showPortofolio, setShowPortofolio] = useState(
    "section-vcardbody section-page"
  );
  const [showContact, setShowContact] = useState(
    "section-vcardbody section-page"
  );
  const [showCardProfile, setShowCardProfile] = useState(
    "section-vcardbody section-home"
  );
  const [showBlog, setShowBlog] = useState("section-vcardbody section-page");
  const [showMenu, setShowMenu] = useState("main-menu");

  const [resumes, setResumes] = useState([
    {
      title: "Education",
      resumes: [
        {
          name: "Gunadarma University",
          role: "Bachelor Degree (S1), Computer Science.",
          years: "2016 - 2020",
          description: `Majoring Computer Science, Minoring Software Engineering`,
        },
      ],
    },
  
  ]);

  return (
    
      <Router>
      <div className="main-menu" id="main-menu">
        
          <ul className="main-menu-list">
          <li>
              <LinkContainer to="/Home">
                <a className="link-home">Home</a>
              </LinkContainer>
            </li>
            <li>
              <LinkContainer to="/Resume">
                <a className="link-home">Resume</a>
              </LinkContainer>
            </li>
          </ul>
          </div>

          <Switch>
          <Route path="/Home">
            <Home
              showCardProfile={showCardProfile}
              setShowCardProfile={setShowCardProfile}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </Route>
            <Route path="/Resume">
              <Resume
                resumes={resumes}
                setResumes={setResumes}
                showResume={showResume}
                setShowResume={setShowResume}
                showCardProfile={showCardProfile}
                setShowCardProfile={setShowCardProfile}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
              />
            </Route>
          </Switch>
        </Router>
      
   
  );
}

export default Main;
