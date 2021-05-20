import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Sidebar } from './components';
import {
  HomePage,
  EarphonesPage,
  HeadphonesPage,
  SpeakersPage,
  Checkout,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/earphones'>
          <EarphonesPage />
        </Route>
        <Route exact path='/headphones'>
          <HeadphonesPage />
        </Route>
        <Route exact path='/speakers'>
          <SpeakersPage />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/product:id' children={<SingleProduct />}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
