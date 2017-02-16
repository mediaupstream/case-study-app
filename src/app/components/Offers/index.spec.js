import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Offers from './index';

describe('Offers component', () => {
  it('should render default text', () => {
    const props = {
      offer: {
        formattedPriceValue: 10.95,
        priceQualifier: 'in space'
      }
    }
    const offers = Offers(props);
    expect(offers).toBeTruthy();
    expect( offers.props.children.props.children[0] ).toEqual(10.95)
    expect( offers.props.children.props.children[2].props.children ).toEqual('in space')
  });
});
