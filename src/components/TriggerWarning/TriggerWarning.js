import React from 'react';
import './TriggerWarning.css';
import CookieConsent from 'react-cookie-consent';
import {
  Link,
} from 'react-router-dom';
import TriggerImage from '../../assets/AufgetischtFragile_Neonpink.png';

class TriggerWarning extends React.Component {

  render() {
    return (
      <CookieConsent
        location='center'
        cookieName='aufgetischterKeks'
        expires={999}
        overlay
        style={{
          background: '#FFF',
          color: '#000',
          position: 'absolute',
          top: '0',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          overflowY: 'no-scroll',
        }}
        buttonStyle={{
          background: 'transparent',
          color: '#000',
          fontWeight: 'bolder',
          borderRadius: '22em',
          border: '2px solid #000',
          padding: '1em 2em',
          fontSize: '1em',
          marginBottom: '5em',
        }}
        contentStyle={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
        buttonText='Ok, verstanden!'
      >
        <img
          className='triggerImage'
          src={TriggerImage}
        />
        <div
          className='triggerTextContainer'
        >
          <p className='triggerText'>
            Warnung vor möglicher rassistischer Hassrede, verbaler sexualisierter Gewalt gegenüber Frauen und Männern. Sowie diverse Ansichten zu den Themen Umwelt und mentaler Gesundheit.
          </p>
          <p className='triggerText'>
            aufgetischt: verwendet Cookies um die Interaktion mit der Website zu verwalten. 
          </p>
        </div>
      </CookieConsent>
    )
  }
}

export default TriggerWarning;
