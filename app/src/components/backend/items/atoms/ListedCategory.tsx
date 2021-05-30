import { ListedCategoryType } from '../../../../common/types';

import ItemContainer from './Container';
import ItemHeader from './Header';

const ListedCategory: React.FC<ListedCategoryType> = ({ _id, name }) => (
  <ItemContainer as="li">
    <ItemHeader
      _id={_id}
      name={name}
      containerAs="div"
      headerAs="h4"
      deleteButtonLabel="Delete category"
      isArrow={false}
    />
  </ItemContainer>
);

export default ListedCategory;
