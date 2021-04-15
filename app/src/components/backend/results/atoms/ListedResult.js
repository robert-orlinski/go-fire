import React, { useState } from 'react';
import styled from 'styled-components';

import ResultAccountAndCategory from './list/AccountAndCategory';
import ResultDescription from './list/Description';
import ResultHistory from './list/History';
import ResultHeader from './list/Header';
import EditForm from './list/EditForm';

const ResultContainer = styled.section`
  --vertical-padding: 2rem;
  --horizontal-padding: 3.5rem;
  --border-style: 3px solid var(--transparent-green-max);

  border: var(--border-style);

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }
`;

const ResultContent = styled.article`
  padding: calc(var(--vertical-padding) * 1.6) var(--horizontal-padding);
  border-top: var(--border-style);
`;

const ListedResult = ({ _id, name, message, account, type, values }) => {
  const [isContainerVisible, toggleContainerVisibility] = useState(false);
  const [isEditFormVisible, toggleEditFormVisibility] = useState(false);

  return (
    <ResultContainer>
      <ResultHeader
        name={name}
        buttonTitle="More info"
        isContainerVisible={isContainerVisible}
        handleButtonClick={toggleContainerVisibility}
      />
      <ResultContent style={isContainerVisible || { display: 'none' }}>
        {message && (
          <ResultDescription title="Description:" description={message} />
        )}
        <ResultAccountAndCategory
          title="Account and category:"
          account={account}
          category={type}
        />
        <ResultHistory title="History:" values={values} />
        <EditForm
          buttonTitle={isEditFormVisible ? 'Close form' : 'Edit entry'}
          onButtonClick={() => toggleEditFormVisibility(!isEditFormVisible)}
          id={_id}
          formStyle={
            isEditFormVisible ? { marginTop: '3rem' } : { display: 'none' }
          }
        />
      </ResultContent>
    </ResultContainer>
  );
};

export default ListedResult;
