import React from "react";
import './techwelfare.scss';
import MatrimonyPic from "../../../../asset/Images/techwelfare-project/matrimony.png";
import JobportalPic from "../../../../asset/Images/techwelfare-project/jobportal.png";
import MindcorpPic from "../../../../asset/Images/techwelfare-project/mindcorp.png";
import ZerokelvinPic from "../../../../asset/Images/techwelfare-project/zerokelvin.png";
import CurrencyPic from "../../../../asset/Images/techwelfare-project/currency.png";
import TourTravelyPic from "../../../../asset/Images/techwelfare-project/tourTravel.png";
import CardActionArea from '@mui/material/CardActionArea';

export default function myProject() {
    return (
        <div className="work_profile">
            <h4>02. Techwelfare </h4>
            <div className="techwelfare_project">
                <div className="project_item">
                    <img src={MatrimonyPic} />
                </div>
                <div className="project_item">
                    <img src={TourTravelyPic} />
                </div>
                <div className="project_item">
                    <img src={MindcorpPic} />
                </div>
                <div className="project_item">
                    <img src={ZerokelvinPic} />
                </div>
                <div className="project_item">
                    <img src={CurrencyPic} />
                </div>
                <div className="project_item">
                    <img src={JobportalPic} />
                </div>
                <div className="project_item">
                    <CardActionArea className="more_project">
                        <h3>25+</h3>
                        <p>More projects</p>
                    </CardActionArea>
                </div>
            </div>
        </div>
    );
}


