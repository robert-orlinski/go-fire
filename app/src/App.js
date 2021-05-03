import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './common/css/layout';

import Root from './views/backend/containers/Root';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Root />
    </Router>
  );
}

export default App;
