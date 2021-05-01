import React from 'react';
import styled from 'styled-components';

import { SmallGreenBox } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

const Category = styled(SmallGreenBox)`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;

const ItemCategories = ({ title, operation, category }) => (
  <ItemSection>
    <h3>{title}</h3>
    <div>
      <Category>#{operation}</Category>
      <Category>#{category}</Category>
    </div>
  </ItemSection>
);

export default ItemCategories;
