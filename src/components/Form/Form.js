import React from 'react';
import Firebase from 'firebase';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      developers: []
    };
    this.onChangeGender = this.onChangeGender.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref('/')
      .set(this.state);
    console.log('DATA SAVED');
  };

  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let opinion = this.refs.opinion.value;
    let gender = this.refs.gender.value;
    console.log(this.refs.gender.value)
    let age = this.refs.age.value;
    let uid = this.refs.uid.value;

    if (uid && opinion && age && gender) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].opinion = opinion;
      developers[devIndex].gender = gender;
      developers[devIndex].age = age;
      this.setState({ developers });
    } else if (opinion && age && gender) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, opinion, gender, age });
      this.setState({ developers });
    }

    this.refs.opinion.value = '';
    this.refs.gender.value = '';
    this.refs.age.value = '';
    this.refs.uid.value = '';
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.opinion.value = developer.opinion;
    this.refs.gender.value = developer.gender;
    this.refs.age.value = developer.age;
  };

  // onChangeGender = developer => {
  //   console.log("test")
  //   console.log(developer.gender)
  //   this.refs.gender.value = developer.gender;
  // }

  onChangeGender(event) {
    this.refs.gender.value = event.target.value
    // console.log(event.target.value);
  }

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <h1></h1>
              <form onSubmit={this.handleSubmit}>
                <p id='form-title'>aufgetischt:</p>
                <div className='form-row'>
                  <input type='hidden' ref='uid' />
                  {/* <div className='form-group col-md-6'>
                    <label>WÄHLE DEIN THEMA:</label>
                    
                  </div> */}
                  <div className='form-group col-md-6 text-area'>
                    <textarea
                      type='text'
                      ref='opinion'
                      maxLength='30'
                      className='form-control'
                      placeholder='Red nicht lange um den heißen Brei. Bring deine Meinung in 30 Zeichen auf den Punkt.'
                    />
                  </div>
                </div>
                <div className="bottom-form">
                  <div className='form-group col-md-6' ref='gender' onChange={this.onChangeGender}>
                    <input
                      type='radio'
                      name='gender'
                      value='m'
                      id='radio-m'
                      className='radioButton'
                    />
                    <label for='radio-m'>M</label>
                    <input
                      type='radio'
                      name='gender'
                      value='f'
                      id='radio-f'
                      className='radioButton'
                    />
                    <label for='radio-f'>F</label>
                    <input
                      type='radio'
                      name='gender'
                      value='o'
                      id='radio-o'
                      className='radioButton'
                    />
                    <label for='radio-o'>O</label>
                  </div>
                  <div className='form-group col-md-6 input-age'>
                    <label>AGE:</label>
                    <input
                      type='number'
                      ref='age'
                      className='form-control'
                      placeholder='...'
                      min='16'
                      max='99'
                    />
                  </div>
                  <button type='submit' className='btn btn-primary button-submit'>
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <h1>
                Teller:
              </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className='card float-left'
                  style={{ width: '18rem', marginRight: '1rem' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title'>{developer.opinion}</h5>
                    <p className='card-text'>{developer.gender}</p>
                    <p className='card-text'>{developer.age}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className='btn btn-link'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
