import BannerImage from './../../../static/banners/add-category.jpg';

import { NarrowContainer } from '../../../components/common/containers';
import { CenteredText } from '../../../components/common/texts';
import AddCategoryForm from '../../../components/backend/forms/AddCategoryForm';
import Banner from '../../../components/backend/Banner';

const AddCategory = () => (
  <>
    <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
      Add category
    </Banner>
    <NarrowContainer>
      <CenteredText>
        The category you add, will be shown in the "add new entry" form.
      </CenteredText>
      <AddCategoryForm />
    </NarrowContainer>
  </>
);

export default AddCategory;
