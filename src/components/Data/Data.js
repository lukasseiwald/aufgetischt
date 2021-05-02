import React from 'react';
import './Data.css';
import {
  Link,
} from 'react-router-dom';

class Data extends React.Component {

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
              Datenschutz
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Data;
