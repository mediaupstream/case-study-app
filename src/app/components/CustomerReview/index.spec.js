import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CustomerReview from './index';

describe('CustomerReview component', () => {
  it('should render default text', () => {
    const customerReview = TestUtils.renderIntoDocument(<CustomerReview/>);
    expect(customerReview).toBeTruthy();
    // const h2 = TestUtils.findRenderedDOMComponentWithTag(customerReview, 'h2');
    // expect(h2.textContent).toEqual('My brand new component!');
  });
});
