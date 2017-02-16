import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemDetailsSecondary from './index';

describe('ItemDetailsSecondary component', () => {
  it('should render default text', () => {
    const props = {
      item: {
        Offers: [{OfferPrice:[{}]}],
        Promotions: [],
        purchasingChanelCode: 0,
        ReturnPolicy: [],
        itemId: '10',
        ItemDescription: [{
          itemDescription: {
            features: ['one', 'two', 'three', 'four' ]
          }
        }]
      }
    };
    const itemDetailsSecondary = TestUtils.renderIntoDocument(<ItemDetailsSecondary item={props.item}/>);
    expect(itemDetailsSecondary).toBeTruthy();
    // const h2 = TestUtils.findRenderedDOMComponentWithTag(itemDetailsSecondary, 'h2');
    // expect(h2.textContent).toEqual('My brand new component!');
  });
});
