import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemedButton from './ThemedButton';

describe('<ThemedButton />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ThemedButton />);
    const themedButton = getByTestId('ThemedButton');

    expect(themedButton).toBeInTheDocument();
  });
});