import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import validators from './validators';

describe('<validators />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<validators />);
    const validators = getByTestId('validators');

    expect(validators).toBeInTheDocument();
  });
});