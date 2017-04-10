import React, { Component } from 'react';

export default class Course extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  }
}
