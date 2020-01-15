import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import logProps from './logProps';

describe('<logProps />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<logProps />);
    const logProps = getByTestId('logProps');

    expect(logProps).toBeInTheDocument();
  });
});