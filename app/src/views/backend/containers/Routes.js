import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AddCategoryContainer from '../contents/AddCategoryContainer';
import AddEntryContainer from '../contents/AddEntryContainer';
import Results from '../contents/Results';
import StartPage from '../contents/StartPage';

const PageContent = styled.article`
  width: calc(100%);
`;

const Routes = () => (
  <Switch>
    <PageContent>
      <Route exact path="/add-category">
        <AddCategoryContainer />
      </Route>
      <Route exact path="/add-entry">
        <AddEntryContainer />
      </Route>
      <Route exact path="/results">
        <Results />
      </Route>
      <Route exact path="/">
        <StartPage />
      </Route>
    </PageContent>
  </Switch>
);

export default Routes;
