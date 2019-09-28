import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component { 
    render () {
        return (
            <BrowserRouter>
                <Switch>  {/* switch returns only one first matching routes*/}
                    <Route exact path="/" render={() => (
                            <React.Fragment>
                                <Nav />
                                <Homepage />
                                <Footer />
                            </React.Fragment>
                        )}
                    />
                    <Route exact path="/products"
                        render={() => (
                            <React.Fragment>
                                <Nav />
                                <Products />
                                <Footer />
                            </React.Fragment>
                        )}
                    />
                    <Route exact path="/contact"
                        render={() => (
                            <React.Fragment>
                                <Nav />
                                <Contact />
                                <Footer />
                            </React.Fragment>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;