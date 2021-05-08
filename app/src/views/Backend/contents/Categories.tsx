import { useState, useEffect } from 'react';

import ItemsContext from './Context/ItemsContext';

import { CategoryType } from '../../../common/types';
import { getCategories } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import BannerImage from '../../../static/banners/entries.jpg';
import CategoriesList from '../../../components/backend/items/CategoriesList';

const Categories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <>
      <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
        Categories list
      </Banner>
      <NarrowContainer>
        <ItemsContext.Provider
          value={{ items: categories, setItems: setCategories }}
        >
          <CategoriesList />
        </ItemsContext.Provider>
      </NarrowContainer>
    </>
  );
};

export default Categories;
