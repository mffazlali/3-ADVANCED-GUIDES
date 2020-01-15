import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpdatingContext from './UpdatingContext';

describe('<UpdatingContext />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<UpdatingContext />);
    const updatingContext = getByTestId('UpdatingContext');

    expect(updatingContext).toBeInTheDocument();
  });
});