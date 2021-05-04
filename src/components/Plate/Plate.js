import React from 'react';
import './Plate.css';
class Plate extends React.Component {
  render() {
    const { text } = this.props;
    let colors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'];
    let color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <svg width={800} height={600} xmlns="http://www.w3.org/2000/svg" className="plate">
        <circle
          strokeWidth={5}
          stroke="#000"
          cy={300}
          cx={400}
          fill={color}
          r={281}
        />
        <circle
          strokeWidth={5}
          stroke="#000"
          cy={300}
          cx={399}
          fill="#fff"
          r={204}
        />
        <text
          fontWeight="bold"
          fontFamily="monospace"
          fontSize={30}
          y={307}
          x={246}
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth={0}
          stroke="#000"
        >
          {text}
        </text>
      </svg>
    )
  }
}

export default Plate;
