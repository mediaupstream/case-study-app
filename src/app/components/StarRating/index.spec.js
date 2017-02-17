import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import StarRating from './index.js';

const props = {
  rating: 2,
  numStars: 4,
  className: 'foobar'
};

describe('StarRating component', () => {
  it('renders with defaults', () => {
    const wrapper = shallow(<StarRating/>);
    expect(wrapper.find('.star-rating')).toHaveLength(5);
  });

  it('renders with className', () => {
    const wrapper = shallow(<StarRating className={props.className}/>);
    expect(wrapper.find(`.${props.className}`)).toHaveLength(1);
  });

  it('renders with numStars', () => {
    const wrapper = shallow(<StarRating numStars={props.numStars}/>);
    expect(wrapper.find('span.star-rating')).toHaveLength(props.numStars);
  });

  it('renders with rating', () => {
    const wrapper = shallow(<StarRating rating={props.rating}/>);
    expect(wrapper.find('span.star-rating--active')).toHaveLength(props.rating);
  });
});
