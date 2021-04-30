import React from 'react';

import ResultContainer from './Container';
import ResultHeader from './Header';

const ListedCategory = ({ _id, name }) => (
  <ResultContainer as="li">
    <ResultHeader
      _id={_id}
      name={name}
      as="div"
      headerLevel="h3"
      deleteButtonLabel="Delete category"
    />
  </ResultContainer>
);

export default ListedCategory;
