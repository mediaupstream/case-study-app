import React, {PropTypes} from 'react';
import './style.css';

ItemDescription.propTypes = {
  itemDescription: PropTypes.object.isRequired
};

export default function ItemDescription({itemDescription}) {
  function featureHtml(item){
    return {__html: item}
  };
  return (
    <div id="ItemDescription">
      <h2>product highlights</h2>
      <ul>
        {itemDescription.features.map((feature, i) => (
          <li key={i} dangerouslySetInnerHTML={featureHtml(feature)}></li>
        ))}
      </ul>
    </div>
  );
}
