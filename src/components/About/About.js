import React from 'react';
import './About.css';
import {
  Link,
} from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';
import image01 from '../../assets/about/aufgetischt_about_01.gif';
import image02 from '../../assets/about/aufgetischt_about_02.png';
import SaltPepperSvg from '../../assets/about/salz_pfeffer';
class About extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='about-container'>
          <div className='link-container'>
            <Link
              className='about-openFormButton'
              to={{pathname: '/'}}>
              <p className='aboutButtonTextMobile'>
                → Tisch uns Deine Meinung auf:
              </p>
            </Link>
          </div>
          <div className='about-content'>
            <AufgetischtLogo />
            <div className='text-image-container'>
              <p className='about-description'>
                Ist eine Intervention und ein Werkzeug zur Darstellung aktueller Meinungsbilder am Tisch.
              </p>
              <div className='aboutImg-container'>
                <img src={image01} className='aboutImg' />
              </div>
            </div>
            <div className='text-image-container'>
              <div className='aboutImg-container'>
                <img src={image02} className='aboutImg aboutImg-2' />
              </div>
              <p className='about-description description-2'>
                Anonym und niederschwellig werden verschiedene Meinungen abseits des Tischgesprächs abgebildet und eine Reaktion darauf abgefragt. 
              </p>
            </div>
            <div className='text-image-container'>
              <div className='about-sidenote-container'>
                <div className='about-sidenote-content'>
                  <AufgetischtLogo />
                  <p className='about-description-small'>
                    war zu Beginn als ein Upcyclingprojekt angedacht und hat sich zu einer Kampagne mit einem Werkzeug für die visualisierung vielfältiger Meinungen am Tisch entwickelt.
                  </p>
                </div>
              </div>
              <p className='about-description description-2'>
                Es soll gezeigt werden das verschiedene Positionen am Tisch sitzen. Ziel ist es den inneren Monolog eine neue Richtung zu geben.
              </p>
            </div>
            <div className='text-image-container'>
              <div className='about-filler' />
              <p className='about-description description-2 description-3'>
                Wir wollen beobachten welche Grauzonen dabei entstehen. Gibt es mehr als Schwarz und Weiss?
              </p>
            </div>
            <div className='aboutImg-container aboutImg-container-2'>
              <img src={image02} className='aboutImg aboutImg-3' />
            </div>
            <div className='about-sidenote-container-2'>
              <div className='about-sidenote-content'>
                <AufgetischtLogo />
                <p className='about-description-small'>
                  war zu Beginn als ein Upcyclingprojekt angedacht und hat sich zu einer Kampagne mit einem Werkzeug für die visualisierung vielfältiger Meinungen am Tisch entwickelt.
                </p>
              </div>
            </div>
            <div className='text-image-container'>
              <div className='about-filler' />
              <div className='form-categories about-categories'>
                <input
                  type='radio'
                  name='category-gallery'
                  className='radioButton category-radio'
                />
                <label>UMWELTSCHUTZ</label>
                <input
                  type='radio'
                  name='category-gallery'
                  className='radioButton category-radio'
                />
                <label>FEMINISMUS</label>
                <input
                  type='radio'
                  name='category-gallery'
                  className='radioButton category-radio'
                />
                <label>RASSISMUS</label>
                <input
                  type='radio'
                  name='category-gallery'
                  className='radioButton category-radio'
                />
                <label>MENTALE GESUNDHEIT</label>
              </div>
            </div>
            <p className='full-length-description'>
              Die zur Auswahl stehenden Themen sind entweder noch nicht vom Tisch oder es gibt dafür nicht ausreichend Platz. Die Fronten sind verhärtet. 
            </p>
            <p className='full-length-description-2'>
              Also tisch uns Deine Meinung auf und vergiss nicht: Dein Tellerrand ist nicht das Ende, es gibt den ganzen Tisch!
            </p>
            <div className='text-image-container'>
              <Link
                className='button-submit about-button'
                to={{pathname: '/'}}>
                <p className='aboutButtonTextMobile'>
                  Ich will auftischen
                </p>
              </Link>
            </div>
            <div className='beilage-container about-beilage'>
              <SaltPepperSvg />
              <p>
                Wir möchten kein Salz in alte Wunden streuen, wissen allerdings das wir uns auf einen schmalen Grad befinden. Deshalb möchten wir uns entschuldigen, sollte Dir etwas nicht bekommen. Wir denken aber, dass es wichtig ist im Gespräch zu bleiben und sich mit Meinungen zu befassen welche sich nicht mit unseren eigenen Ansichten decken.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
