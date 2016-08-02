import React, { Component } from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Text from './Text';

export default class CustomRadioGroup extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      value: null,
      otherValue: ''
    };
  }  

  handleValueChange(event, value) {
    if(value !== 'other' && value !== 'birthday' && value !== 'wedding' && value !== 'corporate'){
      this.setState({
        otherValue: value
      });
    }else{
      this.setState({
        value: value
      });
    }
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
    console.log(this.state.value);
    const {
      reset,
      ...rest } = this.props;
    return (
      <section>
        <RadioButtonGroup
          {...rest}
          valueSelected={this.state.value}
          onChange={this.handleValueChange.bind(this)}
        >
          {this.props.children}
        </RadioButtonGroup>
        {
          (this.state.value !== 'birthday' && this.state.value !== 'wedding' && this.state.value !== 'corporate' && this.state.value !== null)  ? 
          (
            <Text
              name="Other"
              autoComplete="off"
              fullWidth={true}
              reset={this.props.reset}
              onChange={this.handleValueChange.bind(this)}
            />
          ) : null
        }
        
      </section>
    );
  }
};

CustomRadioGroup.propTypes = {
  children: React.PropTypes.node,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
}
