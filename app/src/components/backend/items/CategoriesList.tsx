import { useContext } from 'react';
import styled from 'styled-components';

import { maxD } from '../../../common/helpers/devices';
import ItemsContext from '../../../views/backend/contents/Context/ItemsContext';

import ListedCategory from './atoms/ListedCategory';
import { NarrowCenterContainer } from '../../common/containers';
import { ListWithoutSpace } from '../../common/texts';
import { CategoryType } from '../../../common/types';

const CategoriesListHeader = styled.h3`
  padding-bottom: 3rem;

  @media ${maxD.mobileL} {
    padding-bottom: 2.2rem;
  }
`;

const CategoriesListInner = styled(ListWithoutSpace)`
  margin-bottom: 5rem;
`;

const CategoriesList = () => {
  const { items } = useContext(ItemsContext);

  const operationCategories = items.filter((category: CategoryType) => {
    return category.type === 'operation';
  });

  const typeCategories = items.filter((category: CategoryType) => {
    return category.type === 'category';
  });

  return items.length > 0 ? (
    <>
      {operationCategories && (
        <section>
          <CategoriesListHeader>Operation types:</CategoriesListHeader>
          <CategoriesListInner>
            {operationCategories.map((category: CategoryType) => (
              <ListedCategory key={category._id} {...category} />
            ))}
          </CategoriesListInner>
        </section>
      )}
      {typeCategories && (
        <section>
          <CategoriesListHeader>Investment types:</CategoriesListHeader>
          <CategoriesListInner>
            {typeCategories.map((category: CategoryType) => (
              <ListedCategory key={category._id} {...category} />
            ))}
          </CategoriesListInner>
        </section>
      )}
    </>
  ) : (
    <NarrowCenterContainer>
      <p>There are no categories! You can add anyone.</p>
    </NarrowCenterContainer>
  );
};

export default CategoriesList;
