import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';

import App from '../App';

describe('App', function () {
  const app = TestRenderer.create(<App />).toJSON() as ReactTestRendererJSON;
  it('is a View', () => {
    expect(app?.type).toBe('View');
  });
  it('has 2 children', () => {
    expect(app?.children?.length).toBe(2);
  });
});
