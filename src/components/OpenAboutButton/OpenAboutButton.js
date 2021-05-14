import React from 'react';
import './OpenAboutButton.css';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import aboutButtonImg from '../../assets/aboutButton.png';

class OpenAboutButton extends React.Component {
  render() {
    return (
      <div className='openAboutButton'>
        <Link
          to={{pathname: '/about'}}>
            { !isMobile && 
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
            }
            { isMobile && 
              <p
                className='aboutButtonText aboutButtonTextMobile'
              >
                → über aufgetischt:
              </p>
            }
        </Link>
      </div>
    )
  }
}

export default OpenAboutButton;
