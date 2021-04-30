import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import AddCategoryContainer from '../contents/AddCategory';
import AddEntryContainer from '../contents/AddEntry';
import Categories from '../contents/Categories';
import Entries from '../contents/Entries';
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
      <Route exact path="/categories">
        <Categories />
      </Route>
      <Route exact path="/results">
        <Entries />
      </Route>
      <Route exact path="/">
        <StartPage />
      </Route>
    </PageContent>
  </Switch>
);

export default Routes;
