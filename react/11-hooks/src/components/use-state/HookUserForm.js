import React, { useState } from 'react';

const HookUserForm = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '' })
    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input onChange={e => setUser({ ...user, firstName: e.target.value, lastName: e.target.value })} id="first_name" type="text" class="validate" />
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input onChange={e => setUser({ ...user, lastName: e.target.value })} id="last_name" type="text" class="validate" />
                        <label for="last_name">Last Name</label>
                    </div>
                    First Name: {user.firstName} <br />
                    Last Name: {user.lastName}
                    <br />
                    <pre>
                        {JSON.stringify(user)}
                    </pre>
                </div>
            </form>
        </div>


    );
};

export default HookUserForm;