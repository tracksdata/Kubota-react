import React, { Component } from 'react';
import Action from './Action';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }

    calculateTotalCount(e) {
        let { totalCount } = this.state;
        this.setState({ totalCount: + totalCount + e });
    }

    renderActions() {
        let buttons = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];
        return buttons.map((btn, index) => {
            return (
                <Action btnLbl={btn} key={index} onAction={e => this.calculateTotalCount(e)} />
            )
        })
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">Action Box </div>
                <div className="card-body">
                    {this.renderActions()}
                </div>
                <div className="card-footer text-center">
                    <h1>Total Count: {this.state.totalCount}</h1>

                </div>
            </div>
        );
    }
}

export default ActionBox;