import styled from 'styled-components';

import { ListWithoutSpace } from '../../common/texts';

const BoxesContainer = styled(ListWithoutSpace)`
  --link-box-margin: 1.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 calc(var(--link-box-margin) * -1);
`;

export default BoxesContainer;
