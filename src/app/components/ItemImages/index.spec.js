import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemImages from './index';

describe('ItemImages component', () => {
  it('should render default text', () => {
    const images = {
      PrimaryImage: [{image:''}],
      AlternateImages: [],
    };
    const itemImages = TestUtils.renderIntoDocument(<ItemImages images={images}/>);
    expect(itemImages).toBeTruthy();
  });
});
