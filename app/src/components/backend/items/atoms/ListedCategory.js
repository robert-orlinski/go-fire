import ItemContainer from './Container';
import ItemHeader from './Header';

// interface Props {
//   _id: number;
//   name: string;
// }

const ListedCategory = ({ _id, name }) => (
  <ItemContainer as="li">
    <ItemHeader
      _id={_id}
      name={name}
      as="div"
      headerLevel="h4"
      deleteButtonLabel="Delete category"
    />
  </ItemContainer>
);

export default ListedCategory;
