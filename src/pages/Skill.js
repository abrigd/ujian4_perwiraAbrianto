import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div>
        {/* SECTION: SKILLS*/}
        <div className="section-vcardbody section-page" id="page-skills">
          <div className="section-skills">
            {/* Section title */}
            <h2 className="section-title">SKILLS</h2>
            {/* /Section title */}
            {/* Subtitle */}
            <h3 className="section-item-title-2">
              <i className="fa fa-users" />
              &nbsp;&nbsp; Professional Skills
            </h3>
            {/* /Subtitle */}
            {/* Skils List */}
            <ul className="skills-list">
              {/* item-list */}
         
               
                  <li>
                    <div className="progress" >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-percent=""
                        style={{ width: "50%" }}
                      >
                        <span className="sr-only">"50%"</span>
                      </div>
                      <span className="progress-type">PHP</span>
                      <span className="progress-completed">"50%"</span>
                    </div>
                  </li>
            
          
              {/* /item list */}
            </ul>
            {/* /Skils List */}
            {/* Subtitle */}
            <h3 className="section-item-title-2">
              <i className="fa fa-laptop" />
              &nbsp;&nbsp; Software Skills
            </h3>
            {/* /Subtitle */}
            {/* Skils List */}
            <ul className="skills-list">
              {/* item-list */}
     
          
                  <li>
                    <div className="progress" >
                      <div
                        className="progress-bar progress-bar-2"
                        role="progressbar"
                        data-percent=""
                        style={{ width: "50%" }}
                        >
                          <span className="sr-only">"50%"</span>
                        </div>
                        <span className="progress-type">PHP</span>
                        <span className="progress-completed">"50%"</span>
                    </div>
                  </li>
         
        
              {/* /item list */}
            </ul>
            {/* /Skils List */}
            {/* Subtitle */}
            <h3 className="section-item-title-2">
              <i className="fa fa-code" />
              &nbsp;&nbsp; Code Skills
            </h3>
            {/* /Subtitle */}
            {/* Skils List */}
            <ul className="skills-list">
              {/* item-list */}
          
           
                  <li>
                    <div className="progress" >
                      <div
                        className="progress-bar progress-bar-3"
                        role="progressbar"
                        data-percent=""
                        style={{ width: "50%" }}
                        >
                          <span className="sr-only">"50%"</span>
                        </div>
                        <span className="progress-type">PHP</span>
                        <span className="progress-completed">"50%"</span>
                    </div>
                  </li>
       
      
              {/* /item list */}
            </ul>
            {/* /Skils List */}
          </div>
        </div>
        {/* /SECTION: SKILLS  */}
      </div>
    );
  }
}

export default Skill;
