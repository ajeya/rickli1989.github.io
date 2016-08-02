import React, { Component } from 'react';
import keycode from 'keycode';
import TextField from 'material-ui/TextField';

export default class CustomText extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      value: this.props.defaultValue || this.props.value || '',
      errorMessage: this.props.validationError || '',
      isValid: true
    };
  }

  setValue(value) {
    this.setState({
      value: value
    })
  }

  componentWillMount() {
    this.setValue(this.props.defaultValue || this.props.value || '');
  }

  handleBlur(event) {
    let result = this.validateEmail(event.currentTarget.value);
    if(result){
      this.setState({
        value: event.currentTarget.value,
        isValid: true
      })
    }else{
      this.setState({
        value: event.currentTarget.value,
        isValid: false
      })
    }
    if (this.props.onBlur) this.props.onBlur(event);
  }

  handleChange(event) {
    this.setState({
      value: event.currentTarget.value,
    });
    if (this.props.onChange) this.props.onChange(event);
  }

  handleKeyDown(event) {
    if (keycode(event) === 'enter') this.setValue(event.currentTarget.value);
    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  render() {
    const {
      defaultValue, 
      onFocus,
      value,
      ...rest } = this.props;
      console.log(this.state);
    return (
      <TextField
        {...rest}
        errorText={this.state.isValid ? null : this.state.errorMessage}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onFocus={onFocus}
        onKeyDown={this.handleKeyDown.bind(this)}
        value={this.state.value}
      />
    );
  }
};

CustomText.propTypes = {
  defaultValue: React.PropTypes.any,
  name: React.PropTypes.string.isRequired,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onKeyDown: React.PropTypes.func,
  value: React.PropTypes.any,
};
