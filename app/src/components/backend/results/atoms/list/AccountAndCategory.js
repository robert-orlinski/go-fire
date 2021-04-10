import React from 'react';
import styled from 'styled-components';

import { SmallGreenBox } from '../../../../common/buttons';
import { ResultSection } from '../../../../common/containers';
import { UnstyledTitle } from '../../../../common/texts';

const Category = styled(SmallGreenBox)`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const ResultAccountAndCategory = ({ title, account, category }) => (
  <ResultSection>
    <UnstyledTitle>{title}</UnstyledTitle>
    <div>
      <Category>{account}</Category>
      <Category>{category}</Category>
    </div>
  </ResultSection>
);

export default ResultAccountAndCategory;
