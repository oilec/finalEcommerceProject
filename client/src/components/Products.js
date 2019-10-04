import React from 'react';

class Products extends React.Component {
  state = {
    activeFilter: "", //initial state of filter is empty = shows all products
    products: []
  }

  componentDidMount = () => { //runs when component is loaded
    fetch('/api/products') //fetches products from API (code that connects to DB)
      .then(res => res.json())
      .then(data => {
        this.setState({ //updates state with products from API
          products: data
        });
      })
  }

  handleOnClick = (e) => { 
    let filter = e.target.name; // button that is clicked

    if (filter === 'showAll') { // if show all; reset filter
      filter = "";
    }

    this.setState({ //updates state to whatever filter is clicked
      activeFilter: filter,
    });
  }

  render() {
    const productBlocks = this.state.products.map((product) => {
      let p = null; //placeholder for what t render, default: do not render any item
      const { activeFilter } = this.state;
      if (activeFilter === product.productType || activeFilter === product.priceCategory) { //if filter matches productType or priceCategory
        p = (
          <div key={product.productID} className="product-content price-content" >
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>${product.productPrice}</p>
            <button className="btn btn-primary btn-default">BUY NOW</button>
          </div>
        );
      } else if (this.state.activeFilter === '') { 
        p = ( //runs when page loads, when show all is clicked
          <div key={product.productID} className="product-content price-content" >
            <img src={product.productImage} />
            <h2>{product.productName}</h2>
            <p>{product.productDescription}</p>
            <p>${product.productPrice}</p>
            <button href="#" className="btn btn-primary btn-default">BUY NOW</button>
          </div>
        );
      }

      return p;
    });

    return (
      <div className="sparkle">
        <div className="filter-buttons">
          <button className="btn btn-outline-dark button-filter btn-responsive" name="Clothes" onClick={this.handleOnClick}>CLOTHES</button>
          <button className="btn btn-outline-dark button-filter btn-responsive" name="Vinyl" onClick={this.handleOnClick}>VINYLS</button>
          <button className="btn btn-outline-dark button-filter btn-responsive" name="Print" onClick={this.handleOnClick}>PRINT</button>
          <button className="btn btn-outline-dark button-filter btn-responsive" name="lt50" onClick={this.handleOnClick}>Less Than $50</button>
          <button className="btn btn-outline-dark button-filter btn-responsive" name="mt50" onClick={this.handleOnClick}>More Than $50</button>
          <button className="btn btn-outline-dark button-filter btn-responsive" name="showAll" onClick={this.handleOnClick}>SHOW ALL</button>
        </div>
        {productBlocks}
      </div>
    );
  }

}





export default Products;