import React from 'react';
import Firebase from 'firebase';
import './Form.css';
import Plate from '../Plate/Plate'
import {
  Link,
} from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opinions: []
    };
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
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
    let category = this.refs.category.value || '-' ;
    let gender = this.refs.gender.value || '-' ;
    let age = this.refs.age.value || '-' ;
    let uid = this.refs.uid.value;

    if (uid && text && age && gender && category) {
      console.log('zyessss')

      const { opinions } = this.state;
      const index = opinions.findIndex(data => {
        return data.uid === uid;
      });
      opinions[index].text = text;
      opinions[index].category = category;
      opinions[index].gender = gender;
      opinions[index].age = age;
      this.setState({ opinions });
    } else if (text && age && gender && category) {
      const uid = new Date().getTime().toString();
      const { opinions } = this.state;
      opinions.push({ uid, text, category, gender, age });
      this.setState({ opinions });
    }

    this.refs.text.value = '';
    this.refs.category.value = '';
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
    this.refs.category.value = opinion.category;
    this.refs.gender.value = opinion.gender;
    this.refs.age.value = opinion.age;
  };

  onChangeGender(event) {
    this.refs.gender.value = event.target.value
  }

  onChangeCategory(event) {
    this.refs.category.value = event.target.value
  }

  openAbout = () => {
    console.log("open About")
  }

  render() {
    const { opinions } = this.state;
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <form onSubmit={this.handleSubmit}>
                {/* <p className='title-category'>Wähle dein Thema:</p> */}
                <div className='form-row form-header'>
                  <div className='col-md-6 form-categories' ref='category' onChange={this.onChangeCategory}>
                    <input
                      type='radio'
                      name='category'
                      value='rassismus'
                      id='radio-category-1'
                      className='radioButton'
                    />
                    <label for='radio-category-1'>RASSISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='umwelt'
                      id='radio-category-2'
                      className='radioButton'
                    />
                    <label for='radio-category-2'>UMWELTSCHUTZ</label>
                    <input
                      type='radio'
                      name='category'
                      value='feminismus'
                      id='radio-category-3'
                      className='radioButton'
                    />
                    <label for='radio-category-3'>FEMINISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='mental-health'
                      id='radio-category-4'
                      className='radioButton'
                    />
                    <label for='radio-category-4'>MENTALE GESUNDHEIT</label>
                  </div>
                  <Link
                    className='openAboutButton'
                    to={{pathname: '/about'}}>
                    <p>
                      &#8594; was ist aufgetischt?
                    </p>
                  </Link>
                </div>
                <p id='form-title'>aufgetischt:</p>
                <div className='form-row'>
                  <input type='hidden' ref='uid' />
                  <div className='form-group col-md-6 text-area'>
                    <textarea
                      type='text'
                      ref='text'
                      maxLength='35'
                      className='form-control'
                      required
                      placeholder='Red nicht lange um den heißen Brei.                                                    
                      Bring deine Meinung in 30 Zeichen auf den Punkt.'
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
                    AUFTISCHEN
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
                    <Plate text={opinion.text} />
                    <div className='detail'>
                      <h5 className='card-title'>{opinion.text}</h5>
                      <p className='card-text'>Thema: {opinion.category}</p>
                      <p className='card-text'>Gender: {opinion.gender}</p>
                      <p className='card-text'>Alter: {opinion.age}</p>
                      <button
                        onClick={() => this.removeData(opinion)}
                        className='btn btn-link'
                      >
                        Delete
                      </button>
                    </div>
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
