import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemperatureInput from './TemperatureInput';

describe('<TemperatureInput />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<TemperatureInput />);
    const temperatureInput = getByTestId('TemperatureInput');

    expect(temperatureInput).toBeInTheDocument();
  });
});