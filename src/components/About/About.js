import React from 'react';
import './About.css';
import {
  Link,
} from 'react-router-dom';

class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='about-container'>
          <Link
            className='openFormButton'
            to={{pathname: '/'}}>
            <p className='aboutButtonTextMobile'>
              → Tisch uns Deine Meinung auf:
            </p>
          </Link>
          <div className='about-content'>
            <p id='about-title'>aufgetischt:</p>
            <p id='about-description'>
              aufgetischt ist eine Kampagne für mehr Diskurs und Meinungsvielfalt.
            </p>
            <p id='about-description'>
              Wir tischen verschiedene Meinungen auf und servieren damit Vielfalt. Denn diese wird durch den fehlenden Austausch beschnitten. Wir wirken der Gruppenpolarisation, Blasenbildung und den Echokammern entgegen um mehr Grauzonen zu schaffen.
            </p>
            <p id='about-description'>
              Dein Tellerrand ist nicht das Ende, es gibt den ganzen Tisch!
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
