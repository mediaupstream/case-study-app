import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemDescription from './index';

describe('ItemDescription component', () => {
  it('should render default text', () => {
    const props = {
      itemDescription: {
        features: ['one', 'two', 'three', 'four' ]
      }
    };
    const element = ItemDescription(props)
    expect(element).toBeTruthy();
  });
});
