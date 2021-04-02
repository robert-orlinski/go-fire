import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './common/css/layout';

import AddCategoryContainer from './views/AddCategoryContainer';
import AddEntryContainer from './views/AddEntryContainer';
import Results from './views/Results';
import StartPage from './views/StartPage';

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/add-category">
          <AddCategoryContainer />
        </Route>
        <Route path="/add-entry">
          <AddEntryContainer />
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
