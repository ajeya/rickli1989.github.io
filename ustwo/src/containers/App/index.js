import React, { Component } from 'react';

import './styles/app.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkMuiTheme from './theme/dark';
import lightMuiTheme from './theme/light';
import classNames from 'classnames';
import { connect } from 'react-redux';

@connect(
  state => {
    return {'app' : state}
  }
)
export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <main>

        </main>
      </MuiThemeProvider>
    );
  }
}

