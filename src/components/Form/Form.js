import React from 'react';
import Firebase from 'firebase';
import { isMobile } from 'react-device-detect';
import './Form.css';
import AufgetischtLogo from '../../assets/aufgetischt_logo.js'
import OpenAboutButton from '../OpenAboutButton/OpenAboutButton';
// import plateSvg from '../../assets/Teller/teller_1.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeAgeInput: false,
      zeichen: 40
    };
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.wordCount = this.wordCount.bind(this);
    this.titleRef = React.createRef();
  }

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
          preStored: false,
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

  wordCount() {
    this.setState({
      zeichen: 40 - this.refs.text.value.length,
    })
  }

  render() {
    const { activeAgeInput, zeichen } = this.state;

    return (
      <React.Fragment>
        <div className='container' ref={this.titleRef}>
          <div className='row'>
            <div className='col-xl-12'>
              <form onSubmit={this.handleSubmit}>
              <div className='instructions-container'>
                <p className='instructions-categories'>Wähle eines der folgenden Themen und tisch uns Deine Meinung auf:</p>
                <OpenAboutButton />
              </div>
                <div className='form-row form-header'>
                  <div className='col-md-6 form-categories' ref='category' onChange={this.onChangeCategory}>
                    <input
                      type='radio'
                      name='category'
                      value='umwelt'
                      id='radio-category-2'
                      className='radioButton category-radio'
                    />
                    <label htmlFor='radio-category-2'>UMWELTSCHUTZ</label>
                    <input
                      type='radio'
                      name='category'
                      value='feminismus'
                      id='radio-category-3'
                      className='radioButton category-radio'
                    />
                    <label htmlFor='radio-category-3'>FEMINISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='rassismus'
                      id='radio-category-1'
                      className='radioButton category-radio'
                    />
                    <label htmlFor='radio-category-1'>RASSISMUS</label>
                    <input
                      type='radio'
                      name='category'
                      value='mental-health'
                      id='radio-category-4'
                      className='radioButton category-radio'
                    />
                    <label htmlFor='radio-category-4'>MENTALE GESUNDHEIT</label>
                  </div>
                </div>
                <AufgetischtLogo />
                <div className='form-row'>
                  <input type='hidden' ref='uid' />
                  <div className='form-group col-md-6 text-area'>
                    <textarea
                      type='text'
                      ref='text'
                      maxLength='40'
                      className='form-control'
                      required
                      onChange={this.wordCount}
                      placeholder='Red nicht lange um den heißen Brei.                                                    
                      Bring deine Meinung in 40 Zeichen auf den Punkt.'
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
                      <label htmlFor='radio-f'>W</label>
                      <input
                        type='radio'
                        name='gender'
                        value='d'
                        id='radio-d'
                        className='radioButton'
                      />
                      <label htmlFor='radio-d'>D</label>
                    </div>
                    <div
                      className='col-md-6 input-age active'
                      style={{
                        borderColor: activeAgeInput ? '#FF10F0' : '#000',
                        color: activeAgeInput ? '#FF10F0' : '#000',
                      }}
                    >
                      <label>ALTER:</label>
                      <input
                        type='number'
                        ref='age'
                        className='form-control'
                        placeholder='XX'
                        onChange={() => {
                          if (this.refs.age.value !== '') {
                            this.setState({
                              activeAgeInput: true
                            })
                          } else {
                            this.setState({
                              activeAgeInput: false
                            })
                          }
                        }}
                        min='16'
                        max='99'
                      />
                    </div>
                    <div
                      className='col-md-6 zeichen-anzeige'
                    >
                      { !isMobile &&
                        <label>
                          {zeichen} Zeichen
                        </label>
                      }
                      { isMobile &&
                        <label>
                          {zeichen}/40
                        </label>
                      }
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
