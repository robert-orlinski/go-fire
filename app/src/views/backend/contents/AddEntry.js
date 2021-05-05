import BannerImage from './../../../static/banners/add-entry.jpg';

import { NarrowContainer } from '../../../components/common/containers';
import { CenteredText } from '../../../components/common/texts';

import AddEntryForm from '../../../components/backend/forms/AddEntryForm';
import Banner from '../../../components/backend/Banner';

const AddEntry = () => (
  <>
    <Banner style={{ backgroundImage: `url(${BannerImage})` }}>
      Add new entry
    </Banner>
    <NarrowContainer>
      <CenteredText>
        Choose operation type, write down all the needed info and select
        category that'll match Your investment or saving entry.
      </CenteredText>
      <AddEntryForm buttonStyle={{ marginTop: '1rem' }} />
    </NarrowContainer>
  </>
);

export default AddEntry;
