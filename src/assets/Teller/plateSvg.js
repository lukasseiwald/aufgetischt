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
    const { text } = this.props;
    const { height } = this.state;
    console.log(height);

    const plates = [
      SvgPlate1,
      SvgPlate2,
      SvgPlate3,
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
  
    let plate = plates[Math.floor(Math.random() * plates.length)];
    let color = colors[Math.floor(Math.random() * colors.length)];
    let font = fonts[Math.floor(Math.random() * fonts.length)];

    return (
      <div
         className='plateBg'
         ref={ (divElement) => { this.divElement = divElement } }
         style={{ backgroundImage: `url(${plate})` }}
      > 
        <div style={{ color: color, fontFamily: font, width: `${height/(1.2)}px`, fontSize: (height > 260) ? '0.9em' : '0.5em', height: `${height-50}px`, borderRadius: '20em', }}>
          {text}
        </div>
      </div>
    )
  }
}

// 
// fontWeight="bold"
//         fontFamily="monospace"
//         fontSize={30}
//         y="50%"
//         x="50%"
//         fillOpacity="null"
//         strokeOpacity="null"
//         strokeWidth={0}
//         stroke="#000"
//         textAnchor="middle"
//         verticalAnchor="middle"
//         scaleToFit={true}
//         style={{ width: '200px', textWrap: '1em' }}

export default PlateSvg
