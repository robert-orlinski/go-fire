import { useState, useEffect } from 'react';

import ItemsContext from './Context/ItemsContext';

import { ExistingEntryType } from '../../../common/types';
import { getEntries } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import BannerImage from '../../../static/banners/entries.jpg';
import EntriesList from '../../../components/backend/items/EntriesList';

const Entries = () => {
  const [entries, setEntries] = useState<ExistingEntryType[]>([]);

  useEffect(() => {
    getEntries(setEntries);
  }, []);

  return (
    <>
      <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
        Entries list
      </Banner>
      <NarrowContainer>
        <ItemsContext.Provider value={{ items: entries, setItems: setEntries }}>
          <EntriesList />
        </ItemsContext.Provider>
      </NarrowContainer>
    </>
  );
};

export default Entries;
