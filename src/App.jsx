import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Sidebar } from './components';
import {
  HomePage,
  Earphones,
  Headphones,
  Speakers,
  Checkout,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/earphones'>
            <Earphones />
          </Route>
          <Route exact path='/headphones'>
            <Headphones />
          </Route>
          <Route exact path='/speakers'>
            <Speakers />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/product:id' children={<SingleProduct />}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
