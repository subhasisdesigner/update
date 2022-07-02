import React from "react";
import './techwelfare.scss';
import ndhgoPic from "../../../../asset/Images/NDHGO-Logo.png"

import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function myProject() {
    return (
        <div className="work_profile">
            <h4>02. Techwelfare </h4>
            <AvatarGroup max={4} className="techwelfare_project">
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
                <Avatar alt="Remy Sharp">
                    <img src={ndhgoPic} />
                </Avatar>
            </AvatarGroup>
        </div>
    );
}


