import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Shop from './Shop.js';
import About from './About.js';
import ItemDetail from './ItemDetail.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
