import React from 'react';
import Firebase from 'firebase';
import './Form.css';
import {
  Link,
} from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // opinions: []
    };
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
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
  };

  handleSubmit = event => {
    event.preventDefault();
    let text = this.refs.text.value;
    let category = this.refs.category.value || '-' ;
    let gender = this.refs.gender.value || '-' ;
    let age = this.refs.age.value || '-' ;

    if (text && age && gender && category) {
      Firebase.database()
        .ref('/opinions').push({
          age: age,
          category: category,
          gender: gender,
          text: text,
        })
    }

    this.refs.text.value = '';
    this.refs.category.value = '';
    this.refs.gender.value = '';
    this.refs.age.value = '';
    this.refs.uid.value = '';
  };

  onChangeGender(event) {
    this.refs.gender.value = event.target.value
  }

  onChangeCategory(event) {
    this.refs.category.value = event.target.value
  }

  render() {
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
                    <label htmlFor='radio-category-1'>RASSISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='umwelt'
                      id='radio-category-2'
                      className='radioButton'
                    />
                    <label htmlFor='radio-category-2'>UMWELTSCHUTZ</label>
                    <input
                      type='radio'
                      name='category'
                      value='feminismus'
                      id='radio-category-3'
                      className='radioButton'
                    />
                    <label htmlFor='radio-category-3'>FEMINISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='mental-health'
                      id='radio-category-4'
                      className='radioButton'
                    />
                    <label htmlFor='radio-category-4'>MENTALE GESUNDHEIT</label>
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
                    <div className='col-md-6 gender-buttons' ref='gender' onChange={this.onChangeGender}>
                      <input
                        type='radio'
                        name='gender'
                        value='m'
                        id='radio-m'
                        className='radioButton'
                      />
                      <label htmlFor='radio-m'>M</label>
                      <input
                        type='radio'
                        name='gender'
                        value='f'
                        id='radio-f'
                        className='radioButton'
                      />
                      <label htmlFor='radio-f'>F</label>
                      <input
                        type='radio'
                        name='gender'
                        value='d'
                        id='radio-d'
                        className='radioButton'
                      />
                      <label htmlFor='radio-d'>D</label>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
