import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FancyButton from './FancyButton';

describe('<FancyButton />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<FancyButton />);
    const fancyButton = getByTestId('FancyButton');

    expect(fancyButton).toBeInTheDocument();
  });
});