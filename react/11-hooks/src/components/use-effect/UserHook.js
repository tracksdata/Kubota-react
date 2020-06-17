import React, { useState, useEffect } from 'react';

const UserHook = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    }, [users])

    return (
        <div className="card-panel">

            <h3>Users</h3>
            <hr />
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>{user.id} - {user.name}</li>
                        )

                    })
                }
            </ul>

        </div>
    );
};

export default UserHook;