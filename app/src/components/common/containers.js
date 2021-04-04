import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  min-height: calc(100vh - var(--banner-height-desktop));
  padding: 100px 0;
`;

export { Container };
