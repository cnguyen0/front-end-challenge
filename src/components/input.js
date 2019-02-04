import React, { Component } from 'react';
import './profile.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = ({
        value: '',
        label: '',
        type: ''
    })
  }

  componentDidMount() {
    this.setState({
      value: this.props.value,
      label: this.props.label,
      type: this.props.type
    })
  }

  render() {
    return (
      <div className="">
        <label className="profile-form__row">
            {this.state.label + ':'}
            <input
                defaultValue={this.state.value}
                className="profile-form__field" type={this.state.type}
                onKeyUp={this.props.onChange}
            />
        </label>
      </div>
    );
  }
}

export default Input;
