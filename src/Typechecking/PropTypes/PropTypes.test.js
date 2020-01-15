import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PropTypes from './PropTypes';

describe('<PropTypes />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<PropTypes />);
    const propTypes = getByTestId('PropTypes');

    expect(propTypes).toBeInTheDocument();
  });
});