import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DOMcomponents from './DOMcomponents';

describe('<DOMcomponents />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<DOMcomponents />);
    const doMcomponents = getByTestId('DOMcomponents');

    expect(doMcomponents).toBeInTheDocument();
  });
});