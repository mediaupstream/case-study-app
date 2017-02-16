import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Promotions from './index';

describe('Promotions component', () => {
  it('should render default text', () => {
    const props = {
      promotions: [{
        promotionIdentifier: 'foobar',
        Description: [{
          shortDescription: 'short description here'
        }]
      }]
    }
    const promotions = Promotions(props);
    expect( promotions.props.children.props.children[0].key ).toEqual('foobar')
    expect(promotions).toBeTruthy();
  });
});
