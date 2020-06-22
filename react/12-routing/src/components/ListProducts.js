import React, { useEffect, useState } from 'react';
import axios from 'axios';



const ListProducts = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        console.log("=======>");
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .then(products => {
                console.log(products);
                setUser(products);
            })
    }, [])


    return (users.map((user, idx) => {
        return (
            <li>{user.name}</li>
        )
    })







    );
};

export default ListProducts;