import React, {PropTypes, Component} from 'react';
import './style.css';

export default class PurchaseActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
    this.handleDecQuantity = this.handleDecQuantity.bind(this);
    this.handleIncQuantity = this.handleIncQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  /**
   * Update the local `quantity` state
   * @param  {number} delta the value to change the state by, example 1 
   * to increment or -1 to decrement by one
   */
  updateQuantity(delta){
    const value = Number(this.state.quantity + delta);
    this.setState({
      quantity: (value < 1) ? 1 : value
    })
  }

  /**
   * When a user clicks the "ADD TO CART" button we make money... :)
   */
  handleAddToCart(){
    const url = 'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=73HNT53UQ52SN&lc=US&item_name=Interview%20Karma&item_number=2323&amount=139%2e99&currency_code=USD&button_subtype=services&tax_rate=0%2e000&shipping=0%2e00';
    window.open(url,'_blank');
  }

  /**
   * Decrement the local `quantity` state by 1
   */
  handleDecQuantity(){
    this.updateQuantity(-1);
  }

  /**
   * Increment the local `quantity` state by 1
   */
  handleIncQuantity(){
    this.updateQuantity(1);
  }

  /**
   * Determine if the minus button should be disabled
   * @param  {number} quantity the current quantity value
   * @return {bool}
   */
  disableQuantityBtn(quantity){
    return quantity < 2;
  }

  /**
   * Return a JSX button with the label "ADD TO CART"
   * 
   * @param {number} code the `purchasingChannelCode` value
   * @return {jsx} will return a button or empty depending on `code`
   */
  addToCartBtn(code){
    if (Number(code) === 0 ||
        Number(code) === 1){
      return (
        <button 
          type="button" 
          onClick={this.handleAddToCart}
          className="btn btn-primary btn-lg btn-block text-uppercase">
          ADD TO CART
        </button>
      )
    }
    return (' ')
  }

  /**
   * Return a JSX button with the label "PICK UP IN STORE"
   * 
   * @param {number} code the `purchasingChannelCode` value
   * @return {jsx} will return a button or empty depending on `code`
   */
  pickupInStoreBtn(code){
    if (Number(code) === 0 ||
        Number(code) === 2){
      return (
        <span>
          <button type="button" className="btn btn-info btn-lg btn-block text-uppercase">PICK UP IN STORE</button>
          <p className="text-center"><button className="btn btn-link btn-sm">find in a store</button></p>
        </span>
      )
    }
    return (' ')
  }

  render() {
    const storeBtn = this.pickupInStoreBtn(this.props.purchasingChannelCode);
    const cartBtn = this.addToCartBtn(this.props.purchasingChannelCode);
    const disabledBtn = this.disableQuantityBtn(this.state.quantity);
    return (
      <div id="PurchaseActions">
        <div className="quantityCounter col-xs-6">
          <div className="row">
            <p className="col-xs-6">quantity:</p>
            <div className="col-xs-6 text-right">
              <button 
                disabled={disabledBtn} 
                className="btn btn-link" 
                onClick={this.handleDecQuantity}>
                <span className="glyphicon glyphicon-minus-sign" />
              </button>
              <span className="quantityText"> {this.state.quantity} </span>
              <button 
                className="btn btn-link" 
                onClick={this.handleIncQuantity}>
                <span className="glyphicon glyphicon-plus-sign"/>
              </button>
            </div>
          </div>
        </div>
        <div className="clearfix"/>
        <div className="row justify-content-center purchaseButtons">
          <div className="col-xs-6">
            {storeBtn}
          </div>
          <div className="col-xs-6">
            {cartBtn}
          </div>
        </div>
      </div>
    );
  }
}

PurchaseActions.defaultProps = {
  purchasingChannelCode: 0
};

PurchaseActions.propTypes = {
  purchasingChannelCode: PropTypes.any
};
