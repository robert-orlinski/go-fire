import BannerImage from './../../../static/banners/add-category.jpg';

import { NarrowContainer } from '../../../components/Common/containers';
import { CenteredText } from '../../../components/Common/texts';
import AddCategoryForm from '../../../components/Backend/Forms/AddCategoryForm';
import Banner from '../../../components/Backend/Banner';

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
