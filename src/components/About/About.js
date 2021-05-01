import React from 'react';
import './About.css';
import {
  Link,
} from 'react-router-dom';

class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Link
            className='openFormButton'
            to={{pathname: '/'}}>
            <p>
              &#8594; tisch deine Meinung auf!
            </p>
          </Link>
          <div className='about-content'>
            <p id='about-title'>aufgetischt:</p>
            <p id='about-description'>
              Aufgetischt ist eine Kampagne für mehr Diskurs und Meinungsvielfalt.
              Wir tischen verschiedene Meinungen auf ....
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
