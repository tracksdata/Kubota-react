import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

class App extends Component {

  state = {
    msg: 'Default data'
  }
  greet(msg) {
    console.log('greet got clicked ' + msg);
    this.setState({ msg: msg }); // state is changed. then render function rerenders

  }


  render() {
    console.log("====> render <======");
    
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">APP Component</div>
          <div className="card-body">
            <h1>APP Component</h1>
            <input onChange={e=>this.setState({ msg: e.target.value })} />
            <button onClick={(e) => this.greet('Good Morning')} className="btn btn-primary">Greet Me</button>
            <hr />
            <Greet msg={this.state.msg} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;