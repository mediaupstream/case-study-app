import React, {PropTypes, Component} from 'react';
import StarRating from '../StarRating';
import CustomerReview from '../CustomerReview';
import './style.css';

export default class CustomerReviews extends Component {
  render() {
    return (
      <div className="col-md-6" id="CustomerReviews">
        <div className="row" id="OverallRating">
          <div className="col-xs-6" >
            <StarRating className="star-rating--large" rating={this.props.reviews.consolidatedOverallRating}/>
            <strong>overall</strong>
          </div>
          <div className="col-xs-6 text-right">
            <button className="btn btn-link">view all 14 reviews</button>
          </div>
        </div>
        <div className="row review-section">
          <div className="col-xs-6" id="ProReview">
            <h3>PRO</h3>
            <p><small>most helpful 4-5 star review</small></p>
            <hr/>
            <CustomerReview review={this.props.reviews.Pro[0]}/>
          </div>
          <div className="col-xs-6" id="ProReview">
            <h3>CON</h3>
            <p><small>most helpful 1-2 star review</small></p>
            <hr/>
            <CustomerReview review={this.props.reviews.Con[0]}/>
          </div>
        </div>
      </div>
    );
  }
}

CustomerReviews.defaultProps = {
  reviews: {}
};

CustomerReviews.propTypes = {
  reviews: PropTypes.object.isRequired
};
