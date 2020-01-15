import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WithoutContext from './WithoutContext';

describe('<WithoutContext />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<WithoutContext />);
    const withoutContext = getByTestId('WithoutContext');

    expect(withoutContext).toBeInTheDocument();
  });
});