import * as React from 'react';
import './plateSvg.css';
import Text from 'react-svg-text';
import SvgPlate1 from './teller_1.svg'; 
import SvgPlate2 from './teller_2.svg'; 
import SvgPlate3 from './teller_3.svg'; 

function PlateSvg(props) {
  const { text } = props;

  const plates = [
    SvgPlate1,
    SvgPlate2,
    SvgPlate3,
  ]

  var plate = plates[Math.floor(Math.random() * plates.length)];

  return (
    <div
       className='plateBg'
       style={{ backgroundImage: `url(${plate})` }}
    > 
      <p>
        {text}
      </p>
    </div>
  )
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
