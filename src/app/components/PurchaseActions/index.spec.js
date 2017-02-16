import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PurchaseActions from './index';

describe('PurchaseActions component', () => {
  it('should render default text', () => {
    const purchaseActions = TestUtils.renderIntoDocument(<PurchaseActions/>);
    expect(purchaseActions).toBeTruthy();

    // const h2 = TestUtils.findRenderedDOMComponentWithTag(purchaseActions, 'button');
    // console.log( h2 )
    // expect(h2.textContent).toEqual('My brand new component!');
  });
});
