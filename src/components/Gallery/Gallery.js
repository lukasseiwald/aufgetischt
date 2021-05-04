import React from 'react';
import Firebase from 'firebase';
import './Gallery.css';
import Plate from '../Plate/Plate';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      opinions: [],
      category: 'all'
    };

    this.onChangeCategoryGallery = this.onChangeCategoryGallery.bind(this);
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

  onChangeCategoryGallery(event) {
    const { category } = this.state;
    this.setState({
      category: event.target.value,
    })
  }

  render() {
    const { loading, opinions, category } = this.state;

    return (
      <div className='container'>
        <div className='gallery'>
          <div className='col-md-6 form-categories' ref='category-gallery' onChange={this.onChangeCategoryGallery}>
            <input
              type='radio'
              name='category-gallery'
              value='rassismus'
              id='radio-category-gallery-1'
              className='radioButton'
            />
            <label htmlFor='radio-category-gallery-1'>RASSISMUS</label>
            <input
              type='radio'
              name='category-gallery'
              value='umwelt'
              id='radio-category-gallery-2'
              className='radioButton'
            />
            <label htmlFor='radio-category-gallery-2'>UMWELTSCHUTZ</label>
            <input
              type='radio'
              name='category-gallery'
              value='feminismus'
              id='radio-category-gallery-3'
              className='radioButton'
            />
            <label htmlFor='radio-category-gallery-3'>FEMINISMUS</label>
            <input
              type='radio'
              name='category-gallery'
              value='mental-health'
              id='radio-category-gallery-4'
              className='radioButton'
            />
            <label htmlFor='radio-category-gallery-4'>MENTALE GESUNDHEIT</label>
          </div>
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
      </div>
    )
  }
}

export default Gallery;
