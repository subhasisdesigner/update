import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import underBuildPic from './asset/construction.png'

ReactDOM.render(
  <BrowserRouter>
  <div id="under_duild">
  <div class="loading-wrapper">
    <div class="loader-container">
        <div class="state-pending">
        <div class="copy_right"><i class="ri-quill-pen-fill"></i><span>Design by <strong>Subhasis Santra</strong></span></div>
            <img src={underBuildPic}/>
        </div>
    </div>
</div>
  </div>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
