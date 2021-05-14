import React from 'react';
import './OpenAboutButton.css';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import aboutButtonImg from '../../assets/aboutButton.png';

class OpenAboutButton extends React.Component {
  render() {
    if(!isMobile) {
      return (
        <div className='openAboutButton'>
          <Link to={{pathname: '/about'}}>
            <div className='openAboutButtonContent'>
              <img
                src={aboutButtonImg}
                className='aboutButtonImg'
              />
              <p
                className='aboutButtonText'
              >
                Was ist aufgetischt?
              </p>
            </div>
          </Link>
        </div>
      );
    }
    if(isMobile) {
      return (
        <div className='openAboutButtonMobile'>
          <Link to={{pathname: '/about'}}>
            <p
              className='aboutButtonText aboutButtonTextMobile'
            >
              → über aufgetischt:
            </p>
          </Link>
        </div>
      );
    }
  }
}

export default OpenAboutButton;
