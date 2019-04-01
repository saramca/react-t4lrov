import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MyTable from './mytable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>
          Expandable Rows Demo
        </h1>
        <MyTable/>
      </div>

    );
  }
}

render(<App />, document.getElementById('root'));
