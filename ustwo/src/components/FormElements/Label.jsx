import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  label: {
    fontWeight: 'bold'
  }
}

export default class CustomLabel extends Component{

  render() {
    return (
      <label style={styles.label}>
        {this.props.name}
      </label>
    );
  }
}

CustomLabel.propTypes = {
  name: React.PropTypes.string.isRequired
}

