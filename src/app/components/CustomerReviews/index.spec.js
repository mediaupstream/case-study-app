import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CustomerReviews from './index';

describe('CustomerReviews component', () => {
  it('should render default text', () => {
    const data = {
      consolidatedOverallRating: 4,
      Pro: [],
      Con: []
    };
    const customerReviews = TestUtils.renderIntoDocument(<CustomerReviews reviews={data}/>);
    expect(customerReviews).toBeTruthy();
    // const h2 = TestUtils.findRenderedDOMComponentWithTag(customerReviews, 'h2');
    // expect(h2.textContent).toEqual('My brand new component!');
  });
});
