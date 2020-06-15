import React, { Component } from 'react';
import Action from './Action';
import Summary from './Summary';

class ActionBox extends Component {
    state = {
        totalCount: 0
    }

    fun(e) {

        let { totalCount } = this.state;
        this.setState({ totalCount: totalCount + 1 })


    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Action Box </div>
                <div className="card-body">
                    <Action btnLbl='Walk' onAction={e => this.fun(e)} />
                    <Action btnLbl='Run' onAction={e => this.fun(e)} />
                    <Action btnLbl='Sleep' onAction={e => this.fun(e)} />

                </div>
                <div className="card-footer">

                    <Summary totalCount={this.state.totalCount} />

                </div>
            </div>
        );
    }
}

export default ActionBox;