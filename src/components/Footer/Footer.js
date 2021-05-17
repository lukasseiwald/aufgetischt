import React from 'react';
import './Footer.css';
import {
  Link,
} from 'react-router-dom';
import fhSalzburgLogo from '../../assets/fh_salzburg.png';
import arrowUp from '../../assets/aufgetischt_Pfeil.png';
import StudioStoerungLogo from '../../assets/StudioStoerungLogo';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';



const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div
        className='footer-container'
      > 
        <div className='flex-row-container'>
          <div className='flex-row-item big-row column-content'>
            <AufgetischtLogo className='footer-logo' />
            <p className='footer-description'>
              Der Tellerrand ist nicht das Ende,
              es gibt den ganzen Tisch.
            </p>
          </div>
          <div className='flex-row-item big-row social-row'>
            <div className='social-icons-container'>
              <div
                className='social-icons'
              >
                <p>mail</p>
                <p>ig</p>
              </div>
              <div
                className='social-links'
              >
                <Mailto email='info@aufgetischt.link' subject='aufgetischt:' body=''>
                  <div className='social'>
                    <p>
                        info@aufgetischt.link
                    </p>
                  </div>
                </Mailto>
                <a href='https://www.instagram.com/hierwirdaufgetischt/' target='_blank' rel='noreferrer'>
                  <div className='social'>
                    <p>@hierwirdaufgetischt</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='flex-row-item big-row column-content'>
            <img
              src={fhSalzburgLogo}
              className='fhSalzburg'
            />
            <p className='footer-description'>Ein Bachelorprojekt im Studiengang MultiMediaArt an der FH Salzburg</p>
          </div>
          <div
            className='flex-row-item small-row column-flex'
            id='copyright-section'
          >
            <p>Copyright © 2021 aufgetischt</p>
            <div className='row-flex'>
              <p>Eine Intervention von </p>
              <a href='https://www.instagram.com/studiostoerung/' target='_blank' rel='noreferrer' className='link-to-instagram'>
                <StudioStoerungLogo />
              </a>
            </div>
          </div>
          <div className='flex-row-item'>
            <Link
              to='/'
              className='footer-link'
              onClick={this.scrollToTop}
            > 
              <img
                className='arrowUp'
                src={arrowUp}
              />
              <p>wieder nach oben</p>
            </Link>
          </div>
          <div className='flex-row-item'>
            <Link
              to='/impressum'
              className='footer-link'
            >
              <p id='impressum-link'>Impressum</p>
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
