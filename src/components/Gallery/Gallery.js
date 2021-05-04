import React from 'react';
import Firebase from 'firebase';
import './Gallery.css';
import Plate from '../Plate/Plate';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      opinions: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    this.setState({ loading: true });
  
    let ref = Firebase.database().ref('/opinions');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState({
        loading: false,
        opinions: state,
      });
    });

  };

  render() {
    const { loading, opinions } = this.state;

    console.log('test')
    console.log(opinions)

    // opinions.map(opinion => {
    //   console.log('hi');
    //   console.log(opinion.text);
    // })

    // Object.keys(opinions).map(function(key, index) {
    //   console.log(opinions[key]);
    // });

    return (
      <div className='row'>
        {loading  &&
          <div>
            <h1>loading...</h1>
          </div>
        }
        {Object.keys(opinions).map((key, id) => 
          <div
            key={key}
            className='card float-left'
            style={{ width: '18rem', marginRight: '1rem' }}
          >
            <div className='card-body'>
              <Plate text={opinions[key].text} />
              <div className='detail'>
                <h5 className='card-title'>{opinions[key].text}</h5>
                <p className='card-text'>Thema: {opinions[key].category}</p>
                <p className='card-text'>Gender: {opinions[key].gender}</p>
                <p className='card-text'>Alter: {opinions[key].age}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Gallery;
