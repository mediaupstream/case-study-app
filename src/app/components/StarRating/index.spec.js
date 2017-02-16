import React from 'react';
import TestUtils from 'react-addons-test-utils';
import StarRating from './index.js';

describe('StarRating component', () => {
  it('should render default text', () => {
    const element = TestUtils.renderIntoDocument(<StarRating/>);
    expect(element).toBeTruthy();
    // const h2 = TestUtils.findRenderedDOMComponentWithTag(StarRating, 'h2');
    // expect(h2.textContent).toEqual('My brand new component!');
  });
});
