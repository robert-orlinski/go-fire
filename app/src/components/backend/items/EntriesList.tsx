import { useContext } from 'react';

import ItemsContext from '../../../views/Backend/contents/Context/ItemsContext';

import { ExistingEntryType } from '../../../common/types';
import { NarrowCenterContainer } from '../../common/containers';

import ListedEntry from './atoms/ListedEntry';

const EntriesList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <>
      {items.length > 0 ? (
        items.map((entry: ExistingEntryType) => {
          const { _id } = entry;

          return <ListedEntry key={_id} {...entry} />;
        })
      ) : (
        <NarrowCenterContainer>
          <p>There are no entries :c</p>
        </NarrowCenterContainer>
      )}
    </>
  );
};

export default EntriesList;
