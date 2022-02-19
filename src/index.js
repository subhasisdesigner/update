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
            <img src={underBuildPic}/>
        </div>
    </div>
</div>
  </div>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
