import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import StoryBox from './components/StoryBox';

class App extends Component {
  render() {
    let {title} = this.props;
    return (
      <div className="container mt-2">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="#"> {title}</a>
        </nav>

        <hr />
        <StoryBox title="My Stories"/>
      </div>
    );
  }
}

export default App;