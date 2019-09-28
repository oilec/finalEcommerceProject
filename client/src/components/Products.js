import React from 'react';

class Products extends React.Component {
  state = {
    activeFilter: "", //initial state of filter is empty = shows all products
    products: []
  } 

  componentDidMount = () => {
    fetch('/api/products').then((res) => res.json()).then((data) => {
      this.setState({
        products: data
      });
    })
  }

  handleOnClick = (e) => {
    let filter = e.target.name; // button that is clicked
    
    if (filter === 'showAll') { // if show all; reset filter
      filter = ""; 
    }

    this.setState({
      activeFilter: filter,
    });
  }

  render() {
    const productBlocks = this.state.products.map((product) => {
      let p = null; //placeholder for what t render, default: do not render any item

      if (this.state.activeFilter === product.category) {
        p = ( 
          <div className="product-content price-content" >
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>${product.productPrice}</p>
            <a href="#" className="btn btn-primary btn-default">BUY NOW</a>
          </div>
        );
      } else if (this.state.activeFilter === product.priceCategory ) {
        p = (
          <div className="product-content price-content" >
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>${product.productPrice}</p>
            <a href="#" className="btn btn-primary btn-default">BUY NOW</a>
          </div>
        );
      } else if (this.state.activeFilter === ''){
        p = ( //runs when page loads, when show all is clicked
          <div className="product-content price-content" >
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>${product.productPrice}</p>
            <a href="#" className="btn btn-primary btn-default">BUY NOW</a>
          </div>
        );
      }
      
      return p;
    });

    return (
      <div className="sparkle"> 
          {productBlocks}
      </div>
    );
  }

}





export default Products;