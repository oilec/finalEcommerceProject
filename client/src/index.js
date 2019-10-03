import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './normalize.css';
import './App.css';



const Routing = () => (
    <Router>
        <Switch>
            <React.Fragment>
                <Nav />
                <main>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/products" component={Products} />
                    <Route path="/contact" component={Contact} />
                </main>
                <Footer />
            </React.Fragment>
        </Switch>
    </Router>
)

ReactDOM.render(<Routing />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();