import React, { Component } from 'react';

class Greet extends Component {
    render() {
        return (
            <div>
                <div className="alert alert-info">
                    <h1>Message: {this.props.msg}</h1>
                </div>
            </div>

        );
    }
}

export default Greet;