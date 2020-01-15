import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Conversion from './Conversion';

describe('<Conversion />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Conversion />);
    const conversion = getByTestId('Conversion');

    expect(conversion).toBeInTheDocument();
  });
});