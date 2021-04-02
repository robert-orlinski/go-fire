import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './common/css/layout';

import AddEntry from './views/AddEntry';
import Results from './views/Results';
import StartPage from './views/StartPage';

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/add-entry">
          <AddEntry />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
