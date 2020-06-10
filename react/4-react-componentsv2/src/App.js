import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Employee from './components/Employee';

class App extends Component {
  
  render() {
    return (
      <div className="container mt-3">

        <Employee/>

      </div>
    );
  }
}

export default App;