import React, { Component } from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';
import Text from './Text';

export default class CustomRadioGroup extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      value: null
    };
  }  

  handleValueChange(event, value) {
    this.setState({
      value: value
    });
    if (this.props.onChange) this.props.onChange(event, value);
  }

  render() {
    return (
      <section>
        <RadioButtonGroup
          {...this.props}
          onChange={this.handleValueChange.bind(this)}
        >
          {this.props.children}
        </RadioButtonGroup>
        {
          (this.state.value !== 'birthday' && this.state.value !== 'wedding' && this.state.value !== 'corporate')  ? 
          (
            <Text
              name="Other"
              autoComplete="off"
              fullWidth={true}
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
