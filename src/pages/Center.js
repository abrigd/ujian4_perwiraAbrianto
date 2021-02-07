import React from "react";

export default function Center() {
  return (
    <div>
      <div className="vcard-profile-pic">
        <img src="img/profile2.jpg" id="profile2" alt="" />
        <img src="img/profile.jpg" id="profile1" className="profileActive" alt="" />
      </div>

      <div className="vcard-profile-description">
        <h1 className="profile-title">
          Hi, i'm <span className="color1">Perwira Abrianto</span>
        </h1>
        <h2 className="profile-subtitle">Juara Coding Student</h2>

        <hr className="hr1" />
        <div className="vcard-profile-description-text">
          <p>
            Founder of Gakemanamana.
          </p>
        </div>

        <div className="vcard-profile-description-feature">
          <div className="vcard-profile-description-ft-item">
            <p>email: abrijsi@gmail.com / phone +62 87881710216</p>
          </div>
        </div>
      </div>

      <div className="vcard-footer">
        <div className="footer-social-icons">
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
