import React from 'react';
import Firebase from 'firebase';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opinions: []
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
    let text = this.refs.text.value;
    let gender = this.refs.gender.value || '-' ;
    console.log(this.refs.gender.value)
    let age = this.refs.age.value || '-' ;
    let uid = this.refs.uid.value;

    if (uid && text && age && gender) {
      const { opinions } = this.state;
      const index = opinions.findIndex(data => {
        return data.uid === uid;
      });
      opinions[index].text = text;
      opinions[index].gender = gender;
      opinions[index].age = age;
      this.setState({ opinions });
    } else if (text && age && gender) {
      const uid = new Date().getTime().toString();
      const { opinions } = this.state;
      opinions.push({ uid, text, gender, age });
      this.setState({ opinions });
    }

    this.refs.text.value = '';
    this.refs.gender.value = '';
    this.refs.age.value = '';
    this.refs.uid.value = '';
  };

  removeData = opinion => {
    const { opinions } = this.state;
    const newState = opinions.filter(data => {
      return data.uid !== opinion.uid;
    });
    this.setState({ opinions: newState });
  };

  updateData = opinion => {
    this.refs.uid.value = opinion.uid;
    this.refs.text.value = opinion.text;
    this.refs.gender.value = opinion.gender;
    this.refs.age.value = opinion.age;
  };

  onChangeGender(event) {
    this.refs.gender.value = event.target.value
    // console.log(event.target.value);
  }

  render() {
    const { opinions } = this.state;
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
                      ref='text'
                      maxLength='45'
                      className='form-control'
                      required
                      placeholder='Red nicht lange um den heißen Brei. \n Bring deine Meinung in 30 Zeichen auf den Punkt.'
                    />
                  </div>
                </div>
                <div className='bottom-form'>
                  <div className='form-group bottom-form-row-1'>
                    <div className='col-md-6' ref='gender' onChange={this.onChangeGender}>
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
                        value='d'
                        id='radio-d'
                        className='radioButton'
                      />
                      <label for='radio-d'>D</label>
                    </div>
                    <div className='col-md-6 input-age'>
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
                  </div>
                  <button type='submit' className='btn btn-primary button-submit form-group'>
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
              {opinions.map(opinion => (
                <div
                  key={opinion.uid}
                  className='card float-left'
                  style={{ width: '18rem', marginRight: '1rem' }}
                >
                  <div className='card-body'>
                    <h5 className='card-title'>{opinion.text}</h5>
                    <p className='card-text'>{opinion.gender}</p>
                    <p className='card-text'>{opinion.age}</p>
                    <button
                      onClick={() => this.removeData(opinion)}
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
