import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import ScrollToTop from './comps/scrollToTop';
import Home from './pages/Home';
import Conduct from './pages/Conduct';
import NotFound from './pages/NotFound';
import Header from './comps/header';
import Footer from './comps/footer';

export default () => (
  <Router>
    <div className="page">
      <Header />

      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/codice-condotta" component={Conduct} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollToTop>

      <Footer />
    </div>
  </Router>
);
