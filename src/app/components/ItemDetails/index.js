import React, {PropTypes, Component} from 'react';
import ItemImages from '../ItemImages';
import './style.css';

export default class ItemDetails extends Component {
  render() {
    return (
      <div className="col-md-6" id="ItemDetails">
        <div className="row">
        <p className="col-md-2 hidden-xs hidden-sm"> </p>
        <h2 className="col-md-8 text-center">{this.props.title}</h2>
        <p className="col-md-2 hidden-xs hidden-sm"> </p>
        </div>
        <ItemImages images={this.props.images}/>
      </div>
    );
  }
}

ItemDetails.defaultProps = {
  title: '',
  images: {}
};

ItemDetails.propTypes = {
  title: PropTypes.string,
  images: PropTypes.object,
};
