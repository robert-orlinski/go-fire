import { useState, useEffect } from 'react';

import { CenteredTextWithoutSpace } from '../../../Common/texts';

const FinalMessage = ({ message }) => {
  const [messageToDisplay, setMessageToDisplay] = useState(null);

  useEffect(() => {
    setMessageToDisplay(message);
  }, [message]);

  useEffect(() => {
    setTimeout(() => setMessageToDisplay(null), 3000);
  }, [messageToDisplay]);

  return (
    messageToDisplay && (
      <CenteredTextWithoutSpace style={{ marginTop: '2rem' }}>
        {messageToDisplay}
      </CenteredTextWithoutSpace>
    )
  );
};

export default FinalMessage;
