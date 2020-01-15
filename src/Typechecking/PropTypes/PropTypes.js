import React from 'react';
import styles from './PropTypes.module.css';
import Validators from './validators/validators';

const myProps = { props: { name: 'ali', age: 22 } }



const PropTypes = () => (
  <div className={styles.PropTypes} data-testid="PropTypes">
    <Validators><h1>Validators</h1></Validators>
  </div>
);

export default PropTypes;
