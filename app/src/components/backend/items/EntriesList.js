import { useContext } from 'react';

import ItemsContext from '../../../views/Backend/Contents/Context/ItemsContext';

import ListedEntry from './Atoms/ListedEntry';
import { NarrowCenterContainer } from '../../Common/containers';

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
