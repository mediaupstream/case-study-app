import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ItemDetails from './index';

describe('ItemDetails component', () => {
  it('should render default text', () => {
    const images = {
      PrimaryImage: [{image:''}],
      AlternateImages: [],
    }
    const itemDetails = TestUtils.renderIntoDocument(<ItemDetails title="test" images={images}/>);
    expect(itemDetails).toBeTruthy();
  });
});
