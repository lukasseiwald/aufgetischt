import * as React from 'react';
import './plateSvg.css';
import SvgPlate1 from './teller_1.svg'; 
import SvgPlate2 from './teller_2.svg'; 
import SvgPlate3 from './teller_3.svg'; 

class PlateSvg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0,
      fontSize: '0.7em',
    };
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;

    const fontSize = this.divElement.parentNode.parentNode.parentNode.parentNode.className.includes('mini') ? '0.6em' : '1em';
    this.setState({
      height,
      width: `${height-20}px`,
      fontSize: fontSize,
    });
  }

  render() {
    const { text, plate, color, font, url } = this.props;
    const { height, width, fontSize } = this.state;
    let selectedPlate;
    
    switch(plate) {
      case 'plate1':
        selectedPlate = SvgPlate1;
        break;
      case 'plate3':
        selectedPlate = SvgPlate2;
        break;
      case 'plate3':
        selectedPlate = SvgPlate3;
        break;
      case 'preStored':
        selectedPlate = url;
        break;
      default:
        selectedPlate = SvgPlate1;
        break;
    }

    // console.log(isExpanded)
    // console.log(text)

    return (
      <div
         className='plateBg'
         ref={ (divElement) => { this.divElement = divElement } }
         style={{ backgroundImage: `url(${selectedPlate})`, textAlign: 'center', maxWidth: '100%' }}
      > 
        { (plate !== 'preStored') && 
          <div style={{ color: color, fontFamily: font, fontSize: fontSize, textAlign: 'center', width: width}}>
            {text}
          </div>
        }
      </div>
    )
  }
}

export default PlateSvg
