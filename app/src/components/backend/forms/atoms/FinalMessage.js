import React, { useState, useEffect } from 'react';

import { CenteredText } from '../../../common/texts';

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
      <CenteredText style={{ marginTop: '2rem' }}>
        {messageToDisplay}
      </CenteredText>
    )
  );
};

export default FinalMessage;
