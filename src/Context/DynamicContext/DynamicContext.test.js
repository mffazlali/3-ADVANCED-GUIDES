import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DynamicContext from './DynamicContext';

describe('<DynamicContext />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<DynamicContext />);
    const dynamicContext = getByTestId('DynamicContext');

    expect(dynamicContext).toBeInTheDocument();
  });
});