import React, { Component } from 'react';

class Action extends Component {
    state = {
        count: 0
    }

    incrementCount() {
        let { count } = this.state;
        this.setState({ count: count + 1 })
        let { onAction } = this.props;
        onAction(this.props.btnLbl);
    }

    render() {
        let { btnLbl } = this.props;
        let btnColor='';
        btnLbl<0? btnColor='btn btn-danger':btnColor='btn btn-primary';

        return (

            <div>
                <div className="mystyles">

                    <div className="card card-body">
                        <button onClick={e => this.incrementCount(e)} className={btnColor}>{this.props.btnLbl}</button>
                        <hr />
                        <span className="badge badge-warning">{this.state.count}</span>
                    </div>

                </div>




            </div>

        );
    }
}

export default Action;