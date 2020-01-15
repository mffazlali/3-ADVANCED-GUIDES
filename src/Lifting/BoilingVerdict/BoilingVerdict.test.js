import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoilingVerdict from './BoilingVerdict';

describe('<BoilingVerdict />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<BoilingVerdict />);
    const boilingVerdict = getByTestId('BoilingVerdict');

    expect(boilingVerdict).toBeInTheDocument();
  });
});