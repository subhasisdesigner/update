import React from "react";
import { NavLink} from "react-router-dom";
import "../leftPanel/leftPanel.scss"
import IconButton from '@mui/material/IconButton';

import MyPic from "../../../../asset/Images/subhasis_santra.jpg"

export default function LeftPanel() {
  return (
    <div className="left_panel d_flex">
      <div className="menu_sidebar">
        <div className="my_pic">
        <img src={MyPic} alt="Subhasis santra"/>
        </div>
        <div className="social_media">
        <IconButton className="facebook" aria-label="facebook" href="https://www.facebook.com/santrawebsolution" title="Santrawebsolution Official Page" target="_blanck">
        <i class="ri-facebook-fill"></i>
        </IconButton>
        <IconButton className="whatsapp" aria-label="whatsapp" href="https://wa.me/+918001473178/?text=I'm%20interested%20in%20your%20service" title="Subhasis Santra WhatsApp" target="_blanck">
        <i class="ri-whatsapp-fill"></i>
        </IconButton>
        <IconButton className="skype" aria-label="skype" href="https://join.skype.com/invite/KaxdquyQAdBw" title="Subhasis Santr on skype" target="_blanck">
        <i class="ri-skype-fill"></i>
        </IconButton>
        <IconButton className="mail" aria-label="mail" href="mailto:santrasubhasis15@gmail.com" title="santrasubhasis15@gmail.com" target="_blanck">
        <i class="ri-mail-send-fill"></i>
        </IconButton>
        <IconButton className="linkedin" aria-label="linkedin" href="https://www.linkedin.com/in/subhasis-santra-501a221b4/" title="Subhasis Santr on linkedin" target="_blanck">
        <i class="ri-linkedin-fill"></i>
        </IconButton>
        <IconButton className="phone" aria-label="phone" href="tel:+91-8001473178" title="Call now" target="_blanck">
        <i class="ri-phone-fill"></i>
        </IconButton>
        </div>
      </div>
      <div className="menu">
        <div className="profile">
          <p>UI & UX Designer</p>
          <h1>Subhasis Santra</h1>
        </div>
        <div className="menu_item">
      <NavLink exact className="introduction" activeClassName="active_menu" to="/"><i class="ri-mic-fill"></i>Introduction</NavLink>
      <NavLink exact className="skills" activeClassName="active_menu" to="/about"><i class="ri-user-settings-fill"></i>Skills & Knowledge</NavLink>
      <NavLink exact className="work" activeClassName="active_menu" to="/"><i class="fas fa-tools"></i>Work Profile</NavLink>
      <NavLink exact className="education" activeClassName="active_menu" to="/about"><i class="fas fa-book-reader"></i>Education</NavLink>
      <NavLink exact className="professional" activeClassName="active_menu" to="/"><i class="fas fa-user-graduate"></i>Professional Qualifications</NavLink>
      <NavLink exact className="contact" activeClassName="active_menu" to="/about"><i class="fas fa-id-card-alt"></i>Contact</NavLink>
      </div>
      <div className="copy_right">
      <i class="ri-quill-pen-fill"></i><span>Design by <strong>Subhasis Santra</strong></span>
      </div>
      </div>
    </div>
  );
}
