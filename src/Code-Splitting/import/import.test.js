import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import import from './import';

describe('<import />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<import />);
    const import = getByTestId('import');

    expect(import).toBeInTheDocument();
  });
});