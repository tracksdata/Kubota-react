import React, { useState, useEffect } from 'react';

const HookAutoCount = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(preCount => preCount + 1)
    }

    useEffect(() => {
        console.log("===> useEffect-1");
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }

    },[]);
    console.log("====> render")
    return (

        < div >

            <div className="card-panel">
                count: {count}

            </div>

        </div >
    );
};

export default HookAutoCount;