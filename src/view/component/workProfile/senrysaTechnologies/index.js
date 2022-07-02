import React from "react";
import './senrysaTechnologies.scss';
import { CardActionArea } from '@mui/material';
import ndhgoPic from "../../../../asset/Images/NDHGO-Logo.png"

export default function myProject() {
    return (
        <div className="work_profile">
            <h4>02. Senrysa Technologies (P) Ltd </h4>
            <CardActionArea className="project_body">
                <div className="project_pic">
                    <img src={ndhgoPic} />
                </div>
                <div className="project_info">
                    <h3>NDHGO Seller Panel</h3>
                    <p>React, HTML,CSS, Adobe XD</p>
                    <span>View details</span>
                </div>
            </CardActionArea>
        </div>
    );
}


