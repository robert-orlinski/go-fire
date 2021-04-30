import React from 'react';
import styled from 'styled-components';

import { SmallGreenBox } from '../../../common/buttons';
import { ResultSection } from '../../../common/containers';

const Category = styled(SmallGreenBox)`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const ResultCategories = ({ title, operation, category }) => (
  <ResultSection>
    <h2>{title}</h2>
    <div>
      <Category>{operation}</Category>
      <Category>{category}</Category>
    </div>
  </ResultSection>
);

export default ResultCategories;
