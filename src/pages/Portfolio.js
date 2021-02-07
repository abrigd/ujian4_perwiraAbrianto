import React, { Component } from 'react';


class Portofolio extends Component {
    render() {
        return (
            <div>
                {/* SECTION: PORTFOLIO*/}
                <div className="section-vcardbody section-page" id="page-portfolio">
                    <div className="section-portfolio">
                        {/* Section title */}
                        <h2 className="section-title">Portfolio</h2>
                        {/* /Section title */}
                        {/* Projects list */}
                        <div className="projects-list">

                            {/* item */}
                      
                           
                                    <div className="project-item" >
                                        {/* ==> Put your thumbnail as a background */}
                                        <a href="" className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: "" }}>
                                            {/* project-description */}
                                            <div className="project-description-wrapper">
                                                <div className="project-description">
                                                    {/* project name */}
                                                    <h2 className="project-title">"a"</h2>
                                                    {/* /project name */}
                                                    <span className="see-more">"a"</span>
                                                </div>
                                            </div>
                                            {/* /project-description */}
                                        </a>
                                    </div>
                            
                   
                            {/* /item */}

                        </div>
                        {/* /projects list */}
                    </div>
                </div>
                {/* /SECTION: PORTFOLIO  */}

            </div>
        );
    }
}

export default Portofolio;