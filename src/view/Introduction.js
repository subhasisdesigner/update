import React,{ useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';
import { CardActionArea} from '@mui/material';

import "../asset/Sass/ContentViewerSass/Introduction.scss"
import ProfilePic from "../asset/Images/Profile1.png"
import myProject from "../asset/Images/myProject.png"
import ndhgo from "../asset/Images/NDHGO-Logo.png"

import loadData from "./component/main/LoadingBar"

export default function LandingPage() {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);
  return (
    <div className="content_body">
      <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
        <Grid container spacing={2} className="align-items">
        <Grid item xs={12} sm={12} md={4}>
          <div className="sub_content_body">
            <div className="content_profile">
              <p>UI & UX Designer</p>
              <h2>Subhasis Santra</h2>
              <h5>With in <strong>3 years</strong> experience as a Web Designer Present at <br></br><strong><a href="http://www.senrysa.com" title="Senrysa Technologies (P) Ltd" target="_blanck">Senrysa Technologies (P) Ltd.</a></strong></h5>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <div className="sub_content_body">
            <img src={ProfilePic}/>
          </div>
        </Grid>
          </Grid>  
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
         <div className="work_profile_body">
           <h2 className="work_profile_text">Work Profile</h2>
         <div className="work_profile">
           <h4>01. My project</h4>
            <CardActionArea className="project_body">
             <div className="project_pic">
              <img src={myProject}/>
             </div>
             <div className="project_info">
               <h3>subhasiswebdesigner</h3>
               <p>React, HTML,SASS,SCSS, Adobe XD</p>
               <span>View details</span>
             </div>
            </CardActionArea>
         </div>

         <div className="work_profile">
           <h4>02. Senrysa Technologies (P) Ltd </h4>
            <CardActionArea className="project_body">
             <div className="project_pic">
              <img src={ndhgo}/>
             </div>
             <div className="project_info">
               <h3>NDHGO Seller Panel</h3>
               <p>React, HTML,CSS, Adobe XD</p>
               <span>View details</span>
             </div>
            </CardActionArea>
         </div>
         </div>
        </Grid>
      </Grid>
    </div>
  );
}

