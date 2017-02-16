import React, {PropTypes} from 'react';
import './style.css';

ItemReturns.propTypes = {
  policy: PropTypes.object
};

export default function ItemReturns({itemId}) {
  return (
    <div id="ItemReturns" className="row">
      <h3 className="col-xs-1">returns</h3>
      <p className="col-xs-10 col-xs-offset-1">This item must be returned within 30 days of the ship date. See <a href="#">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p>
    </div>
  );
}
