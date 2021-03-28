import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalStyles from './common/sharedStyles/globalStyles';
import AddEntry from './components/AddEntry';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/">
          <AddEntry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
