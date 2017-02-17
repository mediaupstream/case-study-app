import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import PurchaseActions from './index';

describe('PurchaseActions component', () => {
  it('renders with defaults', () => {
    const wrapper = shallow(<PurchaseActions/>);
    expect(wrapper.find('#PurchaseActions')).toHaveLength(1);
  });

  it('contains an "ADD TO STORE" button', () => {
    const wrapper = shallow(<PurchaseActions purchasingChannelCode={0}/>);
    expect(wrapper.find('.btn--add-to-cart')).toHaveLength(1);
    const wrapper2 = shallow(<PurchaseActions purchasingChannelCode={1}/>);
    expect(wrapper2.find('.btn--add-to-cart')).toHaveLength(1);
  });
  
  it('does not contain an "ADD TO STORE" button', () => {
    const wrapper = shallow(<PurchaseActions purchasingChannelCode={2}/>);
    expect(wrapper.find('.btn--add-to-cart')).toHaveLength(0);
  });

  it('contains an "PICK UP IN STORE" button', () => {
    const wrapper = shallow(<PurchaseActions purchasingChannelCode={0}/>);
    expect(wrapper.find('.btn--pickup-in-store')).toHaveLength(1);
    const wrapper2 = shallow(<PurchaseActions purchasingChannelCode={2}/>);
    expect(wrapper2.find('.btn--pickup-in-store')).toHaveLength(1);
  });

  it('does not contain an "PICK UP IN STORE" button', () => {
    const wrapper = shallow(<PurchaseActions purchasingChannelCode={1}/>);
    expect(wrapper.find('.btn--pickup-in-store')).toHaveLength(0);
  });

  it('renders with default quantity state value', () => {
    const wrapper = shallow(<PurchaseActions/>);
    expect(wrapper.find('.quantityText').text()).toEqual(" 1 ")
  });

  it('can increment quantity state value', () => {
    const wrapper = shallow(<PurchaseActions/>);
    wrapper.find('.btn--increment-quantity').simulate('click');
    expect(wrapper.find('.quantityText').text()).toEqual(" 2 ");
  });

  it('can decrement quantity state value', () => {
    const wrapper = shallow(<PurchaseActions/>);
    wrapper.find('.btn--increment-quantity').simulate('click');
    wrapper.find('.btn--decrement-quantity').simulate('click');
    expect(wrapper.find('.quantityText').text()).toEqual(" 1 ");
  });

  it('cannot decrement quantity state value', () => {
    const wrapper = shallow(<PurchaseActions/>);
    wrapper.find('.btn--decrement-quantity').simulate('click');
    expect(wrapper.find('.quantityText').text()).toEqual(" 1 ");
  });


});
