import React from 'react';

import ListedCategory from './atoms/ListedCategory';
import { NarrowCenterContainer } from '../../common/containers';

const CategoriesList = ({ results, handleEntryDelete }) =>
  results.length > 0 ? (
    results.map((result) => (
      <ListedCategory
        key={result._id}
        handleEntryDelete={handleEntryDelete}
        {...result}
      />
    ))
  ) : (
    <NarrowCenterContainer>
      <p>There are no categories! You can add anyone.</p>
    </NarrowCenterContainer>
  );

export default CategoriesList;
