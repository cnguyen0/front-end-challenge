import React, { Component } from 'react';
import './profile.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = ({
        data: this.props.data,
        defaultValue: this.props.defaultValue,
        label: ''
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
            <select
              defaultValue={this.state.defaultValue}
              className="profile-form__field profile-form__select"
              onChange={this.props.onChange}
            >
                {this.state.data.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
        </label>
      </div>
    );
  }
}

export default Dropdown;
