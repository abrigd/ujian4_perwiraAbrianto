import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return (
            <div>
                {/* PAGE: RESUME */}
                <div className="section-vcardbody section-page" id="page-resume">

                    {/* SECTION: Education */}
                    <div className="section-education">
                        {/* Section title */}
                        <h2 className="section-title">Resume</h2>
                        {/* /Section title */}
                        {/* Buttons */}
                        <div className="resume-buttons header-page-buttons">
                            {/* Download CV button */}
                            <a href="##" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
                            {/* /Download CV button */}
                            {/* Get in Touch button */}
                            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
                            {/* /Get in Touch button */}
                        </div>
                        {/* /Buttons */}

                        <h2 className="section-title2"><i className="fa fa-university" />&nbsp; Education</h2>

                        {/* Resume Item */}
                     
                            return (
                                <div className="resume-item" >
                                    {/* Graduation title */}
                                    <h3 className="section-item-title-1">"a"</h3>
                                    {/* /Graduation title */}
                                    {/* Graduation time */}
                                    <h4 className="graduation-time">"a"(<strong className="graduation-date">"a"</strong>)</h4>
                                    {/* /Graduation time */}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                            )
                     
                        {/* /Resume Item */}

                    </div>
                    {/*/ SECTION: Education */}

                    {/* SECTION: WORK EXPERIENCE */}
                    <div className="section-education">
                        <h2 className="section-title2"><i className="fa fa-flag" />&nbsp; Work Experience</h2>

                        {/* Resume Item */}
                        return (
                                <div className="resume-item" >
                                    {/* Graduation title */}
                                    <h3 className="section-item-title-1">"a"</h3>
                                    {/* /Graduation title */}
                                    {/* Graduation time */}
                                    <h4 className="graduation-time">"a"(<strong className="graduation-date">"a"</strong>)</h4>
                                    {/* /Graduation time */}
                                    {/* content */}
                                    <div className="graduation-description">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    {/* /Content */}
                                </div>
                            )
                        {/* /Resume Item */}

                    </div>
                    {/*/ SECTION: WORK EXPERIENCE */}

                    <h2 className="section-title2"><i className="fa fa-commenting" />&nbsp; Testimonials</h2>
                    {/* Testimonials */}
                    <div className="testimonials">
                        {/* Testimonial Slides */}
                        <div className="testimonial-slides" id="testimonial-carousel">

                            {/* item */}
                    
                                return (
                                    <div className="testimonial-item" >
                                        {/* Testimonial Content */}
                                        <div className="testimonial-content">
                                            <p>""</p>
                                        </div>
                                        {/* /Testimonial Content */}
                                        {/* Testimonial Author */}
                                        <div className="testimonial-credits">
                                            {/* picture */}
                                            <div className="testimonial-picture">
                                                <img style={{ height: 100 }} src="" alt="" />
                                            </div>
                                            {/* /picture */}
                                            <p className="testimonial-author">""</p>
                                            <p className="testimonial-firm">""</p>
                                        </div>
                                        {/* /Testimonial Author */}
                                    </div>
                                )
                  
                            {/* /item */}

                        </div>
                        {/* Testimonial Slides */}
                    </div>
                    {/* /testimonials */}
                    <div className="page-footer">
                        {/* Buttons */}
                        <div className="resume-buttons">
                            {/* Download CV button */}
                            <a href="##" className="btn btn-default btn-default2"><i className="fa fa-download" />&nbsp; Download my resume</a>
                            {/* /Download CV button */}
                            {/* Get in Touch button */}
                            <a href="#page-contact" className="btn btn-default btn-default2 link-page"><i className="fa fa-download" />&nbsp;  Get in Touch</a>
                            {/* /Get in Touch button */}
                        </div>
                        {/* /Buttons */}
                        {/* Quote */}
                        <p className="footer-quote">"{this.props.quotes}" <br /><i>{this.props.quotesmaker}</i></p>
                        {/* /Quote */}
                    </div>
                </div>
                {/* /PAGE: RESUME  */}

            </div>
        );
    }
}

export default Resume;