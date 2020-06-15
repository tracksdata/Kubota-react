import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './components/Greet';
class App extends Component {

  constructor() {
    console.log("===> APP:: constructor");
    super();
    this.state = {
      msg: 'Default message'
    }

  }

  chgangeGreeting(message) {
    this.setState({ msg: message });

  }

  componentDidMount() {
    console.log("===> APP:: componentDidMount");
    setTimeout(() => {
      let response = "hello react!"
      this.setState({ msg: response });
    }, 5000)

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("===> APP:: componentDidUpdate");
  }
  render() {
    console.log("===> APP:: render()");

    let { msg } = this.state;
    return (
      <div className="container">

        <h1>{this.props.title} by {this.props.trainer}</h1>
        <hr />
        <button onClick={e => this.chgangeGreeting('Good Morning')} className="btn btn-primary" style={{ margin: "5px" }}>GM</button>
        <button onClick={e => this.chgangeGreeting('Good Afternoon')} className="btn btn-primary" style={{ margin: "5px" }}>GF</button>
        <button onClick={e => this.chgangeGreeting('Good Evening')} className="btn btn-primary" style={{ margin: "5px" }}>GE</button>
        <button onClick={e => this.chgangeGreeting('')}className="btn btn-danger" >Remove</button>
        <hr />
        {msg ? <Greet msg={msg} /> : null}
        
      </div>
    );
  }
}

App.defaultProps = {
  // title:'react',
  trainer: 'Bucky Wall'
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}


export default App;