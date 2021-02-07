import React, { Component } from 'react';



class Home extends Component {
    render() {
        return (
            <div>

                <div className="section-vcardbody section-home" id="section-home">
  
                    <div className="vcard-profile-pic">
                        <img style={{height: 240}} src="http://p_abrianto.staff.gunadarma.ac.id/photo.png" id="profile2" alt="" />
                        <img style={{height: 240}} src="http://p_abrianto.staff.gunadarma.ac.id/photo.png" id="profile1" className="profileActive" alt="" />
                        {/* <img style={{height: 259,transform: "scaleX(-1)"}} src="http://p_abrianto.staff.gunadarma.ac.id/photo.png" id="profile1" className="profileActive" alt="" /> */}
                    </div>
        
                    <div className="vcard-profile-description">
    
                        <h1 className="profile-title">Hi, i'm <span className="color1">Perwira Abrianto</span></h1>
                        <h2 className="profile-subtitle">JUARA CODING STUDENT</h2>
          
                        <hr className="hr1" />
                        <div className="vcard-profile-description-text">
                            <p>WORK...WORK...WORK</p>
                        </div>
 
                        <div className="vcard-profile-description-feature">
         
                            <div className="vcard-profile-description-ft-item">
                                <p>Email :  abrijsi@gmail.com / Phone 087881710216</p>
                            </div>
          
                        </div>
          
                    </div>
   
                    <div className="vcard-footer">
   
                        <div className="footer-social-icons">
                            <a href={this.props.instagram} target="blank"><i className="fa fa-instagram" /></a>
                            <a href={this.props.facebook} target="blank"><i className="fa fa-facebook" /></a>
                            <a href={this.props.linkedin} target="blank"><i className="fa fa-linkedin" /></a>
                            <a href={this.props.youtube} target="blank"><i className="fa fa-youtube" /></a>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
