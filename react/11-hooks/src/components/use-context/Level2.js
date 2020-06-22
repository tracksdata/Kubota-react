import React, { useContext } from 'react';
import UserContext from './UserContext';

const Level2 = () => {
    const user = useContext(UserContext)
    return (
        <div className="card-panel green lighten-2">
            <h1>Level-2 Component - {user}</h1>
            <hr />
        </div>
    );
};

export default Level2;