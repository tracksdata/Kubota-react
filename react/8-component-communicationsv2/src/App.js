import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ActionBox from './components/ActionBox';
class App extends Component {
  render() {
    return (
      <div className="container">
        <hr/>
        <ActionBox/>
      </div>
    );
  }
}

export default App;