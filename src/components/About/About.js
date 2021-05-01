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
          <p id='form-title'>aufgetischt:</p>  
        </div>
      </React.Fragment>
    );
  }
}

export default About;
