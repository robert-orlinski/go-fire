import React, { useContext } from 'react';

import ItemsContext from '../../../views/backend/contents/Context/ItemsContext';

import ListedEntry from './atoms/ListedEntry';
import { NarrowCenterContainer } from '../../common/containers';

const EntriesList = () => {
  const { items } = useContext(ItemsContext);

  return items.length > 0 ? (
    items.map((item) => <ListedEntry key={item._id} {...item} />)
  ) : (
    <NarrowCenterContainer>
      <p>There are no results :c</p>
    </NarrowCenterContainer>
  );
};

export default EntriesList;
