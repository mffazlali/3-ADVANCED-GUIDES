import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ErrorBoundary />);
    const errorBoundary = getByTestId('ErrorBoundary');

    expect(errorBoundary).toBeInTheDocument();
  });
});