import React, {PropTypes, Component} from 'react';
import './style.css';

export default class StarRating extends Component {
  renderStars(rating, numStars) {
    return new Array(numStars).fill(0).map((v, i) => {
      const active = (i < rating) 
        ? 'star-rating star-rating--active' 
        : 'star-rating';
      return (
        <span key={i} className={`glyphicon glyphicon-star ${active}`}></span>
      );
    })
  }
  render() {
    const list = this.renderStars(this.props.rating, this.props.numStars);
    return (
      <span className={this.props.className}>
        {list}
      </span>
    );
  }
}

StarRating.defaultProps = {
  rating: 0,
  numStars: 5,
  className: '',
};

StarRating.propTypes = {
  rating: PropTypes.any,
  numStars: PropTypes.any,
  className: PropTypes.string,
};
