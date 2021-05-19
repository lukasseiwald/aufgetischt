import React from 'react';
import Modal from 'react-modal';
import './Plate.css';
import PlateSvg from '../../assets/Teller/plateSvg';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js';
import {
  Link,
} from 'react-router-dom';

class PlateImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };

    this.showDetailToggle = this.showDetailToggle.bind(this);
    this.nachschlag = this.nachschlag.bind(this);
  }

  showDetailToggle(event) {
    const { showDetail } = this.state;

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
    const { showDetail } = this.state;
    const { url, category } = this.props;

    let thema = '';

    switch(category){
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

    return (
      <div className='container-plate'>
        <button
          className='plate-clickable'
          onClick={this.showDetailToggle}>
          <img className='storedPlate' src={url} />
        </button>
        <Modal 
           isOpen={showDetail}
           contentLabel='Teller Details'
        >
          <div className='plate-detail'>
            <div className='plate-detail-1'>
              <AufgetischtLogo className='aufgetischt-logo-detail' />
              <div className='plate-detail-1-body'>
                <p className='card-text'>{thema}</p>
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
              <PlateSvg plate='preStored' url={url} />
              {/* <img className='storedPlate' src={url} /> */}
              <button
                onClick={this.showDetailToggle}
                className='closeModalButton'
              >
                <h3
                  className='closeIcon' 
                >
                  ✕
                </h3>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default PlateImg;
