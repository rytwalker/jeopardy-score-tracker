import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #0984e3;
    text-transform: uppercase;
  }
`;

class Navigation extends Component {
  state = {};
  render() {
    return (
      <StyledNav>
        <h1>Jeopardy! Score Tracker</h1>
        <div>TotalPoints: 0</div>
        <div>Round One Points: 0</div>
        <div>Round Two Points: 0</div>
        <div>Reset Score</div>
        <div>Double Jeopardy</div>
        <div>Final Jeopardy</div>
      </StyledNav>
    );
  }
}

export default Navigation;
