import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import AddCategory from '../contents/AddCategory';
import AddEntry from '../contents/AddEntry';
import Categories from '../contents/Categories';
import Entries from '../contents/Entries';
import Start from '../contents/Start';

const PageContent = styled.main`
  width: 100%;
`;

const Routes = () => (
  <PageContent>
    <Switch>
      <Route exact path="/add-category">
        <AddCategory />
      </Route>
      <Route exact path="/add-entry">
        <AddEntry />
      </Route>
      <Route exact path="/categories">
        <Categories />
      </Route>
      <Route exact path="/entries">
        <Entries />
      </Route>
      <Route exact path="/">
        <Start />
      </Route>
      <Route exact path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </PageContent>
);

export default Routes;
