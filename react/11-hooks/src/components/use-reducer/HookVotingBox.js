import React, { useReducer } from 'react';

const reducer = (state, action) => {

    let { type, value } = action
    switch (type) {
        case 'INCREMENT': {
            return { ...state, count: state.count + value }
        }
        case 'DECREMENT': {
            return { ...state, count: state.count - value }

        }
        case 'RESET': {
            return { ...state, count: 0 }
        }
    }

}

// store 
const initialState = {
    count: 100,
    name: 'Praveen'
}

const myState = {
    maxVotes: 1000
}

const HookVotingBox = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { count } = state;

    const [secondState, secondDispatch] = useReducer(reducer, initialState);
    const { count: secondCount } = secondState;

    return (
        <div className="card-panel">
            <div className="card-panel">
                <div className="row">
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'INCREMENT', value: 1 })} className="btn btn-primary">+1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'DECREMENT', value: 1 })} className="btn btn-primary">-1</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'INCREMENT', value: 10 })} className="btn btn-primary">+10</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'DECREMENT', value: 10 })} className="btn btn-primary">-10</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => dispatch({ type: 'RESET' })} className="btn btn-primary">Reset</button>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <div className="col s12 center">
                        <h5>Count: {count}</h5>
                    </div>
                </div>
            </div>


            <div className="card-panel">
                <div className="row">
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'INCREMENT', value: 1 })} className="btn btn-primary">+1</button>
                    </div>
                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'DECREMENT', value: 1 })} className="btn btn-primary">-1</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'INCREMENT', value: 10 })} className="btn btn-primary">+10</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'DECREMENT', value: 10 })} className="btn btn-primary">-10</button>
                    </div>

                    <div className="col s2">
                        <button onClick={e => secondDispatch({ type: 'RESET' })} className="btn btn-primary">Reset</button>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <div className="col s12 center">
                        <h5>Count: {secondCount}</h5>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HookVotingBox;