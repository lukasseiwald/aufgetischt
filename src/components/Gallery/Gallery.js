import React from 'react';
import Firebase from 'firebase';
import './Gallery.css';
import Plate from '../Plate/Plate';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opinions: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    let ref = Firebase.database().ref('/opinions');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      console.log(state);
      this.setState(state);
      
    });

  };

  render() {
    const { opinions } = this.state;

    opinions.map(opinion => {
      console.log(opinion.text)
    })

    return (
      <div className='row'>
        <div className='col-xl-12'>
          {opinions.map(opinion => (
            <div
              className='card float-left'
              style={{ width: '18rem', marginRight: '1rem' }}
            >
              <div className='card-body'>
                <Plate text={opinion.text} />
                <div className='detail'>
                  <h5 className='card-title'>{opinion.text}</h5>
                  <p className='card-text'>Thema: {opinion.category}</p>
                  <p className='card-text'>Gender: {opinion.gender}</p>
                  <p className='card-text'>Alter: {opinion.age}</p>
                  {/* <button
                    onClick={() => this.removeData(opinion)}
                    className='btn btn-link'
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery;
