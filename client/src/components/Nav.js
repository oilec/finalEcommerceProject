import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-home navbar-expand-lg navbar-dark">
            <h1 className="navbar-brand nav-">Frank Ocean</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
                 <li className="nav-item">
                    <NavLink to="/" className="nav-link " exact>Home</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink to="/products" className="nav-link" exact>Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link" exact>Contact</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
}  

export default Nav;

