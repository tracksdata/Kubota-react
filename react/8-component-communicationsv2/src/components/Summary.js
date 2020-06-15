import React from 'react';

const Summary = (props) => {
    return (
        <div className="text-center">
            <h1> <span className="badge badge-info">Total Hits: {props.totalCount} </span></h1>
        </div>
    );
};

export default Summary;