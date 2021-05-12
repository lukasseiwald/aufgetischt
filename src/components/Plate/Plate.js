import React from 'react';
import Modal from 'react-modal';
import './Plate.css';
import {
  Link,
} from 'react-router-dom';

class Plate extends React.Component {
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

  nachschlag(event) {
    this.showDetailToggle();
    window.scrollTo(-10,0)
    // console.log(window)
  }

  render() {
    const { showDetail } = this.state;
    const { opinion } = this.props;

    let colors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'];
    let color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div className='container-plate'>
        <button
          className='plate-clickable'
          onClick={this.showDetailToggle}>
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
              {opinion.text}
            </text>
          </svg>
        </button>
        <Modal 
           isOpen={showDetail}
           contentLabel='Teller Details'
        >
          <div className='plate-detail'>
            <div className='plate-detail-1'>
              <h2>aufgetischt:</h2>
              <div className='plate-detail-1-body'>
                <p className='card-text'>Zum Thema "{opinion.category}"</p>
                <p className='card-text'>von {opinion.gender}, {opinion.age} Jahre</p>
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
                  {opinion.text}
                </text>
              </svg>
            </div>
            <button
              onClick={this.showDetailToggle}
              className='closeModalButton'
            >
              <h3
                className='closeIcon' 
              >
                X
              </h3>
            </button>
          </div>
        </Modal>
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
