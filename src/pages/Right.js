import React from "react";

export default function Right() {
  return (
    <div>
      <div class="vcard-profile-pic">
        <img src="img/profile2.jpg" id="profile2" alt="" />
        <img src="img/profile.jpg" id="profile1" class="profileActive" alt="" />
      </div>

      <div class="vcard-profile-description">
        <h1 class="profile-title">
          Hi, i'm <span class="color1">John Rex!</span>
        </h1>
        <h2 class="profile-subtitle">Web Designer & Developer</h2>

        <hr class="hr1" />
        <div class="vcard-profile-description-text">
          <p>
            Founder of DotRex. Professional UI/UX designer and web developer
            based on London. Sometimes works as a freelancer.
          </p>
        </div>

        <div class="vcard-profile-description-feature">
          <div class="vcard-profile-description-ft-item">
            <p>email: john@dotrex.co / phone +123 456 789 111</p>
          </div>
        </div>
      </div>

      <div class="vcard-footer">
        <div class="footer-social-icons">
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
