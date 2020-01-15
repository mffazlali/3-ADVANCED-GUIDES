import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeContext from './ThemeContext';

describe('<ThemeContext />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ThemeContext />);
    const themeContext = getByTestId('ThemeContext');

    expect(themeContext).toBeInTheDocument();
  });
});