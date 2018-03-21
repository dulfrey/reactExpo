import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import List from './List.js';
import MiniForm from './MiniForm.js'

class App extends Component {
  render() {
    return (
      <div>
        <MiniForm question_id=""/>
        <List question_id=""/>
        
      </div>
    );
  }
}

export default App;
