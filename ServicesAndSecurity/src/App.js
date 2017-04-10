import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CanvasIntegration from './CanvasIntegration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], editNote: {} };
    this.loadData = this.loadData.bind(this);
  }
  loadData() {
    axios.get('http://localhost:3001/api/courses')
         .then(res => {
            return this.setState({ data: res.data });
          });
  }
  componentDidMount() {
    this.loadData();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Assignment 1 - Valerie Beltrame</h2>
        </div>
        <CanvasIntegration data={this.state.data}/>
      </div>
    );
  }
}

export default App;
