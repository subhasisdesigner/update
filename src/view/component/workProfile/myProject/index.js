import React from "react";
import './myProject.scss';
import { CardActionArea } from '@mui/material';
import myProjectPic from "../../../../asset/Images/myProject.png"

export default function myProject() {
    return (
        <div className="work_profile">
            <h4>01. My project</h4>
            <CardActionArea className="project_body">
                <div className="project_pic">
                    <img src={myProjectPic} />
                </div>
                <div className="project_info">
                    <h3>subhasiswebdesigner</h3>
                    <p>React, HTML,SASS,SCSS, Adobe XD</p>
                    <span>View details</span>
                </div>
            </CardActionArea>
        </div>
    );
}


