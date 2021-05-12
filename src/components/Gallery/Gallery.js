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
      category: 'all',
      showAll: true,
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
      showAll: event.target.value === 'all' ? true : false,
    })
  }

  render() {
    const { loading, opinions, category, showAll } = this.state;

    return (
      <div className='container'>
        <div className='gallery'>
          <p id='form-title'>aufgetischt:</p>
          <div className='col-md-6 form-categories' ref='category-gallery' onChange={this.onChangeCategoryGallery}>
          <input
              type='radio'
              name='category-gallery'
              value='all'
              id='radio-category-gallery-0'
              className='radioButton'
              checked={showAll}
            />
            <label htmlFor='radio-category-gallery-0'>ALLES</label>
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
              <h1>lädt ...</h1>
            </div>
          }
          {/*  .filter(opinions[key].category.includes(category)) */}
          {Object.keys(opinions).filter(opinion => (category !== 'all') ? (opinions[opinion].category === category) : (opinions !== null)).map((key, id) => 
            <div
              key={key}
              className='card float-left'
              style={{ width: '18rem', marginRight: '1rem' }}
            >
              <div className='card-body'>
                <Plate opinion={opinions[key]} />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Gallery;
