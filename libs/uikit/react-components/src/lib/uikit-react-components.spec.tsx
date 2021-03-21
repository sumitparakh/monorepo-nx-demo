import React from 'react';
import { render } from '@testing-library/react';

import UikitReactComponents from './uikit-react-components';

describe('UikitReactComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UikitReactComponents />);
    expect(baseElement).toBeTruthy();
  });
});
