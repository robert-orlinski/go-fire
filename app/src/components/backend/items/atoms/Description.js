import React from 'react';

import { ResultSection } from '../../../common/containers';
import { ElementWithoutSpace, UnstyledTitle } from '../../../common/texts';

const ResultDescription = ({ title, description }) => (
  <ResultSection>
    <UnstyledTitle>{title}</UnstyledTitle>
    <ElementWithoutSpace>{description}</ElementWithoutSpace>
  </ResultSection>
);

export default ResultDescription;
