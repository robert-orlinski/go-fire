import '@fontsource/montserrat/700.css';

import StyleVariables from './Variables';
import GlobalStyles from './GlobalStyles';

const Layout: React.FC = ({ children }) => (
  <>
    <StyleVariables />
    <GlobalStyles />
    {children}
  </>
);

export default Layout;
