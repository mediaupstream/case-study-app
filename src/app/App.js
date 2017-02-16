import React, {Component} from 'react';
import Loader from './components/Loader';
import ItemDetails from './components/ItemDetails';
import ItemDetailsSecondary from './components/ItemDetailsSecondary';
import CustomerReviews from './components/CustomerReviews';
import 'whatwg-fetch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      item: {}
    };
  }
  componentDidMount() {
    this.getItemData();
  }
  getItemData(url = '/data/item-data.json') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data && data.CatalogEntryView){
          this.setState({
            loading: false,
            item: data.CatalogEntryView[0]
          });
        }
      })
      .catch(err => { console.log(err) })
  }
  render() {
    if (this.state.loading) {
      return <Loader/>;
    }
    const item = this.state.item;
    return (
      <div className="row">
        <ItemDetails title={item.title} images={item.Images[0]}/>
        <ItemDetailsSecondary item={item}/>
        <CustomerReviews reviews={item.CustomerReview[0]}/>
      </div>
    );
  }
}
