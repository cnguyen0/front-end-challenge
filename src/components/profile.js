import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input.js';
import Dropdown from './dropdown.js';
import './profile.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      profile: {
        name: this.props.profile.name || '',
        phone: this.props.profile.phone || '',
        email: this.props.profile.email || '',
        gender: this.props.profile || ''
      },
      name: this.props.name || '',
      displayInvalidMsg: false,
      displaySuccessMsg: false,
      invalidFields: []
    })

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleGender = this.handleGender.bind(this)
  }

  showFormSuccess() {
    this.setState({
      displaySuccessMsg: true,
      displayInvalidMsg: false
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const emptyFieldsNames = [];
    for (var field in this.state.profile) {
      if (this.state.profile[field] === '') {
        emptyFieldsNames.push(field)
      }
    }

    if (emptyFieldsNames.length) {
      this.setState({
        invalidFields: emptyFieldsNames,
        displayInvalidMsg: true,
        displaySuccessMsg: false
      })
    } else {
      this.showFormSuccess();
    }
  }

  handleName(e) {
    this.setState({profile: {...this.state.profile, name: e.target.value}})
  }

  handleEmail(e) {
    this.setState({profile: {...this.state.profile, email: e.target.value}})
  }

  handlePhone(e) {
    this.setState({profile: {...this.state.profile, phone: e.target.value}})
  }

  handleGender(e) {
    this.setState({profile: {...this.state.profile, gender: e.target.value}})
  }

  render() { 
    return (
      <div className="app">
        <h1>{this.state.name}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Input className='profile-form__row' value={this.state.profile.name} label='Name' type='text' onChange={this.handleName}/>
          <Dropdown label='Gender' data={['Unspecified', 'Male', 'Female']} defaultValue='Unspecified' onChange={this.handleGender}/>
          <Input className='profile-form__row' value={this.state.profile.email} label='Email' type='text' onChange={this.handleEmail}/>
          <Input className='profile-form__row' value={this.state.profile.phone} label='Phone' type='number' onChange={this.handlePhone}/>
          <div className="profile-form__row">
            <input type="submit" value="Save" />
          </div>
          <div className="profile-form__row">
            { this.state.displayInvalidMsg &&
              <span
                value="Invalid form"
                className="profile-form__message">Invalid Form! {capitalizeFirstLetter(`${this.state.invalidFields.join(', ')} can not be blank`)}</span>
            }
            { this.state.displaySuccessMsg &&
              <span
                className="profile-form__message">Form Submitted!</span>
            }
          </div>
        </form>
      </div>
    );
  }
}

Profile.defaultProps = {
  profile: {
    name: '',
    gender: '',
    email: '',
    phone: ''
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }),
  name: PropTypes.string.isRequired
}

export default Profile;
