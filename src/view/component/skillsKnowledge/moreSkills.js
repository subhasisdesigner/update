import React from "react";
import CardActionArea from '@mui/material/CardActionArea';

import PhotoshopPic from '../../../asset/Images/skills/photoshop.png';
import MaterialPic from '../../../asset/Images/skills/material-ui.png';
import ReactPic from '../../../asset/Images/skills/react.png';
import BootstrapPic from '../../../asset/Images/skills/bootstrap.png';
import JsPic from '../../../asset/Images/skills/js.png';
import WoordpressPic from '../../../asset/Images/skills/woordpress.png';
import SassPic from '../../../asset/Images/skills/sass.png';



export default function AdobeXd() {
    return (
        <div className="more_skills_body d_flex align_items gap_20">
            <div className="more_skills">
                <div className="skills_item">
                    <img src={PhotoshopPic} />
                </div>
                <div className="skills_item">
                    <img src={MaterialPic} />
                </div>
                <div className="skills_item">
                    <img src={ReactPic} />
                </div>
                <div className="skills_item">
                    <img src={BootstrapPic} />
                </div>
                <div className="skills_item">
                    <img src={JsPic} />
                </div>
                <div className="skills_item">
                    <img src={WoordpressPic} />
                </div>
                <div className="skills_item">
                    <img src={SassPic} />
                </div>
                <div className="skills_item">
                    <CardActionArea className="more_skills_btn">
                        <h3>25+</h3>
                        <p>More</p>
                    </CardActionArea>
                </div>
            </div>
        </div>
    );
}




