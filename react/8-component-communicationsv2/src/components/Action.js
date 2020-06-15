import React, { Component } from 'react';

class Action extends Component {
    state = {
        count: 0
    }
    incrementCount() {
        let { count } = this.state;
        this.setState({ count: count + 1 });
        let { onAction } = this.props;
        onAction(count);

    }
    render() {
        return (

            <div>

                <div className="mystyles">

                    <div className="card card-body">
                        <button onClick={e => this.incrementCount()} className="btn btn-primary">{this.props.btnLbl}</button>
                        <hr />
                        <span className="badge badge-warning">{this.state.count}</span>
                    </div>

                </div>




            </div>

        );
    }
}

export default Action;