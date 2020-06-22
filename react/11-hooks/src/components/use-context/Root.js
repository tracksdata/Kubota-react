import React from 'react';
import Level1 from './Level1';
import UserContext from './UserContext';

const Root = () => {
    let logedUser = "Praveen";
    return (

        <div className="card-panel teal lighten-2">

            <h1>Root Component - {logedUser}</h1>
            <hr />
            <UserContext.Provider value={logedUser}>

                <Level1 />

            </UserContext.Provider>

        </div>
    );
};

export default Root;