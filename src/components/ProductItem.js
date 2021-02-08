import React, { Component } from 'react';
import * as messages from './../constants/Message';
class ProductItem extends Component {
  showRating = (rating) => {
    var result = [];
    for(var i = 0; i < rating; i++) {
      result.push(<i key={i} className="fa fa-star"></i>);
    }
    for(var j = 0; j < 5-rating; j++) {
      result.push( <i key={i+j} className="fa fa-star-o"></i>);
    }
    console.log(result);
    return result;
  }
  onAddToCart = (product, quantity) => {
    this.props.onAddToCart(product, quantity);
    this.props.onChangeMessage(messages.MSG_ADD_TO_CART_SUCCESS);
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={this.props.image} className="img-fluid" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{this.props.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRating(this.props.rating)}
              </li>
            </ul>
            <p className="card-text">
              {this.props.description}
            </p>
            <div className="card-footer">
              <span className="left">{this.props.price}$</span>
              <span className="right" onClick={() => this.onAddToCart(this.props.values, 1)}>
                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
export default ProductItem;
