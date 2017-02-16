import React, {PropTypes} from 'react';
import './style.css';

Promotions.propTypes = {
  promotions: PropTypes.array.isRequired
};

const renderPromotions = promotions => {
  return promotions.map(p => (
    <li key={p.promotionIdentifier}>
      <button type="button" className="btn btn-link btn-xs">
        <span className="glyphicon glyphicon-tag" aria-hidden="true"/>
        {p.Description[0].shortDescription}
      </button>
    </li>
  ));
}

export default function Promotions({promotions}) {
  const renderPromotionList = renderPromotions(promotions);
  return (
    <div id="Promotions">
      <ul>
        {renderPromotionList}
      </ul>
    </div>
  );
}
