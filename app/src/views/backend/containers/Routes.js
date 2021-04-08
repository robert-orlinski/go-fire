import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AddCategoryContainer from '../contents/adding/AddCategoryContainer';
import AddEntryContainer from '../contents/adding/AddEntryContainer';
import Results from '../contents/watching/Results';
import ResultsList from '../contents/watching/ResultsList';
import ResultsChart from '../contents/watching/ResultsChart';
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
      <Route exact path="/results/list">
        <ResultsList />
      </Route>
      <Route exact path="/results/chart">
        <ResultsChart />
      </Route>
      <Route exact path="/">
        <StartPage />
      </Route>
    </PageContent>
  </Switch>
);

export default Routes;
