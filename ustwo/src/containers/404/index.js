import React, { Component } from 'react';
import { styles } from './styles.scss';

export class PageNotFound extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <section className={`${styles}`}>
        <h1>Sorry, the page you requested does not exist</h1>
      </section>
    );
  }
}