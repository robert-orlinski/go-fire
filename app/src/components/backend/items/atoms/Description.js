import React from 'react';

import { ResultSection } from '../../../common/containers';
import { TextWithoutSpace } from '../../../common/texts';

const ResultDescription = ({ title, description }) => (
  <ResultSection>
    <h2>{title}</h2>
    <TextWithoutSpace>{description}</TextWithoutSpace>
  </ResultSection>
);

export default ResultDescription;
