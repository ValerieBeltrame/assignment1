import React, { Component } from 'react';
import Course from './Course';

export default class CanvasIntegration extends Component {
  render() {
    return (
      <div>
        <h1>Canvas course overview:</h1>
        {
          this.props.data.map((course) => {
            return <Course key={course.id} name={course.name} />
          })
        }
      </div>
    )
  }
}
