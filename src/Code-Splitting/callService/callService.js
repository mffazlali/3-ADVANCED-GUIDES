import React from 'react';
import axios from 'axios';

import styles from './callService.module.css';

const callService = () => {
  const fetch = axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log('res', res);
  }).catch(err => {
    console.log('err', err);
  })
  return (
    <div className={styles.callService} data-testid="callService">
      callService Component
    </div>
  )
};

export default callService;
