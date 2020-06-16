import React, { useState } from 'react';
const HookList = () => {
    const [list, setList] = useState([])

    const addItem = () => {
        let item = { id: list.length, value: Math.floor(Math.random() *100) }
        setList(list.concat(item))
    }
    return (
        <div className="card-panel blue-grey darken1">
            <button className="btn" onClick={addItem}>Add Item</button>
            <br />
            <br />
            <ul className="collection">
                {
                    list.map((item, index) => {
                        return (
                            <li className="collection-item" key={item.index}> {item.value}</li>
                        )
                    })
                }
            </ul>

        </div>
    );
};

export default HookList;