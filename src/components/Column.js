import React, { Component } from 'react';
import styled from 'styled-components';
import PointBox from './PointBox';

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
  input {
    width: 100%;
    background: #dfe6e9;
    border: none;
    padding: 1rem;
    font-size: 2.2rem;
    text-align: center;
    outline: none;
    font-weight: 700;
    color: inherit;
    text-transform: uppercase;
  }
  .point-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.6rem;
    border-radius: 5px;
    /* background: #0984e3; */
    color: #ffeaa7;
    width: 100%;
    margin-bottom: 2rem;
    font-size: 3.6rem;
    transition: all 200ms;
    cursor: pointer;

    &:hover {
      background: #74b9ff;
    }
  }
`;

class Column extends Component {
  state = {
    category: ''
  };
  handleInputChange = e => {
    this.setState({ category: e.target.value });
  };
  render() {
    const { category } = this.state;
    const { values } = this.props;
    return (
      <StyledColumn>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={this.handleInputChange}
        />
        {values.map((v, i) => (
          <PointBox value={values[i]} key={values[i]} />
        ))}
      </StyledColumn>
    );
  }
}

export default Column;
