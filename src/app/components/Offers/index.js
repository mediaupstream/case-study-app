import React, { PropTypes } from 'react';
import './style.css';

Offers.propTypes = {
  offer: PropTypes.object.isRequired
}

export default function Offers ({ offer }) {
  return (
    <div id="Offers">
      <h3>{offer.formattedPriceValue} <sub>{offer.priceQualifier}</sub></h3>
    </div>
  );
}
