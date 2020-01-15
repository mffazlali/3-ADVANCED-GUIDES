import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Test from './Test';

describe('<Test />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Test />);
    const test = getByTestId('Test');

    expect(test).toBeInTheDocument();
  });
});