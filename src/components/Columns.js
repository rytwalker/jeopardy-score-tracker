import React, { Component } from 'react';
import styled from 'styled-components';
import Column from './Column';

const StyledColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Columns extends Component {
  state = {
    colArr: [1, 2, 3, 4, 5, 6]
  };
  render() {
    const { values } = this.props;
    const { colArr } = this.state;
    return (
      <StyledColumnContainer>
        {colArr.map(col => (
          <Column values={values} key={col} />
        ))}
      </StyledColumnContainer>
    );
  }
}

export default Columns;
