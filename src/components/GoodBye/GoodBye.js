import React from 'react';
import './GoodBye.css';

import { isMobile } from 'react-device-detect';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';
import StudioStoerungLogo from '../../assets/StudioStoerungLogo';
import studiostoerungLogo from '../../assets/studiostoerungLogo.png';


class GoodBye extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='goodbye-container'>
          <div className='goodbye-content'>
            <p className='goodbye-description'>
              aufgetischt: war die erste <br />
              Intervention von  <img src={studiostoerungLogo} className='logoStudiostoerung' /> 

            </p>
          </div>
          <div className='goodbye-footer-container'>
            <div className='goodbye-footer-1'>
              <p>Ein Bachelorprojekt im Studiengang MultiMediaArt an der FH Salzburg</p>
            </div>
            <div className='goodbye-footer-2'>
              <p>© 2022 studiostörung</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GoodBye;
