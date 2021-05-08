import styled from 'styled-components';

import { EntryCategoriesType } from '../../../../common/types';
import { SmallGreenBox } from '../../../common/buttons';
import { ItemSection } from '../../../common/containers';

const Categories = styled.div`
  margin-bottom: -1rem;
`;

const Category = styled(SmallGreenBox)`
  margin: 0 1rem 1rem 0;
`;

const ItemCategories: React.FC<EntryCategoriesType> = ({
  operation,
  category,
}) => (
  <ItemSection>
    <h3>Categories:</h3>
    <Categories>
      <Category>#{operation}</Category>
      <Category>#{category}</Category>
    </Categories>
  </ItemSection>
);

export default ItemCategories;
