import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemActions from './index';

describe('ItemActions component', () => {
  it('should render default text', () => {
    const element = ItemActions({itemId: 'blah'});
    expect(element).toBeTruthy();
  });
});
