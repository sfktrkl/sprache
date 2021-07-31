import React from "react"
import TestRenderer from "react-test-renderer"

import App from "../App"

describe('App', function() {
  const app: any = TestRenderer.create(<App />).toJSON();
  it("is a View", () => {  // TODO: Router in the future
    expect(app?.type).toBe("View");
  });
  it("has 1 child", () => {
    expect(app?.children?.length).toBe(1);
  });
});
