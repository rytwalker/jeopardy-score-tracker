import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;

  h1 {
    color: #0984e3;
    text-transform: uppercase;
  }

  a {
    color: #2d3436;
    text-decoration: none;
  }

  .active {
    text-decoration: underline;
    color: #0984e3;
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
        <NavLink exact to="/">
          Jeopardy
        </NavLink>
        <NavLink to="/double-jeopardy">Double Jeopardy</NavLink>
        <NavLink to="/final-jeopardy">Final Jeopardy</NavLink>
      </StyledNav>
    );
  }
}

export default Navigation;
