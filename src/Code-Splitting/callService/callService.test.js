import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import callService from './callService';

describe('<callService />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<callService />);
    const callService = getByTestId('callService');

    expect(callService).toBeInTheDocument();
  });
});