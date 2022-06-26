import React from "react";
import '../index.scss';
import underBuildPic from '../asset/construction.png'

export default function UnderWork() {
  return (
    <div id="under_duild">
      <div className="loading_wrapper">
        <div className="loader_container">
          <div className="state_pending">
            <span className="Under"> This project work in progress</span>
            <img src={underBuildPic} />
          </div>
        </div>
      </div>
    </div>
  );
}


