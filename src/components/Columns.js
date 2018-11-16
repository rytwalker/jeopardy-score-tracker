import React, { Component } from 'react';
import styled from 'styled-components';
import Column from './Column';

const StyledColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Columns extends Component {
  state = {};
  render() {
    return (
      <StyledColumnContainer>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </StyledColumnContainer>
    );
  }
}

export default Columns;
