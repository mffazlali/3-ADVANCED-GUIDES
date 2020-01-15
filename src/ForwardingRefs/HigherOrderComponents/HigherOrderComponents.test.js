import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HigherOrderComponents from './HigherOrderComponents';

describe('<HigherOrderComponents />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<HigherOrderComponents />);
    const higherOrderComponents = getByTestId('HigherOrderComponents');

    expect(higherOrderComponents).toBeInTheDocument();
  });
});