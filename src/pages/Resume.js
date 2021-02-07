import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return (
            <div>
         
                <div className="section-vcardbody section-page" id="page-resume">

                    <div className="section-education">
            
                        <h2 className="section-title">Resume</h2>
        
                        <div className="resume-buttons header-page-buttons">
               
                            <a href="##" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
                
                            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
               
                        </div>
              

                        <h2 className="section-title2"><i className="fa fa-university" />&nbsp; Education</h2>

        
                     
                       
                                <div className="resume-item" >
                        
                                    <h3 className="section-item-title-1">Gunadarma</h3>
                          
                                    <h4 className="graduation-time">2004-2013(<strong className="graduation-date">SIB</strong>)</h4>
                          
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        
                                </div>
                           
                     
                

                    </div>
       
                    <div className="section-education">
                        <h2 className="section-title2"><i className="fa fa-flag" />&nbsp; Work Experience</h2>

             
                    
                                <div className="resume-item" >
                         
                                    <h3 className="section-item-title-1">Indosystem</h3>
                        
                                    <h4 className="graduation-time">2008-2020(<strong className="graduation-date">IT</strong>)</h4>
                         
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    </div>
                                </div>
                      
              

                    </div>
           

                    <h2 className="section-title2"><i className="fa fa-commenting" />&nbsp; Testimonials</h2>
          
                    <div className="testimonials">
           
                        <div className="testimonial-slides" id="testimonial-carousel">

            
                            
                                    <div className="testimonial-item" >
                         
                                        <div className="testimonial-content">
                                            <p>""</p>
                                        </div>
                        
                                        <div className="testimonial-credits">
                           
                                            <div className="testimonial-picture">
                                                <img style={{ height: 100 }} src="" alt="" />
                                            </div>
                         
                                            <p className="testimonial-author">""</p>
                                            <p className="testimonial-firm">""</p>
                                        </div>
                               
                                    </div>
                           
                  
                   

                        </div>
              
                    </div>
       
                    <div className="page-footer">
             
                        <div className="resume-buttons">
                
                            <a href="##" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
              
                            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
                 
                        </div>
           
                        <p className="footer-quote">"{this.props.quotes}" <br /><i>{this.props.quotesmaker}</i></p>
         
                    </div>
                </div>
 

            </div>
        );
    }
}

export default Resume;