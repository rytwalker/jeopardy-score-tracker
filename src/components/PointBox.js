import React, { Component } from 'react';

class PointBox extends Component {
  state = { selected: false };
  handleSelectState = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    const { selected } = this.state;
    const { value } = this.props;
    const background = selected
      ? { background: '#74b9ff' }
      : { background: '#0984e3' };
    return (
      <div
        style={background}
        onClick={this.handleSelectState}
        className="point-box"
      >
        {value}
      </div>
    );
  }
}

export default PointBox;
