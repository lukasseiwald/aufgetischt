import React from 'react';
import ReactModal from 'react-modal';
import './Plate.css';
import PlateSvg from '../../assets/Teller/plateSvg';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';
import {
  Link,
} from 'react-router-dom';

class Plate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
      plate: 'plate1',
      color: '#FF10F0',
      font: 'Komu-A',
    };

    this.showDetailToggle = this.showDetailToggle.bind(this);
    this.nachschlag = this.nachschlag.bind(this);
  }

  componentDidMount() {
    this.getPlateProps();
  }

  getPlateProps() {
    const plates = [
      'plate1',
      'plate2',
      'plate3',
    ];
  
    const colors = [
      '#FF10F0',
      '#00FF00',
      '#FF6600'
    ];
  
    const fonts = [
      'EskapadeFraktur-RegularItalic',
      'VampiroOne-Regular',
      'FakirDisplay-Regular',
      'Komu-A',
    ]
  
    const plate = plates[Math.floor(Math.random() * plates.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const font = fonts[Math.floor(Math.random() * fonts.length)];

    this.setState({
      plate,
      color,
      font
    })
  }

  showDetailToggle(event) {
    const { showDetail } = this.state;

    if(!this.state.showDetail){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    this.setState({
      showDetail: !showDetail,
    })
  }

  nachschlag(e) {
    e.preventDefault();
    this.showDetailToggle();
    setTimeout(function(){ 
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, 100);
  }

  render() {
    const { showDetail, plate, color, font } = this.state;
    const { opinion } = this.props;

    let thema = '';
    let gender = '';
    let age = '';

    switch(opinion.category){
      case 'feminismus': 
        thema = 'zum Thema "Feminismus"';
        break;
      case 'rassismus':
        thema = 'zum Thema "Rassismus"';
        break;
      case 'umwelt':
        thema = 'zum Thema "Umweltschutz"';
        break;
      case 'mental-health':
        thema = 'zum Thema "Mentale Gesundheit"';
        break;
      default:
        break;
    } 

    switch(opinion.gender){
      case 'm': 
        gender = 'm??nnlich';
        break;
      case 'f':
        gender = 'weiblich';
        break;
      case 'd':
        gender = 'diversem gender';
        break;
      case '-':
        gender = 'unbekanntem Gender';
        break;
      default:
        gender = 'unbekanntem Gender';
        break;
    }

    switch(opinion.age) {
      case '-':
        age = ', unbekanntem Alter'
        break;
      default:
        age = `, ${opinion.age} Jahre alt`;
        break;
    }

    return (
      <div className='container-plate'>
        <button
          className='plate-clickable'
          onClick={this.showDetailToggle}>
          <PlateSvg text={opinion.text} plate={plate} color={color} font={font} />
        </button>
        <ReactModal 
          isOpen={showDetail}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          onRequestClose={() => {
            this.showDetailToggle();
          }}
        >
          <div className='plate-detail'>
            <div className='plate-detail-1'>
              <AufgetischtLogo className='aufgetischt-logo-detail' />
              <div className='plate-detail-1-body'>
                <p className='card-text'>{thema}</p>
                <p className='card-text'>von {gender}{age}.</p>
              </div>
              <Link
                to='/'
                className='nachschlag'
                onClick={this.nachschlag}
              >
                <p>NACHSCHLAG</p>
              </Link>
            </div>
            <div className='plate-detail-2'>
              <PlateSvg text={opinion.text} plate={plate} color={color} font={font} isPreview />
              <button
                onClick={this.showDetailToggle}
                className='closeModalButton'
              >
                <h3
                  className='closeIcon' 
                >
                  ???
                </h3>
              </button>
            </div>
          </div>
        </ReactModal>
        {/* {showDetail && 
          <div className='plate-detail'>
            <div className='plate-detail-body'>
              <h5 className='card-title'>{opinion.text}</h5>
              <p className='card-text'>Thema: {opinion.category}</p>
              <p className='card-text'>Gender: {opinion.gender}</p>
              <p className='card-text'>Alter: {opinion.age}</p>
            </div>
            <button onClick={this.showDetailToggle}>Close</button>
          </div>
        } */}
      </div>
    )
  }
}

{/* <div className='detail'>
  <h5 className='card-title'>{opinions[key].text}</h5>
  <p className='card-text'>Thema: {opinions[key].category}</p>
  <p className='card-text'>Gender: {opinions[key].gender}</p>
  <p className='card-text'>Alter: {opinions[key].age}</p>
</div> */}

export default Plate;
