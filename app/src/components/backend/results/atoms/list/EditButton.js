import React from 'react';

import { Button } from '../../../../common/buttons';
import { ResultSection } from '../../../../common/containers';

const ResultEditButton = ({ buttonTitle }) => (
  <ResultSection as="footer">
    <Button>{buttonTitle}</Button>
  </ResultSection>
);

export default ResultEditButton;
