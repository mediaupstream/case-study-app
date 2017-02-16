import React, {PropTypes, Component} from 'react';
import StarRating from '../StarRating';
import './style.css';

export default class CustomerReview extends Component {
  render() {
    return (
      <article className={`product-review ${this.props.className}`} key={this.props.review.reviewKey}>
        <header>
          <StarRating rating={this.props.review.overallRating}/>
          <h4>{this.props.review.title}</h4>
        </header>
        <p>{this.props.review.review}</p>
        <footer>
          <a href="#">{this.props.review.screenName}</a>
          {' '}
          {this.props.review.datePosted}
        </footer>
      </article>
    );
  }
}

CustomerReview.defaultProps = {
  review: {},
  className: '',
};

CustomerReview.propTypes = {
  review: PropTypes.object.isRequired,
  className: PropTypes.string
};
