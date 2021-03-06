import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Loader from './index';

describe('Loader component', () => {
  it('should render default text', () => {
    const loader = TestUtils.renderIntoDocument(<Loader/>);
    const h2 = TestUtils.findRenderedDOMComponentWithTag(loader, 'h2');
    expect(h2.textContent).toEqual('Loading...');
  });
});
