import React, { Component } from 'react';

class Greet extends Component {
    constructor() {
        super();
        console.log("===> GREET:: constructor");

    }

    componentDidMount() {
        console.log("===> GREET:: componentDidMount");
       this.interval = setInterval(() => {
          this.forceUpdate();
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("===> GREET:: componentDidUpdate");
        console.log(this.props);
        console.log(prevProps);
    }

    componentWillUnmount(){
        console.log("===> GREET:: componentWillUnMount");
        clearInterval(this.interval);
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("===> GREET:: shouldComponentUpdate");
        //return true;
        return this.props.msg !== nextProps.msg;
    }
    render() {
        console.log("===> GREET:: render");

        return (
            <div>
                <div className="alert alert-info">
                    <h1>{this.props.msg}</h1>
                    <hr />
                    <div>
                        {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Greet;