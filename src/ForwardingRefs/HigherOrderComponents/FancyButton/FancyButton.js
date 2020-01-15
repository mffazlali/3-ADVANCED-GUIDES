import React, { Component } from 'react';
import logProps from '../logProps/logProps';
class FancyButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="FancyButton">
          {this.props.children}
        </button>
      </div>
    );
  }

}

export default logProps(FancyButton);
