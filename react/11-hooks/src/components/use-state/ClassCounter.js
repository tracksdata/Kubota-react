import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment=()=>{
        let {count} = this.state;
        this.setState({count: count + 1 })
    }
    render() {
        let {count} = this.state;
        return (
            <div className="card-panel blue-grey darken-10">
                <button  className="btn" onClick={this.increment}>Hit - {count}</button>
            </div>
        );
    }
}

export default ClassCounter;