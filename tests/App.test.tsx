import React from 'react';
import TestRenderer, { ReactTestRendererJSON } from 'react-test-renderer';

import App from '../App';

describe('App', function() {
  const app = TestRenderer.create(<App />).toJSON() as ReactTestRendererJSON;
  it('is a View', () => {  // TODO: Router in the future
    expect(app?.type).toBe('View');
  });
  it('has 1 child', () => {
    expect(app?.children?.length).toBe(1);
  });
});
