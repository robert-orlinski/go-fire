import React from 'react';

import { ItemSection } from '../../../common/containers';
import { TextWithoutSpace } from '../../../common/texts';

const ItemDescription = ({ title, description }) => (
  <ItemSection>
    <h2>{title}</h2>
    <TextWithoutSpace>{description}</TextWithoutSpace>
  </ItemSection>
);

export default ItemDescription;
