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
    };
  }

  componentDidMount() {
    const height = this.divElement.clientHeight;
    this.setState({ height });
  }

  render() {
    const { text, plate, color, font } = this.props;
    const { height } = this.state;
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
      default:
        selectedPlate = SvgPlate1;
        break;
    }

    return (
      <div
         className={`plateBg ${(height > 300) ? "big-plate-height" : ""}`}
         ref={ (divElement) => { this.divElement = divElement } }
         style={{ backgroundImage: `url(${selectedPlate})`, maxWidth: `${height}px`, textAlign: 'center' }}
      > 
        <div style={{ color: color, fontFamily: font, fontSize: '0.6em', textAlign: 'center',}}>
          {text}
        </div>
      </div>
    )
  }
}

export default PlateSvg
