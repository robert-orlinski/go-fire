import React from 'react';
import styled from 'styled-components';

import { SmallGreenBox } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

const Categories = styled.div`
  margin-bottom: -1rem;
`;

const Category = styled(SmallGreenBox)`
  margin: 0 1rem 1rem 0;
`;

const ItemCategories = ({ title, operation, category }) => (
  <ItemSection>
    <h3>{title}</h3>
    <Categories>
      <Category>#{operation}</Category>
      <Category>#{category}</Category>
    </Categories>
  </ItemSection>
);

export default ItemCategories;
