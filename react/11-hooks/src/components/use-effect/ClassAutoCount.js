import React, { Component } from 'react';

class ClassAutoCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    tick = () => {
        let { count } = this.state;
        this.setState({ count: count + 1 })
    }
    componentDidMount() {
        this.interval = setInterval(() => {
         // this.tick();
        }, 1000)
    }

    componentDidUpdate() {
        console.log("==> componentDidUpdate");

    }

    componentWillMount() {
        clearInterval(this.interval)
    }
    render() {
        let { count } = this.state;
        return (
            <div className="card-panel">
                count: {count}

            </div>
        );
    }
}

export default ClassAutoCount;