import React, {PropTypes, Component} from 'react';
import './style.css';

export default class ItemImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImage: '',
      imageIndex: 0,
      numImages: 3,
      imageList: [],
    }
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  componentDidMount() {
    const imageList = [
      this.props.images.PrimaryImage[0],
      ...this.props.images.AlternateImages
    ];
    this.setState({
      imageList: imageList,
      previewImage: this.props.images.PrimaryImage[0].image
    });
  }

  /**
   * Generate a list of images from `props.images.AlternateImages`.
   * The returned list is a subset of the images, based on the
   * state variables `numImages` and `imageIndex`
   * 
   * @return {jsx} list of images
   */
  renderImages() {
    const p = this.state.previewImage;
    const i = this.state.imageIndex;
    const n = this.state.numImages;
    const images = this.state.imageList.slice(i, n + i);
    const numMissing = n - (this.state.imageList.length - i);
    const results = images.map(alt => {
      const cls = (alt.image === p) ? 'btn-link active' : 'btn-link';
      return (
        <div className="col-xs-2" key={alt.image}>
          <button className={`btn btn-img ${cls}`} onClick={() => this.handleImageClick(alt.image)}>
            <img src={alt.image} height="50px" alt=""/>
          </button>
        </div>
      )
    });
    for(let j=0; j<numMissing; j++){
      results.push(<div className="col-xs-2" key={`missing-${j}`}></div>)
    }
    return results;
  }

  /**
   * Generates a left or right arrows 
   * @param  {string} dir should be either 'left' or 'right'
   * @return {jsx}
   */
  renderArrows(dir = 'left') {
    let offset = '';
    let disabled = false;
    const index = this.state.imageIndex;
    if (dir === 'left'){
      // offset = 'col-xs-offset-1';
      if (index <= 0) {
        disabled = true;
      }
    } else {
      if (index >= this.numPages() + 1){
        disabled = true;
      }
    }
    if (disabled) {
      return (<div className={`col-xs-2 ${offset}`}/>)
    }
    return (
      <div className={`col-xs-2 ${offset}`}>
        <button 
          onClick={() => this.handleArrowClick(dir)} 
          type="button" 
          className="btn btn-link btn-lg btn-arrow" 
          aria-label={`${dir} arrow`}>
          <span className={`glyphicon glyphicon glyphicon-menu-${dir}`} aria-hidden="true"></span>
        </button>
      </div>
    );
  }

  /**
   * Calculate the number of "pages" for the image carousel
   * @return {number} number of pages
   */
  numPages() {
    return Math.ceil(this.state.imageList.length / this.state.numImages);
  }

  /**
   * Action - When a user clicks on an arrow 
   * Depending on the `dir` this will increment or decrement the state
   * variable `imageIndex`
   * 
   * @param  {string} dir the direction (eg: 'left', 'right') of the arrow
   * @return null
   */
  handleArrowClick(dir = 'left') {
    let index = this.state.imageIndex;
    if (dir === 'left' && index > 0) {
      index -= this.state.numImages;
    }
    if (dir === 'right' && index <= this.numPages()){
      index += this.state.numImages;
    }
    this.setState({
      imageIndex: index
    })
  }

  /**
   * Action - When a user clicks on an image in the carousel update
   * the state variable `previewImage` with the provided url
   * 
   * @param  {string} url the image url
   * @return null
   */
  handleImageClick(url = '') {
    this.setState({
      previewImage: url
    })
  }

  render() {
    const leftArrow = this.renderArrows('left');
    const rightArrow = this.renderArrows('right');
    const imgs = this.renderImages();
    return (
      <div id="ItemImages">
        <figure className="figure text-center">
          <img src={this.state.previewImage} className="figure-img img-fluid rounded" alt=""/>
          <figcaption className="figure-caption text-center hidden-sm hidden-xs">
            <span className="glyphicon glyphicon-zoom-in"></span> &nbsp; 
            <a href={this.state.previewImage} className="view-larger" target="_blank">View Larger</a>
          </figcaption>
        </figure>
        <div className="row item-carousel">
          <div className="col-sm-2"> </div>
          <div className="col-sm-8">
            <div className="row">
              {leftArrow}
              {imgs}
              {rightArrow}
            </div>
          </div>
          <div className="col-sm-2"> </div>
        </div>
      </div>
    );
  }
}

ItemImages.defaultProps = {
  images: {}
};

ItemImages.propTypes = {
  images: PropTypes.object
};
