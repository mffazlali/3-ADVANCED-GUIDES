import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import math from './math';

describe('<math />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<math />);
    const math = getByTestId('math');

    expect(math).toBeInTheDocument();
  });
});