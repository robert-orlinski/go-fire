import { useContext } from 'react';

import ItemsContext from '../../../views/Backend/contents/Context/ItemsContext';

import ListedEntry from './atoms/ListedEntry';
import { NarrowCenterContainer } from '../../common/containers';

const EntriesList = () => {
  const { items } = useContext(ItemsContext);

  return items.length > 0 ? (
    items.map((entry) => {
      const { _id } = entry;

      return <ListedEntry key={_id} {...entry} />;
    })
  ) : (
    <NarrowCenterContainer>
      <p>There are no entries :c</p>
    </NarrowCenterContainer>
  );
};

export default EntriesList;
