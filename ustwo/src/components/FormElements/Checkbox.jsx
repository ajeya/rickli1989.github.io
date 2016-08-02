import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

export default class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      value: (typeof defaultChecked !== 'undefined') ? defaultChecked : false
    };
  }

  handleChange(event, value) {
    this.setState({
      value: value
    });
    if (this.props.onChange) this.props.onChange(event, value);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.reset != this.props.reset && nextProps.reset){
      this.setState({
        value: null
      })
    }
  }

  render() {
    const {
      reset,
      ...rest } = this.props;
    return (
      <Checkbox
        {...rest}
        checked={this.state.value}
        onCheck={this.handleChange.bind(this)}
      />
    );
  }
}

export default CustomCheckbox;
