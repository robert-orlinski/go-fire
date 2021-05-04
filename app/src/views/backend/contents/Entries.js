import { useState, useEffect } from 'react';

import ItemsContext from './Context/ItemsContext';

import { getEntries } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/Common/containers';

import Banner from '../../../components/Backend/Banner';
import BannerImage from '../../../static/banners/entries.jpg';
import EntriesList from '../../../components/Backend/Items/EntriesList';

const Entries = () => {
  const [entries, setEntries] = useState([]);

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
