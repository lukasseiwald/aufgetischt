import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import {
  Link,
} from 'react-router-dom';

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

class Footer extends React.Component {
  render() {
    return (
      <div
        className='footer-container'
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
            <a href='https://www.instagram.com/aufgetischt.link/' target='_blank' rel="noreferrer">
              <div className='social'>
                <FontAwesomeIcon
                  className='social-icon'
                  icon={faInstagram} />
                <p>@aufgetischt.link</p>
              </div>
            </a>
            <Mailto email='info@aufgetischt.link' subject='Aufgetischtes' body=''>
            <div className='social'>
              <FontAwesomeIcon
                className='social-icon' 
                icon={faEnvelope} />
              <p>info@aufgetischt.link</p>
            </div>
            </Mailto>
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
