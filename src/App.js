import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Flower} from './components/Flowers'
import './Styles.css'

class App extends Component {

  constructor(props) {
      super(props)

      this.state = {
        flowers : []
      }
  }

  render() {
    return (
      <div className="flowers">
        <h1>Flowers</h1>
        <Flower />
      </div>
    )
  }
}

export default App;
