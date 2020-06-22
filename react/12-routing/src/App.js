import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import ProductForm from './components/ProductForm';
import ListProducts from './components/ListProducts';

function App() {
  return (

    <Router>
      <div className="container">

        <div className="alert alert-info text-center"><h1> SPA With React Router</h1></div>
        <hr/>

        <div className="row">

          <div className="col-3">
            <Navbar />
          </div>

          <div className="col-9">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/add" component={ProductForm}/>
              <Route exact path="/display" component={ListProducts}/>
            </Switch>
          </div>

        </div>
      </div>
    </Router>




  );
}

export default App;
