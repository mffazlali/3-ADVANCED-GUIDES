import React from 'react';
import PropTypes from 'prop-types';
import styles from './WithoutContext.module.css';

const WithoutContext = () => {
  return (
    <div className={styles.WithoutContext} data-testid="WithoutContext">
      <Page />
    </div>
  )
};

const Page = () => {
  const userLink = (
    <Link user='ali' size='2'>
      <Avatar user='ali' size='2' />
    </Link>
  )
  return (
    <div className={styles.WithoutContext} data-testid="WithoutContext">
      <PageLayout userLink={userLink} />
    </div>
  )
};

const PageLayout = (props) => (
  <div>
    <h3>PageLayout</h3>
    {props.userLink}
  </div>
);

const NavigationBar = (props) => (
  <div>
    <h3>NavigationBar</h3>
    <Link user={props.user} size={props.size}>
      <Avatar user={props.user} size={props.size} />
    </Link>
  </div>
);

const Link = (props) => (
  <div>
    <h3>{props.children}</h3>
  </div>
);

const Avatar = (props) => (
  <div>
    <h3>Avatar</h3>
    <b>{props.size + ' ' + props.user}</b>
  </div>
);

export default WithoutContext;
