import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CrossCutting from './CrossCutting';

describe('<CrossCutting />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<CrossCutting />);
    const crossCutting = getByTestId('CrossCutting');

    expect(crossCutting).toBeInTheDocument();
  });
});