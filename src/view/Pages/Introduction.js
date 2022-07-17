import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import Grid from '@mui/material/Grid';
import "./Introduction.scss"
import loadData from "../../Config/LoadingBar"
import ProfilePic from "../component/profileInfo/ProfilePic";
import ProfileInfo from "../component/profileInfo/ProfileInfo";
import MyProject from "../component/workProfile/myProject";
import SenrysaTechnologiesProjects from "../component/workProfile/senrysaTechnologies";
import TechwelfareProjects from "../component/workProfile/techwelfare";
import Education from "../component/education";
import SkillsKnowledge from "../component/skillsKnowledge";
import ContactUs from "../component/contactUs";


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
      <Grid container spacing={{ xs: 3, md: 5 }}>
        <Grid item xs={12} sm={12} md={12} lg={8} className="responsive_width_100">
          <Grid container className="align_items">
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <ProfileInfo />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <ProfilePic />
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 3, md: 5, md: 10 }}>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="work_profile_body">
                <h2 className="work_profile_text">Skills & Knowledge</h2>
                <SkillsKnowledge />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <div className="work_profile_body">
                <h2 className="work_profile_text">Contact Us</h2>
                <ContactUs />
              </div>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} className="responsive_width_100">
          <div className="work_profile_body">
            <h2 className="work_profile_text">Work Profile</h2>
            <MyProject />
            <SenrysaTechnologiesProjects />
            <TechwelfareProjects />
          </div>
          <div className="work_profile_body mt_40">
            <h2 className="work_profile_text">Education</h2>
            <Education />
          </div>
        </Grid>
      </Grid >
    </div >
  );
}

