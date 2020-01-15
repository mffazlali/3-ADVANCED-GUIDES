import React, { Component } from 'react';
import FancyButton from './FancyButton/FancyButton';

class HigherOrderComponents extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    console.log('HigherOrderComponents',this.ref);
    return (
      <div>
        <FancyButton ref={this.ref}>Click Me</FancyButton>
      </div>
    );
  }
}

export default HigherOrderComponents;