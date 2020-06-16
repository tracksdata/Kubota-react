import React, { useState } from 'react';

const HookCounter = () => {
    let [count, setCount] = useState(0)

    let increment = () => {

        for(let i=1;i<=5;i++){ 
            setCount(preCount=>preCount+1);
           // setCount(count + i)
        }
       
    }
    return (
        <div className="card-panel blue-grey darken1">
            <button onClick={increment} className="btn">Increment 5 times - {count}</button>
        </div>
    );
};

export default HookCounter;