import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlurExample from './BlurExample';

describe('<BlurExample />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<BlurExample />);
    const blurExample = getByTestId('BlurExample');

    expect(blurExample).toBeInTheDocument();
  });
});