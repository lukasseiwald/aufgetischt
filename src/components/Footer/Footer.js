import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram, faEnve } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className='container'
      > 
        <div
          className='footer'
        > 
          <div
            className='footer-left'
          > 
            <p
              className='footer-title'
            >
              aufgetischt: eine Intervention von studiostörung
            </p>
            <div className='social'>
              <FontAwesomeIcon icon={faInstagram} />
              <p>@aufgetischt</p>
            </div>
            <div className='social'>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@aufgetischt.link</p>
            </div>
          </div>
          <div
            className='footer-right'
          > 
            <Link
              to='/impressum'
              className='footer-link'
            >
              <p>Impressum</p>
            </Link>
            <Link
              to='/data'
              className='footer-link'
              id='data-link'
            >
              <p>Datenschutz</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
