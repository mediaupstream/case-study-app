import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemReturns from './index';

describe('ItemReturns component', () => {
  it('should render default text', () => {
    const element = ItemReturns({policy:{}});
    expect(element).toBeTruthy();
  });
});
