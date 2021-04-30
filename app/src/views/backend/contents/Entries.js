import React, { useState, useEffect } from 'react';

import ItemsContext from './Context/ItemsContext';

import { getEntries } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import bannerImage from '../../../static/banners/entries.jpg';
import EntriesList from '../../../components/backend/items/EntriesList';

const Entries = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntries(setEntries);
  }, []);

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
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
