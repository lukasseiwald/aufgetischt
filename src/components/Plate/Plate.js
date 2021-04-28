import React from 'react';
import './Plate.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { text } = this.props;
    return (
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <ellipse stroke-width="5" stroke="#000" ry="280.99999" rx="280.99999" id="svg_1" cy="300.00001" cx="399.99999" fill="#c146c1"/>
          <ellipse stroke-width="5" stroke="#000" ry="204" rx="204" id="svg_2" cy="300" cx="399" fill="#fff"/>
          <text font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="monospace" font-size="30" id="svg_11" y="307" x="246" fill-opacity="null" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000">{text}</text>
        </g>
      </svg>
    )
  }
}



