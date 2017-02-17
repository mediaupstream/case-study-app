import React, {PropTypes} from 'react';
import './style.css';

StarRating.propTypes = {
  rating: PropTypes.number,
  numStars: PropTypes.number,
  className: PropTypes.string,
};
StarRating.defaultProps = {
  rating: 0,
  numStars: 5,
  className: ''
}

const renderStars = (rating, numStars) => {
  return new Array(numStars).fill(0).map((v, i) => {
    const active = (i < rating) 
      ? 'star-rating star-rating--active' 
      : 'star-rating';
    return (
      <span key={i} className={`glyphicon glyphicon-star ${active}`}></span>
    );
  })
} 

export default function StarRating({rating, numStars, className}) {
  const list = renderStars(rating, numStars);
  return (
    <span className={className}>
      {list}
    </span>
  );
}
