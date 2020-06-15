import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import ActionBox from './components/ActionBox';
class App extends Component {
  render() {
    document.title = 'My own title- Praveen'
    return (
      <div className="container">
        <ActionBox />
      </div>
    );
  }
}

export default App;