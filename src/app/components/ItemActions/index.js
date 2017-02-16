import React, {PropTypes} from 'react';
import './style.css';

ItemActions.propTypes = {
  itemId: PropTypes.string
};

export default function ItemActions({itemId}) {
  return (
    <div id="ItemActions" className="row">
      <div className="col-xs-4">
        <button className="btn btn-sm btn-block text-uppercase">Add to registry</button>
      </div>
      <div className="col-xs-4">
        <button className="btn btn-sm btn-block text-uppercase">Add to list</button>
      </div>
      <div className="col-xs-4">
        <button className="btn btn-sm btn-block text-uppercase">Share</button>
      </div>
    </div>
  );
}
