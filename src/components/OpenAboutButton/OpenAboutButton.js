import React from 'react';
import './OpenAboutButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Link,
} from 'react-router-dom';
import aboutButtonImg from '../../assets/aboutButton.png';

class OpenAboutButton extends React.Component {
  render() {
    return (
      <div className='openAboutButton'>
        <Link
          to={{pathname: '/about'}}>
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
    )
  }
}

export default OpenAboutButton;
