import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OuterClickExample from './OuterClickExample';

describe('<OuterClickExample />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<OuterClickExample />);
    const outerClickExample = getByTestId('OuterClickExample');

    expect(outerClickExample).toBeInTheDocument();
  });
});