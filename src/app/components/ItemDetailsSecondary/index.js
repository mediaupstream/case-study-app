import React, {PropTypes, Component} from 'react';
import Offers from '../Offers';
import Promotions from '../Promotions';
import PurchaseActions from '../PurchaseActions';
import ItemActions from '../ItemActions';
import ItemDescription from '../ItemDescription';
import ItemReturns from '../ItemReturns';
import './style.css';

export default class ItemDetailsSecondary extends Component {

  render() {
    const item = this.props.item;
    return (
      <div className="col-md-6" id="ItemDetailsSecondary">
        <Offers offer={item.Offers[0].OfferPrice[0]}/>
        <Promotions promotions={item.Promotions}/>
        <PurchaseActions purchasingChannelCode={Number(item.purchasingChannelCode)}/>
        <ItemReturns policy={item.ReturnPolicy[0]}/>
        <ItemActions itemId={item.itemId}/>
        <ItemDescription itemDescription={item.ItemDescription[0]}/>
      </div>
    );
  }
}

ItemDetailsSecondary.defaultProps = {
  item: {}
};

ItemDetailsSecondary.propTypes = {
  item: PropTypes.object.isRequired
};
