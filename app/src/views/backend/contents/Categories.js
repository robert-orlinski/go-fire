import React, { useState, useEffect } from 'react';

import { getCategories, deleteItem } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import bannerImage from '../../../static/banners/results.jpg';
import CategoriesList from '../../../components/backend/items/CategoriesList';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  // const handleCategoryDelete = (_id) => {
  //   const resultsWithoutDeletedEntry = categories.filter((entry) => {
  //     return entry._id !== _id;
  //   });
  //   setCategories(resultsWithoutDeletedEntry);
  //   deleteItem(_id);
  // };

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        Categories list
      </Banner>
      <NarrowContainer>
        <CategoriesList
          categories={categories}
          setCategories={setCategories}
          // handleCategoryDelete={handleEntryDelete}
        />
      </NarrowContainer>
    </>
  );
};

export default Categories;
