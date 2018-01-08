import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './lib/registerServiceWorker';

import Home from './components/Home';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route component={NotFound} />

    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
