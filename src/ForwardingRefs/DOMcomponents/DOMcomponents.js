import React, { Component } from 'react';
import {FancyButton} from './FancyButton/FancyButton';
import styles from './DOMcomponents.module.css';

class DOMcomponents extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <div>
        <h1>DOMcomponents</h1>
        <FancyButton ref={this.ref}>Click me!</FancyButton>
      </div>
    );
  }
}

export default DOMcomponents;