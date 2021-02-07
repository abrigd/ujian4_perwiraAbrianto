import React, { Component } from 'react';

import axios from 'axios';


const BASE_URL = 'https://dummyapi.io/data/api/post?limit=25';

const APP_ID = '';





class Blog extends Component {


    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset,
            pageCount: Math.ceil(this.props.blog.length / this.state.perPage)
        });

    }




    render() {
        
        return (
            <div>
                <div className="section-vcardbody section-page" id="page-blog">
                    <div className="section-blog">
     
                        <h2 className="section-title">Blog</h2>
       
                        <div className="blog-posts">

      
                      
                                    <div className="blog-item" >
                                        <div className="blog-item-wrapper">
                    
                                            <div className="blog-item-thumb">
                                                <img style={{ height: 200 }} src="" alt="" />
                                            </div>
                             
                                            <div className="blog-item-infos">
                                
                                                <div className="blog-item-title-wrapper">
                                                    <h2 className="blog-item-title title-border">""</h2>
                                                </div>
                               
                                                <div className="blog-item-description">
                                                    <p>""</p>
                                                </div>
                                
                                                <div className="blog-item-link">
                                
                                                </div>
                                
                                            </div>
                                
                                        </div>
                                    </div>
                        
                        </div>
                        

                        

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Blog;