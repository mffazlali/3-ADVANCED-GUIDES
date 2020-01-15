import React from 'react';
import styles from './FancyButton.module.css';

export const FancyButton = React.forwardRef((props, ref) => {
  console.log('ref', props, ref);
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  )
});
