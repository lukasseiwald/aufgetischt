import React from 'react';
import Firebase from 'firebase';
import './Gallery.css';
import Plate from '../Plate/Plate';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';
import BeilageSvg from '../../assets/aufgetischt_beilage_mit_text';
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      opinions: [],
      storedPlates: [],
      category: 'all',
      showAll: true,
    };

    this.onChangeCategoryGallery = this.onChangeCategoryGallery.bind(this);
  }

  componentDidMount() {
    this.getStoredPlates();
  }

  async getStoredPlates() {
    this.setState({ loading: true });
    let storedPlates = [];
    var storage = Firebase.storage();
    var pathReference = storage.ref('plates/');

    pathReference.listAll()
    .then((res) => {
      res.items.forEach(async (itemRef) => {
        await itemRef.getDownloadURL()
        .then((url) => {
          let plateObj = {};          
          if(url.includes('umwelt'))
            plateObj = {
              category: 'umwelt',
              url: url,
              preStored: true,
            }
          else if(url.includes('rassismus'))
          plateObj = {
            category: 'rassismus',
            url: url,
            preStored: true,
          }
          else if(url.includes('mental'))
          plateObj = {
            category: 'mental-health',
            url: url,
            preStored: true,
          }
          else if(url.includes('feminism'))
          plateObj = {
            category: 'feminismus',
            url: url,
            preStored: true,
          }
          storedPlates[url] = (plateObj);
        })

        this.setState({
          storedPlates: storedPlates,
        })

        this.getUserData();
      })
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  }

  async getUserData() {
    this.setState({ loading: true });
  
    let ref = Firebase.database().ref('/opinions');
    ref.on('value', snapshot => {
      const state = snapshot.val();

      let mergedPlates = {
        ...this.state.storedPlates,
        ...state
      }

      this.setState({
        loading: false,
        opinions: mergedPlates,
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
    const { loading, opinions, storedPlates, category, showAll } = this.state;
    return (
      <div className='container'>
        <div className='gallery'>
          <AufgetischtLogo />
          <div className='col-md-6 form-categories gallery-categories' ref='category-gallery' onChange={this.onChangeCategoryGallery}>
          <input
              type='radio'
              name='category-gallery'
              value='all'
              id='radio-category-gallery-0'
              className='radioButton category-radio'
              checked={showAll}
            />
            <label htmlFor='radio-category-gallery-0'>ALLES</label>
            <input
              type='radio'
              name='category-gallery'
              value='rassismus'
              id='radio-category-gallery-1'
              className='radioButton category-radio'
            />
            <label htmlFor='radio-category-gallery-1'>RASSISMUS</label>
            <input
              type='radio'
              name='category-gallery'
              value='umwelt'
              id='radio-category-gallery-2'
              className='radioButton category-radio'
            />
            <label htmlFor='radio-category-gallery-2'>UMWELTSCHUTZ</label>
            <input
              type='radio'
              name='category-gallery'
              value='feminismus'
              id='radio-category-gallery-3'
              className='radioButton category-radio'
            />
            <label htmlFor='radio-category-gallery-3'>FEMINISMUS</label>
            <input
              type='radio'
              name='category-gallery'
              value='mental-health'
              id='radio-category-gallery-4'
              className='radioButton category-radio'
            />
            <label htmlFor='radio-category-gallery-4'>MENTALE GESUNDHEIT</label>
          </div>
          {loading  &&
            <div>
              <h1>lädt ...</h1>
            </div>
          }
          <div className='gallery-wall'>
            {Object.keys(opinions).filter(opinion => (category !== 'all') ? (opinions[opinion].category === category) : (opinions !== null)).map((key, id) => 
              <div
                key={key}
                className={`card float-left ${(Math.floor(Math.random() * 3) === 2) ? "grid-expand" : "grid-mini"}`}
                style={{ width: '18rem', marginRight: '1rem'}}
              >
                <div className='card-body'>
                  { opinions[key].preStored &&
                    <img className='storedPlate' src={opinions[key].url} />
                  }
                  { !opinions[key].preStored &&
                    <Plate opinion={opinions[key]} />
                  }
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='beilage-container'>
          <BeilageSvg />
          <p>
            Die hier aufgetischten Meinungen sind nicht unsere eigenen und wurden von den Besuchern der Website erstellt. Wir behalten uns vor Äußerungen zu entfernen.
          </p>
        </div>
      </div>
    )
  }
}

export default Gallery;
